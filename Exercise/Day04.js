function GenerateTriangle(n){
    let triangle = ''
    for(let i=1; i<=n; i++){
        for(let j=1; j<=i; j++){
            triangle += '*'
        }
        triangle += '\n'
    }
    return triangle
}
console.log(GenerateTriangle(4))



// * * * * *
// * * * * *
// * * * * *
function GenerateBox(w, h){
    let box = ''
    for(let i=1; i<=h; i++){
        for(let j=1; j<=w; j++){
            box += '* '
        }
        box += '\n'
    }
    return box 
}
console.log(GenerateBox(3, 5))

// * * * * *
// * * * *
// * * *
// * * 
// *

function ReverseTriangle(n){ // n=5
    let result = ''
    for(let i=n; i>=1; i--){
        for(let j=i; j>=1; j--){
            result += '*'
        }
        result += '\n'
    }
    return result
}
console.log(ReverseTriangle(5))



function FizzBuzz(totalLooping){
    let arrFizzBuzz = []
    for(let i=1; i<=totalLooping; i++){
        if(i % 3 === 0 && i % 5 === 0){ // TRUE && FALSE
            arrFizzBuzz.push('FizzBuzz')
        }else if(i % 3 === 0){
            arrFizzBuzz.push('Fizz')
        }else if(i % 5 === 0){
            arrFizzBuzz.push('Buzz')
        }else{
            arrFizzBuzz.push(i)
        }
    }

    return arrFizzBuzz
}
FizzBuzz(15)


function CalculateBMI(weight, height){
    const bmi = weight / (height * height)
    if(bmi < 18.5){
        return 'Less Weight'
    }else if(bmi >= 18.5 && bmi <= 24.9){ // TRUE || FALSE ---> TRUE
        return 'Ideal'
    }else if(bmi >= 25 && bmi <= 29.9){
        return 'Overweight'
    }else if(bmi >= 30 && bmi <= 39.9){
        return 'Very Overweight'
    }else{
        return 'Obesity'
    }
}
console.log(CalculateBMI(75, 1.70))



function RemoveOddNumbers(arrNumbers){
    // const result = arrNumbers.filter(number => number % 2 === 0)

    // return result
    const arrEvenNumbers = []
    arrNumbers.forEach(number =>{
        if(number % 2 === 0){
            arrEvenNumbers.push(number)
        }
    })

    return arrEvenNumbers
}
console.log(RemoveOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))



function SplitWord(text){
    return text.split(' ')
}
penampung1 = [] // ['Hello', 'World']
penampung2 = '' //Hello ---> ''
console.log(SplitWord('Hello World!'))