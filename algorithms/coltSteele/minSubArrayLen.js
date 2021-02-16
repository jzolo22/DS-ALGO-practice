/*

Write a function called minSubArrayLen which accepts two paramaters - an array of positive integers and a positive integer.

This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.

Input: an array of positive integers, an integer (sum to beat)
Output: length of a subarray 

Time Complexity: O(N)
Space Complexity: O(1)

*/

function minSubArrayLen(arr, target) {
    // initialize len to infinity
    let len = Infinity
    // initialize start = 0
    start = 0
    // end = 0
    end = 0
    sum = 0

    while (start < arr.length) {
        if (sum < target && end < arr.length) {
            sum += arr[end]
            end++
        } else if (sum >= target) {
            len = Math.min(len, end-start)
            sum -= arr[start]
            start++
        } else {
            break
        }
    }

    return len === Infinity ? 0 : len
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7))
                           