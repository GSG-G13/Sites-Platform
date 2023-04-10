const Joi = require('joi')

const signUpSchema = Joi.object({
  username: Joi.string().min(5).max(20).require(),
  email: Joi.string().email().require(),
  password: Joi.string().min(3).max(20).require(),
  photo: Joi.string().require(),
})

module.exports = { signUpSchema }