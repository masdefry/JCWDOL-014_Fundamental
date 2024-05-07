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