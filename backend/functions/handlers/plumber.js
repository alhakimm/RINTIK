const functions = require("firebase-functions/v2");
const { db } = require('../util/admin');
const firebaseConfig = require('../util/firebaseConfig');
const firebase = require('firebase/compat/app');

firebase.initializeApp(firebaseConfig);

exports.getPlumbers = functions.https.onRequest((req, res) => {
    db
        .collection('plumbers')
        .get()    
        .then(data => {
            let plumbers = []
            data.forEach(doc => {
                plumbers.push(doc.data());
            });
            return res.json(plumbers);
        })
        .catch(err => console.error(err));
});

// exports.regPlumbers = functions.https.onRequest((req, res) => {
//     const newPlumber = {
//         name : req.body.name,
//         location : req.body.location,
//         phone : req.body.phone,
//         price : req.body.price,
//         rating : req.body.rating
//     };

//     admin.firestore()
//         .collection('plumbers')
//         .add(regPlumbers)
//         .then(doc => {
//             res.json({message: `plumber ${doc.id} registered successfully`});
//         })
//         .catch(err => {
//             res.status(500).json ({error: `something went wrong`});
//             console.error(err);
//         })
// });