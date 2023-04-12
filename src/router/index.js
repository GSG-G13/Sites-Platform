const userRouter = require('./user');
const homeRouter = require('./post');
const { clientError, serverError } = require('../controller/errors/error');

const router = require('express').Router();

router.use('/users', userRouter)
router.use('/users', homeRouter)
router.use(clientError);
router.use(serverError);

module.exports = router