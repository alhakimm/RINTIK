const {db, admin} = require('../util/admin');

const firebaseConfig = require('../util/firebaseConfig');

const firebase = require('firebase/compat/app');
const auth = require('firebase/compat/auth');
firebase.initializeApp(firebaseConfig);

exports.signup = (req, res) => {
    const newUser = {
        email: req.body.email,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
        username: req.body.username
    };

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
                return res.status(500).json({error: err.code});
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
            if (err.code == 'auth/invalid-credential'){
                return res.status(403).json({general: 'wrong email or password'});
            } else {
                return res.status(500).json({error: err.code});
            }
        })
}

// exports.uploadImage = (req,res) => {
//     const BusBoy = require('busboy');
//     const path = require('path');
//     const os = require('os');
//     const fs = require('fs');

//     const busboy = new BusBoy({headers: req.headers});

//     let imageFileName;
//     let image;

//     busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
//         console.log(fieldname);
//         console.log(filename);
//         console.log(mimetype);

//         const imageExtension = filename.split('.')[filename.split('.').length - 1];

//         imageFileName = `${Math.round(Math.random()*10000)}.${imageExtension}`;
//         const filePath = path.join(os.tmpdir(), imageFileName);
//         image = {filePath, mimetype};
//         file.pipe(fs.createWriteStream(filePath));

//     });
//     busboy.on('finish', () => {
//         admin.storage().bucket().upload(image.filePath, {
//             resumable: false,
//             metadata: {
//                 metadata: {
//                     contentType: image.mimetype
//                 }
//             }
//         })
//         .then(() => {
//             const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${imageFileName}?alt=media`;
//             return db.doc(`/users/${}`)
//         })
//     })
// }