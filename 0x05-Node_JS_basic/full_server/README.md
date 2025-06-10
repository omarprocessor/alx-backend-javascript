# Full Server Implementation

This project implements a full server structure using Node.js and Express.

## Features

- Express server with proper routing structure
- Controllers for App and Students
- Database reading functionality
- Support for ES6 features using Babel

## Setup

1. Install dependencies:
```bash
npm install express
```

2. Start the server:
```bash
# From outside full_server directory
npm run dev ./database.csv

# Or from inside full_server directory
node server.js ./database.csv
```

## Routes

- GET / - Returns "Hello ALX!"
- GET /students - Returns list of all students by field
- GET /students/:major - Returns students for specific major (CS or SWE)
