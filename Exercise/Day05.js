// SLIDE-01
// 01
function FindLowestHighestAndAverage(arrNumbers){
    let lowest = arrNumbers[0]
    let highest = arrNumbers[0]
    let avg = arrNumbers[0]
    arrNumbers.forEach(number => {
        if(number < lowest) lowest = number 
        if(number > highest) highest = number 
        avg += number 
    })
    return {
        lowest, 
        highest, 
        avg: avg/arrNumbers.length
    }
}
console.log(FindLowestHighestAndAverage([12, 5, 23, 18, 4, 45, 32]))



// 02
function ConcateningByCommaAndByAnd(arrStr){
    return arrStr.slice(0, arrStr.length-1).join(', ') + ' and ' + arrStr[arrStr.length-1]
}

console.log(ConcateningByCommaAndByAnd(['Banana', 'Cherry', 'Melon', 'Apple']))

// 03
function SumElementOfTwoArrays(arr1, arr2){
    const result = []
    arr1.forEach((number, index) => {
        result.push(number + arr2[index])
    })

    return result 
}
console.log(SumElementOfTwoArrays([1, 2, 3], [3, 2, 1]))

// 04
function FilteringNewElement(arr, newElement){
    if(!arr.includes(newElement)) arr.push(newElement)

    return arr
}

console.log(FilteringNewElement([1, 5, 10, 15], 3))



// SLIDE-02
// 01
function SliceArrayBasedOnMaxSize(maxSize, ...numbers){
    return numbers.slice(0, maxSize)
}

console.log(SliceArrayBasedOnMaxSize(5, 10, 3, 7, 100, 25, 55))

// 02
function CombineTwoArray(arr1, arr2){
    return [...arr1, ...arr2]
}

console.log(CombineTwoArray([1, 2, 3], [4, 5, 6]))

// 03
function FindDuplicate(arrNumbers){
    const arrResult = []
    arrNumbers.forEach(number => {
        if(arrNumbers.indexOf(number) !== arrNumbers.lastIndexOf(number)){
            if(!arrResult.includes(number)){
                arrResult.push(number)
            }
        } 
    })

    return arrResult
}

console.log(FindDuplicate([1, 2, 2, 3, 3]))



// 04
function FindDifferenceElementInTwoArray(arr1, arr2){
    const differentElement = []

    arr1.forEach(number => {
        if(!arr2.includes(number)){
            if(!differentElement.includes(number)){
                differentElement.push(number)
            }
        }
    })

    arr2.forEach(number => {
        if(!arr1.includes(number)){
            if(!differentElement.includes(number)){
                differentElement.push(number)
            }
        }
    })

    return differentElement
}

console.log(FindDifferenceElementInTwoArray([1, 3, 5], [2, 4, 5]))