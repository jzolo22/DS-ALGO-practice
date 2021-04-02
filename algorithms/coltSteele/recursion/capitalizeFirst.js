/*

Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.

*/

// base case: empty array
// make new empty array
// on every iteration, pass through array.slice(1 to the end)
// on every iteration, push capitalized word into new array, then concatenate it with the recursive call

function capitalizeFirst(array){
    if (!array.length) return []
    let capArray = []
    capArray.push(array[0][0].toUpperCase().concat(array[0].slice(1)))
    console.log(capArray)
    return capArray.concat(capitalizeFirst(array.slice(1)))
}

console.log(capitalizeFirst(['car','taco','banana'])) // [ 'Car', 'Taco', 'Banana' ]

function capitalize(arr){
    // base case --> length of array is 1
    // return that array[0].toUpperCase()
    if (arr.length === 1) return arr[0][0].toUpperCase()
    let capArray = []
    capArray.push(arr[0][0].toUpperCase())

    return arr[0].toUpperCase().concat(capitalize(arr.slice(1)))
}

console.log(capitalize(['car','taco','banana'])) // [ 'Car', 'Taco', 'Banana' ]
