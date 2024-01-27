const {admin, db} = require('./admin');

module.exports = (req,res,next) => {
    let idToken;
    console.log("token: " + req.headers.authorization)
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')){
        idToken = req.headers.authorization.split('Bearer ')[1];
    } else {
        console.error('no token found');
        return res.status(403).json({err: 'unauthorized'});
    }

    admin.auth().verifyIdToken(idToken)
        .then(decodedToken => {
            req.user = decodedToken;
            console.log(decodedToken);
            return db.collection('users')
                .where('userId', '==', req.user.uid)
                .limit(1)
                .get();
        })
        .then(data => {
            req.user.username = data.docs[0].data().username;
            req.user.imageUrl = data.docs[0].data().imageUrl;
            return next();
        })
        .catch(err => {
            console.error('error verifying token', err);
            return res.status(403).json(err);
        })
}