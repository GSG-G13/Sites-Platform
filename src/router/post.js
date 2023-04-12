const { CreatePostController ,getPosts} = require("../controller")

const homeRouter = require('express').Router();

const path = require('path');
// const auth = (req, res, next) => {
//     const accesstoken = req.cookies.accesstoken;
//     if (accesstoken) {
//         next()
//     } else {
//         res.send("/users/signinuser")
//     }
// }
homeRouter.get('/posts', getPosts);
homeRouter.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '..', '..', 'public', 'html', 'users', 'home.html'))
})
homeRouter.post("/post/:id", CreatePostController)


module.exports = homeRouter;
