const { log } = require('console');
const { signinQuery } = require('../../database/query');
const { signinSchema } = require('../../router/schema/user.schema')
const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken')
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
    
      signinQuery({email})
        .then((data) => {
          bcrypt.compare(req.body.password,data.rows[0].password).then(result=>{
         const accesstoken = jwt.sign({
              data: data.rows[0].email
            },'potato')
              res.cookie('accesstoken',accesstoken)
              res.redirect("/users/posts")
          })
     
      })
        .catch(console.log)

  
  }
  
  module.exports = signinController;