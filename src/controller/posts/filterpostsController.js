const filterpostsQuery = require("../../database/query/posts/filterpostsQuery");




const filterpostsController = (req, res) => {
  const username = req.params.username
  filterpostsQuery(username).then((result) => {
    res.status(200).json({
      data:result.rows
    })
    console.log(result.rows)
  });
}

module.exports = filterpostsController;