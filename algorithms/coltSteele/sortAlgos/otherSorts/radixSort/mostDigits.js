/*

mostDigits(nums) --> given an array of numbers, returns the number of digits in the largest numbers in the list

// mostDigits([1234, 56, 1]) --> 4
// mostDigits([11111, 1111, 11]) --> 5

*/

// ------------------------------------------//

function digitCount(num){
    return num.toString().length
}

// ------------------------------------------//

function mostDigits(nums){
    let max = 0
    nums.forEach(num => {
        max = Math.max(digitCount(num), max)
    })
    return max
}

console.log(mostDigits([1234, 56, 1])) // 4
console.log(mostDigits([11111, 1111, 11])) // 5