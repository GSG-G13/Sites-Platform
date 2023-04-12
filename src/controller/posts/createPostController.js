const {  CreatePost ,getPost} = require("../../database/query/posts/createPostQuery");




const CreatePostController = (req, res) => {
  const userPost = req.body;
  const {mytoken} = req;

  CreatePost(userPost,mytoken).then((data=>console.log(data)))
  getPost(mytoken).then((result) => {
    console.log(result.rows);
    res.status(200).json(result.rows)
    console.log(result.rows)
  });
}

module.exports = CreatePostController;