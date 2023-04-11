const homeRouter = require('express').Router();
const { getPosts } = require('../controller');


homeRouter.get('/posts', getPosts)

module.exports = homeRouter