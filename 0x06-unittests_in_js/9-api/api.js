const express = require('express');
const app = express();

const PORT = 4000;

// Cart route
app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!/^[0-9]+$/.test(id)) {
    res.status(404).send('Not Found');
    return;
  }
  res.send(`Payment methods for cart ${id}`);
});

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Error handler
app.use((err, req, res) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

module.exports = app;

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`API available on localhost port ${PORT}`);
  });
}

module.exports = app;
