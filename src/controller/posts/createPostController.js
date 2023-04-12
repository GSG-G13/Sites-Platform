const { CreatePost, getPost } = require("../../database/query/posts/createPostQuery");




const CreatePostController = (req, res) => {
  const userPost = req.body;
  const { mytoken } = req;

  CreatePost(userPost, mytoken)
  getPost(mytoken).then((result) => {
    res.status(200).json(result.rows)
  });
}

module.exports = CreatePostController;