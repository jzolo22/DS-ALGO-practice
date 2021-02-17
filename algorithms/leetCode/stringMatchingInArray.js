/*

Given an array of string words. Return all strings in words which is substring of another word in any order. 

String words[i] is substring of words[j], if can be obtained removing some characters to left and/or right side of words[j].

Input: words = ["mass","as","hero","superhero"]
Output: ["as","hero"]
Explanation: "as" is substring of "mass" and "hero" is substring of "superhero".
["hero","as"] is also a valid answer.

*/

function stringMatching(words) {
    // initialize new array = []
    let substringArray = []

    // initialize two pointers
    // let i = 0
    // let j = 1

    // while (j < words.length-1) {
    //     // console.log("j: ", j)
    //     // console.log(words[i], words[j])
    //     if (words[i].includes(words[j])){
    //         substringArray.push(words[j])
    //     } else if (words[j].includes(words[i])) {
    //         substringArray.push(words[i])
    //     } 
    //         j++
    // }

    // while (i < j){
    //     // console.log("i: ", i)
    //     console.log(words[i], words[j])

    //     if (words[i].includes(words[j])){
    //         substringArray.push(words[j])
    //     } else if (words[j].includes(words[i])) {
    //         substringArray.push(words[i])
    //     } 
    //     i++
    // }
 
    for (let i = 0; i < words.length; i++) {
        for (let j = i; j < words.length - 1; j++) {
            words[i].includes(words[j]) ? substringArray.push(words[j]) : null
            words[j].includes(words[i]) ? substringArray.push(words[i]) : null 
            console.log(substringArray)
        }

    }

    return substringArray
}

console.log(stringMatching(["mass","as","hero","superhero"]))
console.log(stringMatching(["leetcode","et","code"]))
console.log(stringMatching(["blue","green","bu"]))
console.log(stringMatching(["xu","xxu","xdea","exxusn","cs","bkcs"]))
