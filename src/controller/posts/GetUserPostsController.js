
const { getPost } = require("../../database/query/posts/createPostQuery");

const GetUserPostsController = (req, res) => {
  const { mytoken } = req;
  getPost(mytoken).then((result) => {
    res.status(200).json(result.rows)
  });
}
module.exports = GetUserPostsController;
