
const functions = require("firebase-functions/v2");

const express = require('express');
const app = express();

const FBAuth = require('./util/FBAuth');

const {getAllPosts, writePost} = require('./handlers/posts');
const {signup, login, uploadImage} = require('./handlers/users');



// posts route
app.get('/posts', getAllPosts);
app.post('/post',FBAuth, writePost);


//users route
app.post('/signup', signup);
app.post('/login', login);
// app.post('/user/image', uploadImage);


exports.api = functions.https.onRequest(app);