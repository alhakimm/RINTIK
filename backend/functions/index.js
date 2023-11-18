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

const functions = require("firebase-functions/v2");
const logger = require("firebase-functions/logger");
const admin = require('firebase-admin');
const { getFirestore } = require("firebase-admin/firestore");

admin.initializeApp()

const express = require('express');
const app = express();




app.get('/posts', (req, res) => {
    admin.firestore().collection('posts').get()
        .then(data => {
            let posts = [];
            data.forEach(doc => {
                const createdAt = doc.data().createdAt.toDate();
                const formattedDate = new Date(createdAt).toLocaleString();
                posts.push({
                    postId: doc.id,
                    body: doc.data().body,
                    user: doc.data().user,
                    createdAt: formattedDate,
                });
            })
            return res.json(posts);
        })
        .catch(err => console.error(err));
})


app.post('/post', (req, res) => {
    const newPosts = {
        body: req.body.body,
        user: req.body.user,
        createdAt: new Date()
    };

    admin.firestore()
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .add(newPosts)
        .then(doc => {
            res.json({message: `document ${doc.id} created successfully`});
        })
        .catch(err => {
            res.status(500).json({error: 'something went wrong'});
            console.error(err)
        });
});


exports.api = functions.https.onRequest(app);