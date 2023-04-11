const userRouter = require('./user');

const router = require('express').Router();

router.use('/users',userRouter)

module.exports = router