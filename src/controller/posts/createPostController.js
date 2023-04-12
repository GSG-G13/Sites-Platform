const {  CreatePost ,getPost} = require("../../database/query/posts/createPostQuery");




const CreatePostController = (req, res) => {
  const userPost = req.body;
  const user_id = req.params.id;
  console.log(userPost);
  CreatePost(userPost,user_id).then((data=>console.log(data)))//res.json("your post has created successfully")
  getPost(user_id).then((result) => {
    res.status(200).json(result.rows)
    console.log(result.rows)
  });
}

module.exports = CreatePostController;