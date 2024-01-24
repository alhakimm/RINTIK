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
                    location: doc.data().location
                });
            })
            return res.json(posts);
        })
        .catch(err => console.error(err));
}

// exports.reportMap = (req,res) => {
//     const newReportMap = {
//         body: req.body.body,
//         username: req.user.username,
//         userImage: req.user.imageUrl,
//         createdAt: new Date(),
//         upvote: 0,
//         comments: 0
//     };

//     db
//         .collection('posts')
//         .add(newReportMap)
//         .then((doc) => {
//             const resPost = newReportMap;
//             resPost.postId = doc.id;
//             res.json({resPost});
//         })
//         .catch(err => {
//             res.status(500).json({error: 'something went wrong'});
//             console.error(err)
//         });
// }



// exports.viewMap = async () => {
//     const locations = firebase.firestore().collection('map');
//     const querySnapshot = await locations.get();

//     return querySnapshot.docs.map((doc) => doc.data());
// }