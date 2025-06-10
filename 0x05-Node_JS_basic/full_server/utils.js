const fs = require('fs').promises;

async function readDatabase(filePath) {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    const lines = data.split('\n');
    
    // Remove header and empty lines
    const students = lines.slice(1).filter(line => line.trim());
    
    // Parse students into fields
    const studentsByField = {};
    students.forEach(line => {
      const [firstName, field] = line.split(',');
      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    });
    
    // Sort field names alphabetically
    const sortedFields = Object.keys(studentsByField).sort((a, b) => a.localeCompare(b));
    const result = {};
    
    // Create sorted result
    sortedFields.forEach(field => {
      result[field] = studentsByField[field];
    });
    
    return result;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = readDatabase;
