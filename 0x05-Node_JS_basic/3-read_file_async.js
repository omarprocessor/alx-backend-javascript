const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.split('\n').filter((line) => line.trim() !== '');
      const fields = {};
      const header = lines[0].split(',');

      let i = 1;
      while (i < lines.length) {
        const row = lines[i].split(',');
        if (row.length >= header.length) {
          const field = row[row.length - 1];
          const firstName = row[0];

          if (!fields[field]) {
            fields[field] = [];
          }
          fields[field].push(firstName);
        }
        i += 1;
      }

      console.log(`Number of students: ${lines.length - 1}`);
      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }

      resolve();
    });
  });
}

module.exports = countStudents;
