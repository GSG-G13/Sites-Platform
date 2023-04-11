const  connection  = require('../../config');

const signinQuery = (userData) => {
  const { email, password } = userData;

  const sql = {
    text: 'SELECT email, password FROM users where email=$1 ;' ,
     values: [email] 
  }

  return connection.query(sql)
};

module.exports = signinQuery;