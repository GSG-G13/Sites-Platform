const { CreatePostController, filterpostsController } = require("../controller")
const { GetUserPostsController } = require("../controller")

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
        res.redirect("/users/signinuser")
    }
}
homeRouter.post('/post',auth, CreatePostController)
homeRouter.get('/post',auth, GetUserPostsController)
homeRouter.get('/userfilteredposts/:username',auth,filterpostsController)
homeRouter.get('/posts', auth, getPosts);
homeRouter.get('/home',auth, (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'users', 'home.html'))
})

homeRouter.get('/dashboard',auth, (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'users', 'dashboard.html'));
})


module.exports = homeRouter;
