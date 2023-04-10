const express = require('express');
const app = express();

const { join } = require('path');
const router = require('./router');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.disable("x-powered-by");
app.use(express.static(join(__dirname, "../public")))
app.use(router)

module.exports = { app }



