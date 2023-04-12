const { signUpUserQuery } = require('../../database/query');
const { signUpSchema } = require('../../router/schema/user.schema')
const bcrypt = require('bcryptjs')
const hashed = (password,callback)=>{
  bcrypt.hash(password,10,callback)
}
const signUpController = (req, res) => {
  const { username, email, password, photo } = req.body;
  
  const { error, value } = signUpSchema.validate({ username, email, password, photo }, { abortEarly: false })
  if (error) {
    res.status(400).json({
      error: true,
      data: {
        errors: error.details
      }
    });
    return;
  }
  hashed(password,(err,result)=>{
    
    signUpUserQuery({username,email, password: result, photo})
    .then(() => res.status(201).json({
      error: false,
      data: {
        data: 'your account has been created succssfully'
      }
    }))
    .catch(console.log)
  })

}

module.exports = signUpController

