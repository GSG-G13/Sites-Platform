const { log } = require('console');
const { signinQuery } = require('../../database/query');
const { signinSchema } = require('../../router/schema/user.schema')

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
    signinQuery(value)
      .then((data) => {
        res.send(data.rows[0])
        res.end()
    })
      .catch(console.log)
  }
  
  module.exports = signinController;