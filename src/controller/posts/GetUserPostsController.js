<<<<<<< HEAD

const { getPost } = require("../../database/query/posts/createPostQuery");

const GetUserPostsController = (req, res) => {
  const { mytoken } = req;

  getPost(mytoken).then((result) => {
    res.status(200).json(result.rows)
  });
}
module.exports = GetUserPostsController;
=======

const { getPost} = require("../../database/query/posts/createPostQuery");

const GetUserPostsController=(req,res)=>{
  const {mytoken} = req;

  getPost(mytoken).then((result) => {
    console.log(result.rows);
    res.status(200).json(result.rows)
    console.log(result.rows)
  });
}
module.exports=GetUserPostsController;
>>>>>>> 650f6d4bb38b0abfbe4dd1678bc9daec60adba65
