/*

Given a string s, return whether it is a palindrome.

*/


function checkPalindrome(s) {
    let i = 0
    let j = s.length-1

    while (i < j) {
        if (s[i] === s[j]) {
            i++
            j--
        } else {
            return false
        }
    }
    return true  
}

console.log(checkPalindrome("string")) // false
console.log(checkPalindrome("racecar")) // true
