const connection = require('../config');


const signUpUserQuery = (userData) => {
  const { username, email, password, photo } = userData;

  const sql = {
    text: 'INSERT INTO notes (username, email ,password ,photo  ) VALUES ($1 , $2, $3, $4)',
    values: [username, email, password, photo]
  }

  return connection.query(sql)
};

module.exports = signUpUserQuery;