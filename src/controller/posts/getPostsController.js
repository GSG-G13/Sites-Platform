const { getAllposts } = require('../../database/query');


const getPosts = (req, res) => {
    console.log(req.cookie);

    getAllposts().then((data) => {

        res.json({
            error: false,
            data: data.rows
        })
    })

}
module.exports = getPosts;