const { signUpUserQuery } = require('../../database/query');
const { signUpSchema } = require('../../router/schema/user.schema')

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
  signUpUserQuery(value)
    .then(() => res.status(201).json({
      error: false,
      data: {
        data: 'your account has been created succssfully'
      }
    }))
    .catch(console.log)
}

module.exports = signUpController