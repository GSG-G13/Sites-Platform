const connection = require('../../config');

const filterpostsQuery = (username) => {
 
  console.log(username);

    const sql = {
        text: `SELECT users.username,posts.title,posts.description,posts.url,posts.created_at, posts.photo_website ,users.photo
         FROM users join posts ON posts.user_id = users.id
         where users.username = $1;`,
         values:[username]
    }
    return connection.query(sql);

}
module.exports = filterpostsQuery;