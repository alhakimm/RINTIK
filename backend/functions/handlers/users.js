const {db, admin} = require('../util/admin');

const firebaseConfig = require('../util/firebaseConfig');

const firebase = require('firebase/compat/app');
const auth = require('firebase/compat/auth');
firebase.initializeApp(firebaseConfig);

const {reduceUserDetails} = require('../util/validators');

exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        username: req.body.username
    };

    const noImage = 'noImage.png'

    // validate data
    let token, userId;
    db.doc(`/users/${newUser.username}`)
        .get()
        .then((doc) => {
            if(doc.exists){
                return res.status(400).json({username: 'this username has already taken'});
            }
            else{
                return firebase
                        .auth()
                        .createUserWithEmailAndPassword(newUser.email, newUser.password)
            }
        })
        // .createCustomToken(newUser.username)
        .then((data) => {
            userId = data.user.uid;
            // console.log(userId);
            return data.user.getIdToken();
        })
        .then((idToken) => {
            // const createdAt = doc.data().createdAt.toDate();
            // const formattedDate = new Date(createdAt).toLocaleString();
            token = idToken;
            console.log(idToken);
            const userCredentials = {
                username: newUser.username,
                email: newUser.email,
                createdAt: new Date(),
                imageUrl: `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${noImage}?alt=media`,
                userId: userId
            };
            return db.doc(`/users/${newUser.username}`).set(userCredentials);
            // return res.status(201).json({token});
        })
        .then(() => {
            return res.status(201).json({token});
        })
        .catch((err) => {
            console.error(err);
            if(err.code == 'auth/email-already-in-use'){
                return res.status(400).json({email: 'email is taken'})
            }
            else{
                return res.status(500).json({general: 'something went wrong, try again'});
            }    
        });
    }

exports.login = (req,res) => {
    const user = {
        email: req.body.email,
        password: req.body.password
    };

    let errors = {};

    if (user.email == '') errors. email = "must not be empty";
    if (user.password == '') errors. password = "must not be empty";

    if(Object.keys(errors).length > 0) return res.status(400).json(errors);

    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(data => {
            return data.user.getIdToken();
        })
        .then(token => {
            return res.json(token);
        })
        .catch(err => {
            console.error(err);
            // if (err.code == 'auth/invalid-credential'){
            return res.status(403).json({general: 'wrong email or password'});
            // } else {
            //     return res.status(500).json({error: err.code});
            // }
        })
}

//add user detail
exports.addUserDetails = (req, res) => {
    let userDetails = reduceUserDetails(req.body);

    db.doc(`/users/${req.user.username}`).update(userDetails)
        .then(() => {
            return res.json({message: 'user profile updated'});
        })
        .catch(err => {
            console.error();
            return res.status(500).json({error: err.code});
        })
}

//get user profile
exports.getUserProfile = (req, res) => {
    let userData = {};

    db.doc(`/users/${req.user.username}`).get()
        .then(doc => {
            if (doc.exists){
                userData.credentials = doc.data();
                console.log(userData.credentials)
                return db.collection('likes').where('username', '==', req.user.username).get();
            } 
        })
        .then(data => {
            userData.likes = [];
            data.forEach(doc => {
                let formattedDate = doc.data();
                if(formattedDate.createdAt){
                    formattedDate.createdAt = formattedDate.createdAt.toDate().toLocaleString();
                }
                //////////////////////////////////////date still raw (kiv)
                userData.likes.push(formattedDate);
            });
            return res.json(userData);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code});
        })
}

//upload profile image
exports.uploadImage = (req,res) => {
    const busboy = require('busboy');
    const path = require('path');
    const os = require('os');
    const fs = require('fs');

    const bb = busboy({ headers: req.headers });

    let imageFileName;
    let image;

    bb.on('file', (fieldname, file, filename, mimetype) => {
        console.log(fieldname);
        console.log(filename);
        console.log(mimetype);
        
        const stringName = filename.filename.toString();
        console.log(stringName);

        const imageExtension = stringName.split('.')[stringName.split('.').length - 1];
        console.log(imageExtension);

        imageFileName = `${Math.round(Math.random()*10000000000000)}.${imageExtension}`;
        const filePath = path.join(os.tmpdir(), imageFileName);
        image = {filePath, mimetype};
        file.pipe(fs.createWriteStream(filePath));

    });
    bb.on('finish', () => {
        admin.storage().bucket().upload(image.filePath, {
            resumable: false,
            metadata: {
                metadata: {
                    contentType: image.mimetype
                }
            }
        })
        .then(() => {
            const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`;
            return db.doc(`/users/${req.user.username}`).update({imageUrl: imageUrl});
        })
        .then(() => {
            return res.json({message: 'image uploaded'});
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code});
        });
    });
    bb.end(req.rawBody);
}