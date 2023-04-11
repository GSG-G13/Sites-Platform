const connection = require('../../config');

const getAllposts = () => {

    const sql = {
        text: ' SELECT users.username,posts.title,posts.description,posts.url,posts.created_at, posts.photo_website ,users.photo FROM users join posts ON posts.user_id = users.id;'
    }
    return connection.query(sql);

}
module.exports = getAllposts;
