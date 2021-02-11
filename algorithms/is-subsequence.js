/*

Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string.  In other words, the function should check whether the characters in the first string appear somewhere in the second string without their order changing.

Input: 2 strings
Output: boolean --> true if first string's characters apapear in 2nd string's characters in the same order

Potential questions:
    -what if only one string given
    -what if no strings given
    -what if numbers or some other input instead of strings?

Time Complexity: O(N + M)
Space Complexity: O(1)

*/

function isSubsequence(str1, str2) {
    // if str2 is shorter than str1, return false
    if (str2.length < str1.length) return false
    if (!str1) return true

    // initialize p1 --> 0
    let p1 = 0
    // initialize p2 --> 0
    let p2 = 0

    // while p2 < str2.length
    while (p2 < str2.length) {
        if (str1[p1] === str2[p2]) {
            p1++
        // originally had p2++ here and else p2++
        // but CS's solution taking p2++ out is cleaner 
        } 
        if (p1 === str1.length) {
            return true 
        }
        p2++
    
    }
    return false
}

console.log(isSubsequence('abc', 'acb'))
console.log(isSubsequence('abc', 'abracadabra'))


