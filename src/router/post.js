const routerPost = require("express").Router();
const { CreatePostController } = require("../controller")

routerPost.post("/post/:id", CreatePostController)

module.exports = routerPost