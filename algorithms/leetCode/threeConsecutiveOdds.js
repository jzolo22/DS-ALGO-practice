/*

Given an integer array arr, return true if there are three consecutive odd numbers in the array. Otherwise, return false.
 

Example 1:

Input: arr = [2,6,4,1]
Output: false
Explanation: There are no three consecutive odds.
Example 2:

Input: arr = [1,2,34,3,4,5,7,23,12]
Output: true
Explanation: [5,7,23] are three consecutive odds.

*/

// set a counter variable to 0
// set a current variable to boolean for if the first element is odd 
// loop through array
// if current is odd, add one

function threeConsecutiveOdds(arr){
    let counter = 0
    // let current = null
    for (let i = 0; i < arr.length; i++){
        if (counter === 3) return true
        if (arr[i] % 2 === 0){
            // current = false
            counter = 0
        } else {
            counter++
        }
    }
    return false
}

console.log(threeConsecutiveOdds([1,2,34,3,4,5,7,23,12]))