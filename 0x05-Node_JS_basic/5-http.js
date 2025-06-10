const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
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

      let output = `Number of students: ${lines.slice(1).filter((line) => line).length}`;
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
        }
      }

      resolve(output);
    });
  });
}

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello ALX!');
  } else if (req.url === '/students') {
    const database = process.argv[2];
    countStudents(database)
      .then((output) => {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${output}`);
      })
      .catch(() => {
        res.statusCode = 500;
        res.end('This is the list of our students\nCannot load the database');
      });
  } else {
    res.statusCode = 404;
    res.end('Not Found');
  }
});

app.listen(1245);

module.exports = app;
