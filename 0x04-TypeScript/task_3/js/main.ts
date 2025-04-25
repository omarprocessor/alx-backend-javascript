/// <reference path="./crud.d.ts" />

// Importing necessary types and CRUD functions
import { RowID, RowElement } from './interface'
import * as CRUD from 'crud'

// Creating a RowElement object
const row: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva"
}

// Inserting the row and getting the new RowID
const newRowID: RowID = CRUD.insertRow(row)

// Creating an updated RowElement with an age field
const updatedRow: RowElement = { ...row, age: 23 }

// Updating the row with the new row ID
CRUD.updateRow(newRowID, updatedRow)

// Deleting the row with the new row ID
CRUD.deleteRow(newRowID)
