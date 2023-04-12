const homeRouter = require('express').Router();
const { getPosts } = require('../controller');
const jwt = require('jsonwebtoken');
const path = require('path');
const auth = (req, res, next) => {
    const accesstoken = req.cookies.accesstoken;
    if (accesstoken) {
        jwt.verify(accesstoken, 'potato', (err, decoded) => {
            if (err) {
                res.send({ message: "Error" })
            } else {
                req.mytoken = decoded;
                next()
            }
        })
    } else {
        res.send("/users/signinuser")
    }
}
homeRouter.get('/posts', auth, getPosts);
homeRouter.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'users', 'home.html'))
})

module.exports = homeRouter
