const express = require('express');
const app = express();
const router = require('./routes');

// Set the database file path from command line argument
app.set('databaseFile', process.argv[2]);

app.use(router);

const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
