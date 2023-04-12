const  connection  = require('../../config');

const signinQuery = (userData) => {
  const { email} = userData;

  const sql = {
    text: 'SELECT id,username, email,password, photo FROM users where email=$1 ;' ,
     values: [email] 
  }

  return connection.query(sql)
};

module.exports = signinQuery;