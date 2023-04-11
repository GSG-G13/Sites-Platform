const { getAllposts } = require('../../database/query');

const getPosts = (req, res) => {
    getAllposts().then((data) => {
        res.json({
            error: false,
            data: data.rows
        })
    })
}
module.exports = getPosts;