const { signinQuery } = require('../../database/query');
const { signinSchema } = require('../../router/schema/user.schema')
const bcrypt = require('bcryptjs')
const path = require('path');

const jwt = require('jsonwebtoken');

const signinController = (req, res) => {
  const { email, password } = req.body;
  const { error, value } = signinSchema.validate({ email, password }, { abortEarly: false })
  if (error) {
    res.status(400).json({
      error: true,
      data: {
        errors: error.details
      }
    });
    return;
  }
  signinQuery({ email })
    .then((data) => {
      bcrypt.compare(password, data.rows[0].password)
        .then((result) => {
          const accessToken = jwt.sign({ data: data.rows[0].email }, 'potato');
          res.cookie('accessToken', accessToken);
          res.redirect('http://localhost:3000/users/home')
        })
        .catch((error) => {
          console.log(error);
          res.send('Invalid password');
        });
    })
    .catch((error) => {
      console.log(error);
      res.send('User not found');
    });

}






module.exports = signinController;