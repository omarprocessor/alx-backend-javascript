0x03. ES6 Data Manipulation
📚 Description
This project is part of the ALX Backend JavaScript curriculum. It focuses on manipulating data using modern ES6 features such as map, filter, reduce, Set, Map, Typed Arrays, and more. By completing this project, you'll develop a solid understanding of data transformation in JavaScript and how to leverage built-in functionalities for efficient and readable code.

🎯 Learning Objectives
By the end of this project, you should be able to:

Use map, filter, and reduce to manipulate arrays.

Work with TypedArray and understand its usage.

Utilize Set, Map, and WeakMap data structures effectively.

🛠️ Requirements
All code is written in JavaScript ES6

Files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x

Use of vi, vim, emacs, or VS Code as editors

All code should pass Jest tests and be linted with ESLint

All functions must be exported

All files must end with a newline

🚀 Setup Instructions
Install Node.js:

bash
Copy code
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
Verify versions:

bash
Copy code
nodejs -v # v12.11.1
npm -v    # 6.11.3
Run npm install to install dependencies using the provided package.json.

📁 File Structure
File	Description
0-get_list_students.js	Returns an array of student objects
1-get_list_student_ids.js	Returns array of student IDs from a list
2-get_students_by_loc.js	Filters students by location
3-get_ids_sum.js	Reduces student list to sum of IDs
4-update_grade_by_city.js	Updates grades by city using map/filter
5-typed_arrays.js	Returns a DataView using typed array
6-set.js	Creates a Set from an array
7-has_array_values.js	Checks if all array values exist in a Set
🧪 Running Tests
To run the tests:

bash
Copy code
npm run test
To run tests and check for lint issues:

bash
Copy code
npm run full-test
✅ Tasks Overview
Task 0: Basic student objects with ID, name, and location.

Task 1: Map student objects to just their IDs.

Task 2: Filter students based on location.

Task 3: Sum student IDs using reduce.

Task 4: Update student grades for a specific city.

Task 5: Create typed array with error handling.

Task 6: Create a Set from an array.

Task 7: Verify all array elements exist in a Set.

📌 Notes
Follow best practices and ES6 syntax.

Keep your code clean, readable, and efficient.

Respect data immutability where possible.

🧑‍💻 Author
Omar Mohumed
