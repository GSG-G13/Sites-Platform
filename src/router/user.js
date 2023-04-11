const userRouter = require('express').Router();
const { signUpController, signinController } = require('../controller')

userRouter.post('/createuser', signUpController)
userRouter.post('/signinuser', signinController)

module.exports = userRouter