const userRouter = require('./user');
const homeRouter = require('./post');

const router = require('express').Router();

router.use('/users', userRouter)
router.use('/users', homeRouter)

module.exports = router