// FUNCTION: Wadah yang digunakan Untuk Menyimpan Baris Kode -> Reusable 
// Tahapan Membuat Function:
// 1. Create Function
// 2. Call Function

// Type Function:
// 1. Declarative Function
Output()
function Output(){
    console.log('Hello, World!')
}

// 2. Expression Function
const PrintOutput = function (){
    console.log('Hi, JCWD!')
}
PrintOutput()

// 3. Arrow Function
const ShowOutput = () => {
    console.log('Hello, Student')
}
ShowOutput()



// FUNCTION with PARAMETER(s)
function OutputGreeting(param1){
    console.log(`Hello, ${param1}`)
}

OutputGreeting('Student(s)') // Argument: Value yang dikirimkan Menuju Parameter
OutputGreeting('Pak Purwa')



// Case. Menampilkan Angka dari 1-5
function ShowNumbers(number){ // number = 100;
    for(let i=1; i<=number; i++){ i<=100
        console.log(i)
    }
}
ShowNumbers(5)

// Menampilkan Angka dari 1-100
ShowNumbers(100)



function Penjumlahan(num1, num2){ // num1 = 10; num2 = 5
    console.log(num1 + num2) // 10 + 5 = 15
}

Penjumlahan(10, 5)














































