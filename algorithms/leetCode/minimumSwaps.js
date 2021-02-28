/*

You are given two strings s1 and s2 of equal length consisting of letters "x" and "y" only. Your task is to make these two strings equal to each other. You can swap any two characters that belong to different strings, which means: swap s1[i] and s2[j].

Return the minimum number of swaps required to make s1 and s2 equal, or return -1 if it is impossible to do so.

Input: s1 = "xx", s2 = "yy"
Output: 1
Explanation: 
Swap s1[0] and s2[1], s1 = "yx", s2 = "yx"

*/

// initialize counter
// initialize counterObj
// loop over first string to collect number of characters in first string
// compare with second string - if amount is not equal at any point, return -1

// then loop 
    // if s1[i] !== s2[i]
        // swap
        // counter++
    // otherwise move forward
// at the end, compare two strings, if equal return counter

function minimumSwap(str1, str2){
    const counterObj = {}
    let count = 0
    for (let i = 0; i < str1.length; i++){
        if(counterObj[str1[i]]){
            counterObj[str1[i]]++
        } else {
            counterObj[str1[i]] = 1
        }
    }

    for (let i = 0; i < str2.length; i++){
        if (!counterObj[str2[i]]){
            return -1
        } else {
            counterObj[str2[i]]--
        }
    }

    for (let i = 0; i < str1.length; i++){
        if (str1[i] !== str2[i]){
            let x = str2[i]
            str2[i] = str1[i]
            str1[i] = x
            console.log(x)
            count++
        }
    }
    console.log(str1, str2)
    return str1 === str2 ? count : -1
}

// console.log(minimumSwap("xx", "xy")) // -1
console.log(minimumSwap("xy", "yx")) // 2
