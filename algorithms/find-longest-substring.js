/*

Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with distinct characters.

Time Complexity: O(N)

Input: string
Output: length (substring of distinct characters)

Edge cases:
    -all lowercase??
    -empty string should return 0

*/

function findLongestSubstring(str) {
    if (!str.length) return 0
    // initialize a length 0
    let length = 0
    // initialize empty substr = ''
    let substr = ''
    // start = 0
    let start = 0
    // end = 0
    let end = 0

    // while start < str.length 
    while (start < str.length){
        // if substr.includes str[end]? && end < str.length
        if (substr.includes(str[end]) && end < str.length) {
            // maxlength = Math.max(str.length, maxlength)
            length = Math.max(substr.length, length)
            substr = ''
            start = end
            end++
        } else if (!substr.includes(str[end])){
            substr += str[end]
            end++
        } else {
            break
        }
    }
        
    return length
}

console.log(findLongestSubstring('thisisawesome'))