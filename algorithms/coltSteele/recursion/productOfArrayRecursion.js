/*

Write a function called productOfArray which takes in an array of numbers and returns the product of them all.

*/


function productOfArray(nums){
    if (!nums.length) return 1
    return nums[0] * productOfArray(nums.slice(1))
}

console.log(productOfArray([1,2,3]))


function sumOfArray(nums){
    if (!nums.length) return 0
    return nums[0] + sumOfArray(nums.slice(1))
}

console.log(sumOfArray([1,2,7]))
