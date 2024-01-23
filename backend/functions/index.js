const functions = require("firebase-functions/v2");

const express = require('express');
const app = express();

const FBAuth = require('./util/FBAuth');

const {getAllPosts, writePost, getPost, commentOnPost, upvotePost, unUpvotePost, deletePost} = require('./handlers/posts');
const {signup, login, uploadImage, addUserDetails/*, getUserProfile, getUserDetails*/} = require('./handlers/users');
const {getPlumbers, /*regPlumbers*/} = require('./handlers/plumber');
const {getReports, addReports} = require('./handlers/report')
const {initializeArticles, getArticles} = require('./handlers/articles');
const {viewMap} = require('./handlers/map');

// posts route
app.get('/posts', getAllPosts);
app.post('/post', FBAuth, writePost);
app.get('/post/:postId', getPost);
app.delete('/post/:postId', FBAuth, deletePost)
app.get('/post/:postId/upvote', FBAuth, upvotePost);
app.get('/post/:postId/unupvote', FBAuth, unUpvotePost);
app.post('/post/:postId/comment', FBAuth, commentOnPost);


//users route
app.post('/signup', signup);
app.post('/login', login);
app.post('/user/image', FBAuth, uploadImage);
app.post('/user', FBAuth, addUserDetails);
// app.get('/user', FBAuth, getUserProfile);
// app.get('/user/:username', getUserDetails);

//Articles for Education Page
app.get('/articles', getArticles);  //fetch articles
app.post('/articles', initializeArticles);  //initialise articles

//plumbers route
//app.get('/plumbers', getPlumbers);

//reports route
app.get('/reports', getReports);

//map route
app.get('/viewMap', viewMap);

exports.api = functions.https.onRequest(app);
// exports.getPlumbers = functions.https.onRequest(getPlumbers);
// exports.getReports = functions.https.onRequest(getReports);
// exports.addReports = functions.https.onRequest(addReports);
// exports.initializeArticles = functions.https.onRequest(initializeArticles);
// exports.getArticles = functions.https.onRequest(getArticles);





