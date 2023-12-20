const functions = require("firebase-functions/v2");
const { db } = require('../util/admin');
const firebaseConfig = require('../util/firebaseConfig');
const firebase = require('firebase/compat/app');

firebase.initializeApp(firebaseConfig);

exports.initializeArticles = functions.https.onRequest((req, res) => {
    // const articlesData = [
    //     {title: 'Mak Kau Hijau', author: 'Irshad Razak', content: 'Content of article 1', id: 1},
    //     {title: 'Bapak Kau Kuning', author: 'Al Hakim Anuar', content: 'Content of article 2', id: 2}
    // ];

    // const promises = articlesData.map((article) => {
    //     return db.collection('articles').add(article)
    // });

    // Promise.all(promises)
    //     .then(() => {
    //         console.log("Articles added to DB successfully");
    //         return res.send("Articles added to DB successfully");
    //     })
    //     .catch((error) => {
    //         console.error("Error adding articles to DB", error);
    //         return res.status(500).json({ error: 'Error initializing articles' });
    //     });

    const articlesData = {
        title : req.body.title,
        author : req.body.author,
        content : req.body.content,
        year : req.body.year,
    };

    admin.firestore()
        .collection('articles')
        .add(this.initializeArticles)
        .then(doc => {
            res.json({message: `article ${doc.id} registered successfully`});
        })
        .catch(err => {
            res.status(500).json ({error: `something went wrong`});
            console.error(err);
        })
})

exports.getArticles = (req,res) =>{
    // db.collection('articles').get()
    //     .then((data) =>{
    //         const articlesData = [];

    //         data.forEach((doc) =>{
    //             articlesData.push(doc.data());

    //             return res.json(articlesData);
    //         })
    //     })
    //     .catch((error) =>{
    //         console.error("Error adding articles to DB", error);
    //         return res.status(500).json({ error: 'Error initializing articles' });
    //     });

    db
        .collection('articles')
        .get()    
        .then(data => {
            let articlesData = []
            data.forEach(doc => {
                articlesData.push(doc.data());
            });
            return res.json(articlesData);
        })
        .catch(err => console.error(err));
};
