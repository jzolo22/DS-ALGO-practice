/*

Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

*/

// base case: array.length === 1, return [array[0].toUpperCase]

// initialize empty array
// on each iteration, push a capitalized version of the first word in array into new array
// concat with recursive call on array.slice(1)

function capitalizeWords(array) {
    if (array.length === 1) return [array[0].toUpperCase()]

    let capArray = []
    capArray.push(array[0].toUpperCase())
    return capArray.concat(capitalizeWords(array.slice(1)))
}

console.log(capitalizeWords(['i', 'am', 'learning', 'recursion'])) // ['I', 'AM', 'LEARNING', 'RECURSION']