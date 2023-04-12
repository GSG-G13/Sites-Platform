const homeRouter = require('express').Router();
const { getPosts } = require('../controller');
const path = require('path');
const auth = (req, res, next) => {
    const accesstoken = req.cookies.accesstoken;
    if (accesstoken) {
        next()
    } else {
        res.send("/users/signinuser")
    }
}
homeRouter.get('/posts',auth, getPosts);
homeRouter.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'users', 'home.html'))
})

module.exports = homeRouter