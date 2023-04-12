
const { getAllposts } = require('./posts');

const { signUpUserQuery, signinQuery } = require("./users");

module.exports = { signUpUserQuery, signinQuery, getAllposts }
