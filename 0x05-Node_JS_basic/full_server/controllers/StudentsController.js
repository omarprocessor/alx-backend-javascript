const readDatabase = require('../utils');

class StudentsController {
  static async getAllStudents(req, res) {
    try {
      const database = await readDatabase(req.app.get('databaseFile'));

      let response = 'This is the list of our students\n';

      Object.keys(database).sort().forEach((field) => {
        const students = database[field];
        response += `Number of students in ${field}: ${students.length}. List: ${students.join(', ')}\n`;
      });

      res.status(200).send(response);
    } catch (error) {
      res.status(500).send('Cannot load the database');
    }
  }

  static async getAllStudentsByMajor(req, res) {
    try {
      const { major } = req.params;
      if (major !== 'CS' && major !== 'SWE') {
        return res.status(500).send('Major parameter must be CS or SWE');
      }

      const database = await readDatabase(req.app.get('databaseFile'));

      if (!database[major]) {
        return res.status(500).send('Cannot load the database');
      }

      res.status(200).send(`List: ${database[major].join(', ')}`);
      return null;
    } catch (error) {
      res.status(500).send('Cannot load the database');
      return null;
    }
  }
}

module.exports = StudentsController;
