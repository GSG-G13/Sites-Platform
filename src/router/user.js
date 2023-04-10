const userRouter = require('express').Router();
const { signUpController } = require('../controller')

userRouter.post('/createUser', signUpController)

module.exports = userRouter