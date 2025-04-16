# 0x01. ES6 Promises

## Description

This project focuses on understanding JavaScript ES6 Promises. It covers creation, resolution, rejection, chaining, error handling, and using `async/await`.

## Learning Objectives

By the end of this project, you should be able to explain:

- What a promise is, how it works, and why it's useful
- How to use `.then`, `.catch`, and `.finally`
- How to use `Promise.resolve`, `Promise.reject`, `Promise.all`, and `Promise.race`
- How to handle errors using `try/catch`
- How to use the `await` operator with async functions

## Requirements

- Node.js 12.11.x
- All files are executed on Ubuntu 18.04 LTS
- Code must use the `.js` extension
- Code will be tested using `Jest`
- Code must pass `ESLint` checks
- All functions must be exported
- A `README.md` file at the root is mandatory

## Setup

```bash
# Install Node.js
curl -sL https://deb.nodesource.com/setup_12.x -o nodesource_setup.sh
sudo bash nodesource_setup.sh
sudo apt install nodejs -y

# Check versions
nodejs -v     # should return v12.11.1
npm -v        # should return 6.11.3

# In the project folder
npm install   # installs Jest, Babel, ESLint (package.json provided)

