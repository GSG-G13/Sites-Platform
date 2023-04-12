
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