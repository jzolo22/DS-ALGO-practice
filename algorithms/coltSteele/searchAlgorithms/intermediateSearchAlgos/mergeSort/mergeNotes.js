/*

-splitting
-sorting
-merging

Exploits the fact that arrays of 0 or 1 elements are always sorted
-works by decomposing an array into smaller arrays of 0 or 1 elements and then building up a newly sorted array (divide and conquer approach)


*/

// Merging Arrays Pseudocode

// create an empty array, take a look at the smallest value in each input array
// while there are still values we haven't looked at...
    // if the value in the first array is smaller than the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    // if the value in the 2nd array is smaller, do the same but opposite
    // once we exhaust one of the arrays, push in all remaining values from the other array

function mergeArrays(arr1, arr2){
    let mergedArray = []
    let point1 = 0
    let point2 = 0

    while (point1 < arr1.length || point2 < arr2.length){
        if (point1 === arr1.length){
            mergedArray.push(arr2[point2])
            point2++
        } else if (point2 === arr2.length){
            mergedArray.push(arr1[point1])
            point1++
       }
        if (arr1[point1] < arr2[point2]){
            mergedArray.push(arr1[point1])
            point1++
        } else if (arr2[point2] < arr1[point1]){
            mergedArray.push(arr2[point2])
            point2++
        }
    }
    return mergedArray
}

console.log(mergeArrays([1,3,5,7], [2,4,6,8]))