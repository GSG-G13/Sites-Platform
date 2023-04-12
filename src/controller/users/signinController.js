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
      const accesstoken = jwt.sign({
        data: data.rows[0].email
      }, 'potato')
      if (data.rowCount) {
        return bcrypt.compare(password, data.rows[0].password).then((result) => {
          if (result) {
            const accesstoken = jwt.sign({
              data: data.rows[0].email
            }, 'potato')
            res.cookie('accesstoken', accesstoken).json({ message: "Success" });
          } else {
            res.status(401).json({ message: "Password is not correct" });
          }
        })
      } else {
        res.status(401).json({ message: "Please Create Account First" });
      }

    })
    .catch(console.log)


}




module.exports = signinController;