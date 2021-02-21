/*

Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums.

Input: nums = [1,2,3,4]
Output: [1,3,6,10]
Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].


*/

// var runningSum = function(nums) {
//     let currentSum = 0
//     let runningSumArray = []
    
//     for (let i = 0; i < nums.length; i++){
//         currentSum += nums[i]
//         runningSumArray.push(currentSum)
//     }
//     return runningSumArray
// };


// using reduce:
const runningSum = function(nums) {
            // accumulator, currentValue, [, index[, array]] )[, initialValue]
    nums.reduce((accumulator, currentValue, currentIndex, array) => {
        // console.log(accumulator, array, currentIndex)
        return array[currentIndex] += accumulator
    })
    return nums
}

console.log(runningSum([1,2,3,4]))