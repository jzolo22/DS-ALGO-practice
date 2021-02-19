/*

Write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.

*/

// base case: reach the end of array
// create new array which is empty
// iterate over full array, if element is !array, push it into new array
// if it's an array, call function again

function flatten(arr) {
    if (!arr.length) return []
    let newArr = []
    for (const element in arr){
        if (typeof arr[element] !== "object"){
            newArr.push(arr[element])
        } else {
            newArr = newArr.concat(flatten(arr[element]))
        }
    }
    return newArr
}

console.log(flatten([1, [2, [3, 4], [[5]]]]))