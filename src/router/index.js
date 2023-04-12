const routerPost = require('./post');
const userRouter = require('./user');

const router = require('express').Router();

router.use('/users',userRouter)
router.use('/posts',routerPost)

module.exports = router