const userRouter = require('express').Router();
const { signUpController } = require('../controller')

userRouter.post('/createuser', signUpController)

module.exports = userRouter