const express = require('express');
const app = express();

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;
