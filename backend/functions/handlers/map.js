const {db, admin} = require('../util/admin');

const firebaseConfig = require('../util/firebaseConfig');

const firebase = require('firebase/compat/app');
const auth = require('firebase/compat/auth');
firebase.initializeApp(firebaseConfig);

exports.viewMap = (req,res) => {

    db
        .collection('map')
        .get()
        .then(data => {
            let posts = [];
            data.forEach(doc => {
                const createdAt = doc.data().createdAt.toDate();
                const formattedDate = new Date(createdAt).toLocaleString();
                posts.push({
                    locationId: doc.id,
                    body: doc.data().body,
                    username: doc.data().username,
                    createdAt: formattedDate,
                    location: {lat: doc.data().latitude, lng: doc.data().longitude}
                });
            })
            return res.json(posts);
        })
        .catch(err => console.error(err));
}



// exports.viewMap = async () => {
//     const locations = firebase.firestore().collection('map');
//     const querySnapshot = await locations.get();

//     return querySnapshot.docs.map((doc) => doc.data());
// }