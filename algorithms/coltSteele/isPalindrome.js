/*

Write a recursive function called isPalindrome which returns true if the string passed into it is a palindrome (reads the same forwards and backwards.) Otherwise it returns false.

*/

// base case: str is empty 
// if str is same as the reverse string that's created, return true -- otherwise return false
// initalize new string
// slice off last letter each time and add to new string

function isPalindrome(str) {
    
    let newString = ''

    function helper(str) {
        if (!str.length) return ''
        newString += str.slice(-1)
        helper (str.slice(0, -1))
    }

    helper(str)

    return str === newString ? true : false
}

// compare 

console.log(isPalindrome("abba"))