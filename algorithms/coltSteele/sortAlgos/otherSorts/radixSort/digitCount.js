/*

digitCount(num) --> returns the number of digits in num
// digitCount(1) --> 1
// digitCount(25) --> 2

*/

function digitCount(num){
    return num.toString().length
}

console.log(digitCount(25))

// OR 

/*

function digitCount(num){
    if (num === 0) return 1
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

*/