const { getAllposts } = require('../../database/query');


const getPosts = (req, res) => {


    getAllposts().then((data) => {

        res.json({
            error: false,
            data: data.rows,
            username: req.mytoken.username,
            photo: req.mytoken.photo,

        })
    })

}
module.exports = getPosts;