const { app } = require('./app');

const port = 3000;
app.listen(port, () => {
  console.log(`The app listening on port http://localhost:${port}`);
});