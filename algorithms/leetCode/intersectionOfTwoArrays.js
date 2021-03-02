/*

Given two arrays, write a function to compute their intersection.

Example 1:

Input: nums1 = [1,2,2,1], nums2 = [2,2]
Output: [2,2]
Example 2:

Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
Output: [4,9]

Note:

Each element in the result should appear as many times as it shows in both arrays.
The result can be in any order.
Follow up:

What if the given array is already sorted? How would you optimize your algorithm?
What if nums1's size is small compared to nums2's size? Which algorithm is better?
What if elements of nums2 are stored on disk, and the memory is limited such that you cannot load all elements into the memory at once?

*/

// create new array = []
// determine which array is longer
// whichever is longer, loop over, comparing to 2nd array
// nested loop to compare
// if numbers match, push to array
// if they don't, move on for both loops

function intersect(nums1, nums2){
    let intersect = []
    for (let i = 0; i < nums1.length; i++){
        console.log("outer loop: ", nums1[i])
        for (let j = 0; j < nums2.length; j++){
            console.log("inner loop: ", nums2[i+j])
            if (nums1[i] !== nums2[i+j]){
                break
            }
            intersect.push(nums2[i+j])
        }
    }
    return intersect
}

console.log(intersect([1,2,2,1], [2,2]))



// function stringSearch(strMain, str) {
//     let count = 0
   
//     for (let i = 0; i < strMain.length; i++){
//         for (let j = 0; j < str.length; j++){
//             if (str[j] !== strMain[i+j]){
//                 // j === str.length - 1 ? count++ : null
//                 break
//             } 
//             j === str.length - 1 ? count++ : null
//         }
//     }

//     return count
// }