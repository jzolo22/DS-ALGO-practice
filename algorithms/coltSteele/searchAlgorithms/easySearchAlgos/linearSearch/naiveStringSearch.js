/*

Loop over the longer string
Loop over the shorter string
If the characters don't match, break out of the inner loop
If the characters do match, keep going
If you complete the inner loop and find a match, incrememnt the count of matches
Return the count

*/

function stringSearch(strMain, str) {
    let count = 0
   
    for (let i = 0; i < strMain.length; i++){
        for (let j = 0; j < str.length; j++){
            if (str[j] !== strMain[i+j]){
                // j === str.length - 1 ? count++ : null
                break
            } 
            j === str.length - 1 ? count++ : null
        }
    }

    return count
}

console.log(stringSearch("wowzaomgomg", "wow"))


// if (j === str.length - 1){
//     count++
//     j = 0
// }
// if (strMain[i] === str[j]){
//     i++
//     if (j < str.length - 1) {
//         j++
//     } else {
//         j = 0
//     }
// } else {
//     i++
// }


// while (i < strMain.length){
//     console.log("outer", i, j)
//     // console.log("count ", count)
//     while (j < str.length){
//     console.log("inner", i, j)

//         if (strMain[i] === str[j]) {
//             if (j = str.length - 1) {
//                 count++
//                 j = 0
//             } else {
//                 i++
//                 j++
//             }
//         } else {
//             i++
//             j = 0
//         }
//     }
// }