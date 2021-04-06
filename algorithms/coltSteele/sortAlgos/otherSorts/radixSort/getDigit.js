/*

getDigit(num, place) --> returns the digit in the number at the given place value
// getDigit(12345, 0) --> 5
// getDigit(12345, 1) --> 4

*/

function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}

console.log(getDigit(12345, 1))