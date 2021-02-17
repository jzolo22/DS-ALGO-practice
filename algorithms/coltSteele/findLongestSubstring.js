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

    let length = 0
    let set = new Set() // t, h, i, 
    let start = 0 //
    let end = 0 // 3

    // while start < str.length 
    while (end < str.length){
        if (set.has(str[end])) {
            // maxlength = Math.max(str.length, maxlength)
            set.delete(str[start])
            start++
        } else {
            set.add(str[end])
            end++
        } 
        length = Math.max(set.size, length)
        // console.log(set, length)
    }
        
    return length
}

console.log(findLongestSubstring('bbbbb'))