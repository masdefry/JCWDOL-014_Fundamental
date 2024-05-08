// OBJECT
// Case. Data Students -> Name, Address, FatherName, MotherName, Schools
// Key & Value ---> Property

// CRUD
// const objStudents = {
//     fullname: {
//         firstName: 'Defryan', 
//         lastName: 'Ryan'
//     }, 
//     address: 'Bogor', 
//     school: 'Telkom'
// }

// // READ
// console.log(objStudents.fullname.firstName) 
// console.log(objStudents['address'])
// objStudents['newAddress'] = objStudents['address']

// // UPDATE
// objStudents.name = 'Ryan'
// objStudents.school = null

// // DELETE 
// delete objStudents.school
// console.log(objStudents)



// // METHOD (Function yang disimpan kedalam Object)
// const print = {
//     name: 'Immanuel', 
//     greeting(){
//         console.log(this.name)
//     }, 
//     welcoming: () => {
//         console.log(this.name)
//     }
// }
// print.greeting()
// print.welcoming()



// Chaining Condition
const student = {
    fullname: {
        firstName: 'Ryan',
        lastName: 'Defryan'
    }
}

console.log(student?.fullName?.firstname) // Conditional Chaining
console.log(student['fullname']['firstName'])

const students = [
    {
        fullname: 'Defryan'
    }, 
    {
        fullname: 'Immanuel'
    }, 
    {
        fullname: 'Aboy'
    }
]

students[1].fullname // Immanuel



// DESTRUCTURING ASSIGNMENT
// Mengkonversi Property Obj Menjadi Variable JS

const objCampusPwd = {
    name: 'Pwd BSD', 
    address: 'GOP-09'
}

const {address, name} = objCampusPwd
console.log(name)
console.log(address)