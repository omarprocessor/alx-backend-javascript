# 0x04. TypeScript

## Description

This project introduces TypeScript as a superset of JavaScript that adds static type definitions. Through a series of tasks, the project demonstrates how TypeScript improves code quality and developer productivity by allowing optional type annotations, interfaces, classes, advanced types, and more.

---

## Learning Objectives

By the end of this project, you should be able to explain the following concepts without external resources:

- Basic types in TypeScript
- Interfaces, Classes, and Functions
- Working with the DOM using TypeScript
- Generic types
- Using namespaces
- Merging declarations
- Using ambient namespaces to import external libraries
- Basic nominal typing in TypeScript

---

## Project Structure

The project is divided into subdirectories representing each task:

### `task_0/` - Creating an interface for a student
- Defines a `Student` interface
- Displays a list of students in a DOM table using Vanilla JS

### `task_1/` - Interfaces and Classes
- Defines a `Teacher` interface with optional and readonly properties
- Extends the `Teacher` interface to a `Directors` interface
- Implements a class `StudentClass` using interfaces
- Defines and uses a function interface `printTeacherFunction`

### `task_2/` - Advanced Types
- Interfaces for `Director` and `Teacher` roles
- Classes that implement these interfaces
- Type predicate function `isDirector`
- Function `executeWork` to call methods based on type
- String literal type `Subjects` with function `teachClass`

### `task_3/` - Ambient Namespaces
- Defines types in `interface.ts`
- Declares functions in `crud.d.ts` as ambient module declarations
- Implements logic in `main.ts` to use CRUD functions

---

## Requirements

- **Allowed editors**: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files should end with a new line
- Code is transpiled on Ubuntu 18.04
- Tests run with `jest@24.9.*`
- All scripts should use the `.ts` extension
- Compilation with TypeScript should not show any errors or warnings
- A `README.md` file is mandatory at the root of the project

---

## Setup Instructions

1. Install dependencies:
   ```bash
   npm install
