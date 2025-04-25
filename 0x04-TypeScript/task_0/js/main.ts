interface Student {
firstName: string
lastName: string
age: number
location: string
}

const student1: Student = {
firstName: 'Ali',
lastName: 'Omar',
age: 22,
location: 'Nairobi'
}

const student2: Student = {
firstName: 'Amina',
lastName: 'Mohamed',
age: 21,
location: 'Mombasa'
}

const studentsList: Student[] = [student1, student2]

const table = document.createElement('table')
const headerRow = table.insertRow()
const header1 = headerRow.insertCell()
header1.textContent = 'First Name'
const header2 = headerRow.insertCell()
header2.textContent = 'Location'

studentsList.forEach((student) => {
const row = table.insertRow()
const nameCell = row.insertCell()
const locationCell = row.insertCell()
nameCell.textContent = student.firstName
locationCell.textContent = student.location
})

document.body.appendChild(table)
