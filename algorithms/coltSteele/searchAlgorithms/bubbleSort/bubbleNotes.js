/*

A sorting algorithm where the largest values "bubble" up to the top.

Compare two elements, swap from left to right if left one is larger.

https://visualgo.net/en/sorting

can help to define a function called swap

*/

// [1, 5, 7, 3, 4]

function bubbleSort(arr){
// start looping with a variable called i at the end of the array towards the beginning
for (let i = arr.length - 1; i >= 0; i--){
    // inner loop with variable j at beginning until i -1
    for (let j = 0; j <= i - 1; j++){
        if (arr[j] > arr[j + 1]){

        }
    }
}
// if arr[j] > arr[j+1], swap those values
// return sorted array
}


// define a helper swap function to keep the code clean
function swap(arr, index1, index2){
    let temp = arr[index2]
    arr[index2] = index1
    arr[index1] = temp
}


// ES6 swap syntax
// const swap = (arr, index1, index2) => {
//     [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
// }