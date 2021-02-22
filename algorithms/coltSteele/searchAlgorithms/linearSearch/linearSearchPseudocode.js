/*

Function accepts an array and a value
Loop through the array and check if the current array element is equal to the value
If it is, return the index at which the element is found
If the value is never found, return -1

*/

function linearSearch(array, value){
    for (let i = 0; i < array.length; i++){
        if (value === array[i]){
            return i
        }
    }
    return -1
}

console.log(linearSearch(["cat", "apple", "dog", "bob"], "hello"))