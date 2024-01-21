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
                    comments: doc.data().comments,
                    upvote: doc.data().upvote,
                    userImage: doc.data().userImage
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
        userImage: req.user.imageUrl,
        createdAt: new Date(),
        upvote: 0,
        comments: 0
    };

    db
        .collection('posts')
        .add(newPosts)
        .then((doc) => {
            const resPost = newPosts;
            resPost.postId = doc.id;
            res.json({resPost});
        })
        .catch(err => {
            res.status(500).json({error: 'something went wrong'});
            console.error(err)
        });
}

exports.getPost = (req, res) => {
    let postData = {};

    db.doc(`/posts/${req.params.postId}`).get()
        .then(doc => {
            if(!doc.exists){
                return res.status(404).json({error: 'post not found'});
            }

            postData = doc.data();
            postData.postId = doc.id;
            return db.collection('comments').orderBy('createdAt', 'desc').where('postId', '==', req.params.postId).get();
        })
        .then(data => {
            postData.comments = [];
            data.forEach(doc => {
                postData.comments.push(doc.data());
            });
            return res.json(postData);
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code});
        })
}

exports.commentOnPost = (req, res) => {
    if (req.body.body.trim() == '') return res.status(400).json({comment: 'must not be empty'});

    const newComment = {
        body: req.body.body,
        createdAt: new Date(),
        postId: req.params.postId,
        username: req.user.username,
        userImage: req.user.imageUrl
    };

    db.doc(`/posts/${req.params.postId}`).get()
        .then(doc => {
            if (!doc.exists){
                return res.status(404).json({error: 'post not found'});
            }
            return doc.ref.update({comments: doc.data().comments + 1});
        })
        .then(() => {
            return db.collection('comments').add(newComment);
        })
        .then(() => {
            res.json(newComment);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({error: 'something went wrong'});
        })
}

exports.upvotePost =  (req, res) => {
    const upvoteDoc = db.collection('upvote').where('username', '==', req.user.username)
        .where('postId', '==', req.params.postId).limit(1);

    const postDocument = db.doc(`/posts/${req.params.postId}`);

    let postData = {};

    postDocument.get()
        .then(doc => {
            if(doc.exists){
                postData = doc.data();
                postData.postId = doc.id;

                return upvoteDocument.get();
            } else {
                return res.status(404).json({error: 'post not found'});
            }
        })
        .then(data => {
            if (data.empty){
                return db.collection('upvote').add({ //likes->upvote
                    postId: req.params.postId,
                    username: req.user.username
                })
                .then(() => {
                    postData.upvoteCount++; 
                    return postDocument.update({upvoteCount: postData.upvoteCount});
                })
                .then(() => {
                    return res.json(postData);
                })
            } else{
                return res.status(400).json({error: 'post already upvoted'});
            }
        })
        .catch(err => {
            console.error(err);
            res.status(500).json({error: err.code});
        });
}

exports.unUpvotePost = (req, res) => {
    const upvoteDoc = db.collection('upvote').where('username', '==', req.user.username)
    .where('postId', '==', req.params.postId).limit(1);

const postDocument = db.doc(`/posts/${req.params.postId}`);

let postData = {};

postDocument.get()
    .then(doc => {
        if(doc.exists){
            postData = doc.data();
            postData.postId = doc.id;

            return upvoteDocument.get();
        } else {
            return res.status(404).json({error: 'post not found'});
        }
    })
    .then(data => {
        if (data.empty){
            return res.status(400).json({error: 'post not upvoted'});
            
        } else{
            return db.doc(`/upvote/${data.docs[0].id}`).delete()
                .then(() => {
                    postData.upvoteCount--;
                    return postDocument.update({upvoteCount: postData.upvoteCount})
                })
                .then(() => {
                    res.json(postData)
                })
        }
    })
    .catch(err => {
        console.error(err);
        res.status(500).json({error: err.code});
    });
}

exports.deletePost = (req, res) => {
    const document = db.doc(`/posts/${req.params.postId}`);
    document.get()
        .then(doc => {
            if (!doc.exists){
                return res.status(404).json({error: 'post not found'});
            } 
            if (doc.data().username !== req.user.username){
                return res.status(403).json({error: 'Unauthorized'});
            } else{
                return document.delete();
            }
        })
        .then(() => {
            res.json({message: 'post deleted successfully'});
        })
        .catch(err => {
            console.error(err);
            return res.status(500).json({error: err.code});
        })
}