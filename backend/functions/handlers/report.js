const functions = require("firebase-functions/v2");
const { db } = require('../util/admin');
const firebaseConfig = require('../util/firebaseConfig');
const firebase = require('firebase/compat/app');
const {GeoPoint} = require('firebase-admin/firestore')

firebase.initializeApp(firebaseConfig);

exports.getReports = functions.https.onRequest((req, res) => {
    // let reportData = {}
    console.log(req.user.username)
    db
        .collection(`reports`)
        .where('username', '==', req.user.username)
        .get()
        // .then(doc => {
        //     reportData = doc.data()
        //     reportData.id = 
        // }) 
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
    // const geoPoint = new GeoPoint(req.body.lat, req.body.lng)
    console.log("lat: " + req.body.lat)
    const newReports = {
        username : req.user.username,
        // location: geoPoint,
        lat: req.body.lat,
        lng: req.body.lng,
        description : req.body.description,
        category : req.body.category,
        priority : req.body.priority,
        status : req.body.status
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