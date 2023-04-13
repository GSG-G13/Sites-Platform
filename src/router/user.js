const userRouter = require('express').Router();
const { signUpController, signinController } = require('../controller')

userRouter.post('/createuser', signUpController)
userRouter.post('/signinuser', signinController)
userRouter.get('/logout', (req, res) => {
    res.clearCookie('accesstoken');
    res.redirect('/');
});
module.exports = userRouter