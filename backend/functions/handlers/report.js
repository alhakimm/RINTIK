const functions = require("firebase-functions/v2");
const { db } = require('../util/admin');
const firebaseConfig = require('../util/firebaseConfig');
const firebase = require('firebase/compat/app');

firebase.initializeApp(firebaseConfig);

exports.getReports = functions.https.onRequest((req, res) => {
    db
        .collection('reports')
        .get()    
        .then(data => {
            let reports = []
            data.forEach(doc => {
                reports.push(doc.data());
            });
            return res.json(reports);
        })
        .catch(err => console.error(err));
});

exports.addReports = functions.https.onRequest((req, res) => {
    const newReports = {
        name : req.body.name,
        location : req.body.location,
        description : req.body.description,
        category : req.body.category,
        priority : req.body.priority
    };

    
    db
        .collection('reports')
        .add(newReports)
        .then(doc => {
            res.json({message: `report ${doc.id} sent successfully`});
        })
        .catch(err => {
            res.status(500).json ({error: `something went wrong`});
            console.error(err);
        })
});