const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const path = require('path');
const router = require('./router');
app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(router)
app.get('/logout', (req, res) => {
    res.clearCookie('accesstoken');
    res.redirect('/');
});
module.exports = { app }



