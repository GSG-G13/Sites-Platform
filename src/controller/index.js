const signUpController = require('./users/signupController');
const signinController = require('./users/signinController')

const {CreatePostController,getPosts} = require('./posts');


module.exports = { signUpController,signinController, CreatePostController, getPosts }
