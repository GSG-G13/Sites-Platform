const { signinQuery } = require('../../database/query');
const { signinSchema } = require('../../router/schema/user.schema')
const bcrypt = require('bcryptjs')
const path = require('path');
const jwt = require('jsonwebtoken');
const { log } = require('console');

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
      console.log(data.rows[0].id)
      bcrypt.compare(req.body.password, data.rows[0].password).then(result => {
        const accesstoken = jwt.sign({
          id: data.rows[0].id,
          username: data.rows[0].username,
          photo: data.rows[0].photo
        }, 'potato')
        res.cookie('accesstoken', accesstoken).json({ message: "Success" });
        // res.cookie('accesstoken',accesstoken).redirect("/users/home");
      });
    })
    .catch(console.log)


}


module.exports = signinController;