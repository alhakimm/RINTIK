
const functions = require("firebase-functions/v2");

const express = require('express');
const app = express();

const FBAuth = require('./util/FBAuth');

const {getAllPosts, writePost, getPost, commentOnPost, upvotePost, unUpvotePost, deletePost} = require('./handlers/posts');
const {signup, login, uploadImage, addUserDetails/*, getUserProfile, getUserDetails*/} = require('./handlers/users');



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


exports.api = functions.https.onRequest(app);