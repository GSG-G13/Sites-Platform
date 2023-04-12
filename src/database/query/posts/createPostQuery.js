const connection = require("../../config");

const CreatePost = (userPost, userId) => {
  console.log(userPost)
  const user_id = userId
  const { title, description, url, photo_website } = userPost;
  const sql = {
    text: " INSERT INTO posts (title, url, description, photo_website, user_id) VALUES ($1,$2,$3,$4,$5)",
    values: [title, description, url, photo_website, user_id]
  }
  return connection.query(sql);
}


const getPost = (user_id) => {
  const sql = {
    text: `select 
            p.title,
            p.description,
            p.url,
            p.photo_website 
          from posts p 
          join users u
            on u.id = p.user_id
          where u.id = $1`,
    values: [user_id]
  };
  return connection.query(sql);
};

module.exports = { CreatePost,getPost };

