/*

Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.

Example 1:

Input: arr = [1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]
Output: 2.00000
Explanation: After erasing the minimum and the maximum values of this array, all elements are equal to 2, so the mean is 2.
Example 2:

Input: arr = [6,2,7,5,1,2,0,3,10,2,5,0,5,5,0,8,7,6,8,0]
Output: 4.00000

*/

// find out how many elements 5% is 
// sort the array
// remove the first 5%, then the last 5%
// calculate the mean

function meanOfArray(arr){
    let numToRemove = Math.floor(arr.length / 100 * 5)
    arr.sort((a, b) => a - b)

    for (let i = 0; i < numToRemove; i++){
        arr.shift()
        arr.pop()
    }

    const sum = arr.reduce((sum, num) => sum + num)
    return sum / arr.length
}

console.log(meanOfArray([1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,3]))