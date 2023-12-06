const { db } = require('../util/admin');

exports.getAllPosts = (req, res) => {
    db
        .collection('posts')
        .orderBy('createdAt', 'desc')
        .get()
        .then(data => {
            let posts = [];
            data.forEach(doc => {
                const createdAt = doc.data().createdAt.toDate();
                const formattedDate = new Date(createdAt).toLocaleString();
                posts.push({
                    postId: doc.id,
                    body: doc.data().body,
                    username: doc.data().username,
                    createdAt: formattedDate,
                });
            })
            return res.json(posts);
        })
        .catch(err => console.error(err));
}

exports.writePost = (req, res) => {
    const newPosts = {
        body: req.body.body,
        username: req.user.username,
        createdAt: new Date()
    };

    db
        .collection('posts')
        .add(newPosts)
        .then(doc => {
            res.json({message: `document ${doc.id} created successfully`});
        })
        .catch(err => {
            res.status(500).json({error: 'something went wrong'});
            console.error(err)
        });
}