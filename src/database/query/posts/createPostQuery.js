const connection = require("../../config");

const CreatePost = (userPost, mytoken) => {
  const user_id = mytoken.id
  const { title, description, url, photo_website } = userPost;
  const sql = {
    text: " INSERT INTO posts (title, url, description, photo_website, user_id) VALUES ($1,$2,$3,$4,$5)",
    values: [title, url, description, photo_website, user_id]
  }
  return connection.query(sql);
}


const getPost = (mytoken) => {
  const sql = {
    text: `select 
            p.title,
            p.description,
            p.url,
            p.photo_website,
            u.photo,
            u.username,
            p.created_at
          from posts p 
          join users u
            on u.id = p.user_id
          where u.id = $1`,
    values: [mytoken.id]
  };
  return connection.query(sql);
};

module.exports = { CreatePost, getPost };

