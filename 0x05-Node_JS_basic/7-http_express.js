const express = require('express');
const fs = require('fs');

const app = express();

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n').filter((line) => line);
      const header = lines[0].split(',');
      const fields = {};

      for (let i = 1; i < lines.length; i += 1) {
        const row = lines[i].split(',');
        if (row.length >= header.length) {
          const field = row[row.length - 1];
          const firstName = row[0];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
      }

      let output = `Number of students: ${lines.length - 1}`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }

      resolve(output);
    });
  });
}

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(200).send('Hello ALX!');
});

app.get('/students', async (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  const database = process.argv[2];

  try {
    const result = await countStudents(database);
    res.status(200).send(`This is the list of our students\n${result}`);
  } catch (err) {
    res.status(500).send('This is the list of our students\nCannot load the database');
  }
});

app.listen(1245);

module.exports = app;
