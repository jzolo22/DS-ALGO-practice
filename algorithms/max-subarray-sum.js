/*

Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

**The subarray must consist of consecutive elements from the original array

Input: an array, a number (of elements)
Output: number (max sum of consecutive elements)

Potential Questions/Edge Cases:
    -Empty array? 
    -Array has fewer elements than length int ---> return null

Time Complexity: O(N)
Space Complexity: O(1)

*/



function maxSubarraySum(arr, num) {
    // if array.length is less than the num, return null
    if (arr.length < num) return null

    // initialize a tempsum to 0
    let tempSum = 0
    // initialize a maxsum to 0
    let maxSum = 0

    // loop through arr just for the first elements up to the amount specified by num
    for (let i = 0; i < num; i++){
        // add them to tempsum
        tempSum += arr[i]
    }

    // set maxsum = tempsum
    maxSum = tempSum

    // set up another loop
    for (let j = num; j < arr.length; j++) {
        // subtract the first part of the window
        // add the last part of the window
        tempSum = tempSum - arr[j - num] + arr[j]
        // if the tempsum is larger than the maxsum, set maxsum to tempsum
        maxSum = Math.max(tempSum, maxSum)
    }

    return maxSum
}

console.log(maxSubarraySum([100,200,300,400], 2))