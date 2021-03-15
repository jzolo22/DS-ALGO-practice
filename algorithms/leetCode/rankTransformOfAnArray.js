/*

Given an array of integers arr, replace each element with its rank.

The rank represents how large the element is. The rank has the following rules:

Rank is an integer starting from 1.
The larger the element, the larger the rank. If two elements are equal, their rank must be the same.
Rank should be as small as possible.
 

Example 1:

Input: arr = [40,10,20,30]
Output: [4,1,2,3]
Explanation: 40 is the largest element. 10 is the smallest. 20 is the second smallest. 30 is the third smallest.

*/

// start rank at 1
// go through once to find the minimum value and change it to rank
// increase rank by 1
// go through it again to find new minimum value and change to new rank
// if all


// function arrayRankTransform(arr){
//     // max rank will be the amount of unique values
//     let rank = new Set(arr).size
//     let newArr = [...arr]
//     while (rank > 0){
//         let max = -Infinity
//         for (let i = 0; i < arr.length; i++){
//             if (arr[i] > max){
//                 max = arr[i]
//             }
//         }
//         // console.log(max)
//         // console.log(rank)
//         for (let i = 0; i < arr.length; i++){
//             // console.log(arr[i])
//             // console.log(max)
//             if (arr[i] === max){
//                 // console.log(arr[i])
//                 newArr[i] = rank
                
//             }
//         }
//         rank--
//     }
//     return newArr
// }


function arrayRankTransform(arr){
    // remove duplicate values & detemine max rank
    let set = new Set(arr)
    // make a new array from the set
    let newArr = Array.from(set)
    // sort a copy of the array
    let sorted = [...newArr].sort((a, b) => a-b)
    // make new array to add ranks into
    let ranks = []
    // use indexOf to place ranks correctly
    for (let i = 0; i < arr.length; i++){
        ranks.push(sorted.indexOf(arr[i])+1)
    }
    return ranks
}

// console.log(arrayRankTransform([100,100,100]))
console.log(arrayRankTransform([37,12,28,100,8,56,80,5,12])) // [5,3,4,2,8,6,7,1,3]