0x00. ES6 Basics
📚 Description
This project introduces the fundamental concepts and features of ECMAScript 6 (ES6), the sixth edition of the ECMAScript standard used by JavaScript. You'll learn how to use modern JavaScript syntax and features like const, let, arrow functions, default/rest/spread parameters, template literals, object shorthand, and more.

🧠 Learning Objectives
By the end of this project, you should be able to explain:

What ES6 is

New features introduced in ES6

The difference between a constant and a variable

Block-scoped variables

Arrow functions and default parameters

Rest and spread function parameters

String templating using template literals

Object creation and shorthand property syntax

Iterators and for...of loops

⚙️ Requirements
All files executed on Ubuntu 18.04 LTS using NodeJS 12.11.x

Allowed editors: vi, vim, emacs, Visual Studio Code

Files must end with a new line

Use .js file extension

ESLint and Jest will be used for analysis and testing

All functions must be exported

README.md file is mandatory

🔧 Setup
Install NodeJS 12.11.x
bash
Copy
Edit
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y
nodejs -v  # should return v12.11.1
npm -v     # should return 6.11.3
Install Dependencies
bash
Copy
Edit
npm install
Make sure your project contains:

package.json

babel.config.js

.eslintrc.js

These will configure Babel, Jest, and ESLint appropriately.

📝 Tasks
Task	Description	File
0	Use const and let instead of var	0-constants.js
1	Avoid variable overwrites using block scope	1-block-scoped.js
2	Rewrite a method using arrow function syntax	2-arrow.js
3	Use default parameters to simplify a function	3-default-parameter.js
4	Use rest parameter to count arguments	4-rest-parameter.js
5	Use spread syntax to merge arrays and strings	5-spread-operator.js
6	Use template literals for cleaner strings	6-string-interpolation.js
7	Use object property shorthand	7-getBudgetObject.js
8+	Further practice with ES6 syntax...	Continue with respective files
✅ Usage
To run your code with Jest:

bash
Copy
Edit
npm run test
To run a specific file:

bash
Copy
Edit
npm run dev <filename>.js
Example:

bash
Copy
Edit
npm run dev 0-main.js
🧪 Testing
All test files (*-main.js) are located in the same directory.

Use npm run dev to execute and validate outputs.

📁 Project Structure
csharp
Copy
Edit
0x00-ES6_basic/
├── 0-constants.js
├── 1-block-scoped.js
├── 2-arrow.js
├── 3-default-parameter.js
├── 4-rest-parameter.js
├── 5-spread-operator.js
├── 6-string-interpolation.js
├── 7-getBudgetObject.js
├── ...
├── package.json
├── babel.config.js
├── .eslintrc.js
└── README.md
🧹 Linting
Lint your files with ESLint:

bash
Copy
Edit
npx eslint .
🧠 Resources
ECMAScript 6 - ECMAScript 2015

Statements and declarations

Arrow functions

Default parameters

Rest parameter

String templating

ES6 Iterables and Iterators

GitHub repository: https://github.com/omarprocessor/alx-backend-javascript
Project directory: 0x00-ES6_basic


