/*

Write a function factorial that accepts a number and returns the factorial of that number. Factorial 0 is always 1.

*/

function factorial(num){
    if (num === 0) return 1
    return num * factorial(num-1)
}

console.log(factorial(1))
console.log(factorial(2))
console.log(factorial(4))