const express = require('express');
const { join } = require('path');
const app = express();
const router = require('./router');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");
app.use(express.static(join(__dirname, "../public")))
app.use(router)

module.exports = { app }



