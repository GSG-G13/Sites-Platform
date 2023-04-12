const signUpController = require('./users/signupController');
const signinController = require('./users/signinController')

const {CreatePostController,getPosts,GetUserPostsController} = require('./posts');


module.exports = { signUpController,signinController, CreatePostController, getPosts ,GetUserPostsController}
