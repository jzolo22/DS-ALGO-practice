/*

Given an array of integers nums and an integer threshold, we will choose a positive integer divisor, divide all the array by it, and sum the division's result. Find the smallest divisor such that the result mentioned above is less than or equal to threshold.

Each result of the division is rounded to the nearest integer greater than or equal to that element. (For example: 7/3 = 3 and 10/2 = 5).

It is guaranteed that there will be an answer.

*/

// potential questions:
    // time/space complexity restrictions?
    // what if nums is empty?

// initialize divisor to 1
// let sum = 0
// if i less than nums.length
// loop while sum is less than or equal to thresh
    // divide each num by divisor and get the ceil on it
    // add it to sum
// increment divisor

function smallestDivisor(nums, threshold){
    let divisor = 1
    let sum = 0

    while (sum <= threshold){
        for (let i = 0; i < nums.length; i++) {
                sum += (Math.ceil(nums[i] / divisor))
            }   
                if (sum > threshold) {
                    divisor ++
                    sum = 0
                } else {
                    return divisor
                }
        }
    return divisor
}


console.log(smallestDivisor([44,22,33,11,1], 5)) // 44
console.log(smallestDivisor([1,2,5,9], 6)) // 44