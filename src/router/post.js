const { CreatePostController, getPosts } = require("../controller")

const homeRouter = require('express').Router();

const path = require('path');
const auth = (req, res, next) => {
    const accessToken = req.cookies.accessToken;
    if (accessToken) {
        next()
    } else {
        res.send("/users/signinuser")
    }
}
homeRouter.get('/posts', auth, getPosts);
homeRouter.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'users', 'home.html'))
})
homeRouter.post("/post/:id", CreatePostController)

homeRouter.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'users', 'dashboard.html'));
})


module.exports = homeRouter;
