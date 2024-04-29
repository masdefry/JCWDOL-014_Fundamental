// METHOD
// Syntax Bawaan JS yg digunakan untuk Memanipulasi Data

// STRING
// - Slice
const txt = 'Hello, World!'
console.log(txt.slice(0, 3))
// - Length
console.log(txt.length)
// - toLowerCase  &  toUpperCase
console.log(txt.toLowerCase())
console.log(txt.toUpperCase())
// - SubString
console.log(txt.substring(0, 3))

console.log(txt.slice(3, 0))
console.log(txt.substring(3, 0)) // di Switch (0, 3)

// - Split: Konversi String -> Array
const word = 'Pwd Bsd'
console.log(word.split(''))
console.log(word.split(' '))