/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {db} = require("./firebase");
// const firebase = require("firebase-admin/app");
// const logger = require("firebase-functions/logger");






const functions = require("firebase-functions/v2");
// const admin = require('firebase-admin');           admin
// const { getFirestore } = require("firebase-admin/firestore");         admin

const express = require('express');
const app = express();

// admin.initializeApp()      admin

const {getAllPosts, writePost} = require('./handlers/posts');
const {signup, login} = require('./handlers/users');

// const firebaseConfig = {                                         firebaseConfig
//     apiKey: "AIzaSyB5TsZ35N9HbmNXeZPssfcD8fBpYCB2RYw",
//     authDomain: "testingfirebase-3e0f7.firebaseapp.com",
//     databaseURL: "https://testingfirebase-3e0f7-default-rtdb.firebaseio.com",
//     projectId: "testingfirebase-3e0f7",
//     storageBucket: "testingfirebase-3e0f7.appspot.com",
//     messagingSenderId: "1085692725313",
//     appId: "1:1085692725313:web:66300a4eefb6da48055ec0",
//     measurementId: "G-ZT6XN0H2H1"
//   };

// const firebase =  require('firebase/compat/app');         users
// const auth = require('firebase/compat/auth');             users
// firebase.initializeApp(firebaseConfig);                   users

// const db = getFirestore();           admin

// app.get('/posts', (req, res) => {                   posts
//     db
//         .collection('posts')
//         .orderBy('createdAt', 'desc')
//         .get()
//         .then(data => {
//             let posts = [];
//             data.forEach(doc => {
//                 const createdAt = doc.data().createdAt.toDate();
//                 const formattedDate = new Date(createdAt).toLocaleString();
//                 posts.push({
//                     postId: doc.id,
//                     body: doc.data().body,
//                     user: doc.data().user,
//                     createdAt: formattedDate,
//                 });
//             })
//             return res.json(posts);
//         })
//         .catch(err => console.error(err));
// })

// posts route
app.get('/posts', getAllPosts);
app.post('/post', writePost);

// const FBAuth = (req,res,next) => {
//     let idToken;
//     if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
//         idToken = req.headers.authorization.split('Bearer ')[1];
//     } else {
//         console.error('no token found');
//         return res.status(403).json({err: 'unauthorized'});
//     }

//     admin.auth().verifyIdToken(idToken)
//         .then(decodedToken => {
//             req.user = decodedToken;
//             console.log(decodedToken);
//             return db.collection('users')
//                 .where('userId', '==', req.user.uid)
//                 .limit(1)
//                 .get();
//         })
//         .then(data => {
//             req.user.username = data.docs[0].data().username;
//             return next();
//         })
//         .catch(err => {
//             console.error('error verifying token', err);
//             return res.status(403).json(err);
//         })
// }

// app.post('/post',FBAuth, (req, res) => {                     posts
//     const newPosts = {
//         body: req.body.body,
//         user: req.user.username,
//         createdAt: new Date()
//     };

//     db
//         .collection('posts')
//         .add(newPosts)
//         .then(doc => {
//             res.json({message: `document ${doc.id} created successfully`});
//         })
//         .catch(err => {
//             res.status(500).json({error: 'something went wrong'});
//             console.error(err)
//         });
// });


//// sign up route
// app.post('/signup', (req, res) => {                  users
//     const newUser = {
//         email: req.body.email,
//         password: req.body.password,
//         confirmPassword: req.body.confirmPassword,
//         handle: req.body.handle
//     };

//     // TODO validate data
//     let token, userId;
//     db.doc(`/users/${newUser.handle}`)
//         .get()
//         .then((doc) => {
//             if(doc.exists){
//                 return res.status(400).json({handle: 'this handle has already taken'});
//             }
//             else{
//                 return firebase
//                         .auth()
//                         .createUserWithEmailAndPassword(newUser.email, newUser.password)
//             }
//         })
//         // .createCustomToken(newUser.handle)
//         .then((data) => {
//             userId = data.user.uid;
//             // console.log(userId);
//             return data.user.getIdToken();
//         })
//         .then((idToken) => {
//             // const createdAt = doc.data().createdAt.toDate();
//             // const formattedDate = new Date(createdAt).toLocaleString();
//             token = idToken;
//             console.log(idToken);
//             const userCredentials = {
//                 handle: newUser.handle,
//                 email: newUser.email,
//                 createdAt: new Date(),
//                 userId: userId
//             };
//             return db.doc(`/users/${newUser.handle}`).set(userCredentials);
//             // return res.status(201).json({token});
//         })
//         .then(() => {
//             return res.status(201).json({token});
//         })
//         .catch((err) => {
//             console.error(err);
//             if(err.code == 'auth/email-already-in-use'){
//                 return res.status(400).json({email: 'email is taken'})
//             }
//             else{
//                 return res.status(500).json({error: err.code});
//             }    
//         });
    
//     // const auth = firebase.auth();

//     // firebase
//     //     .auth()
//     //     .createUserWithEmailAndPassword(newUser.email, newUser.password)
//     //     .then( data => {
//     //         return res.status(201).json({ message: `user ${data.user.uid} signed up successfully`});
//     //     })
//     //     .catch(err => {
//     //         console.error(err);
//     //         return res.status(500).json( {error: err.code} );
//     //     });
// });

//users route
app.post('/signup', signup);
app.post('/login', login);

// app.post('/login', (req,res) => {                        users
//     const user = {
//         email: req.body.email,
//         password: req.body.password
//     };

//     let errors = {};

//     if (user.email == '') errors. email = "must not be empty";
//     if (user.password == '') errors. password = "must not be empty";

//     if(Object.keys(errors).length > 0) return res.status(400).json(errors);

//     firebase.auth().signInWithEmailAndPassword(user.email, user.password)
//         .then(data => {
//             return data.user.getIdToken();
//         })
//         .then(token => {
//             return res.json(token);
//         })
//         .catch(err => {
//             console.error(err);
//             if (err.code == 'auth/invalid-credential'){
//                 return res.status(403).json({general: 'wrong email or password'});
//             } else {
//                 return res.status(500).json({error: err.code});
//             }
//         })
// });

exports.api = functions.https.onRequest(app);