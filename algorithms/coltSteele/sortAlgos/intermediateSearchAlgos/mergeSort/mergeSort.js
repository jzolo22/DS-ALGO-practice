// PSEUDOCODE

// break up the array into halves until you have arrays that are empty or have one element
// once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full length of the array
// once the array has been merged back together, return the merged (and sorted) array

// base case --> arrays are length 1

function mergeSort(arr){
    if (arr.length <= 1) return arr
    return mergeArrays(mergeSort(arr.slice(0, Math.floor(arr.length / 2))), mergeSort(arr.slice(Math.floor(arr.length / 2))))
}

// CS's solution:
function mergeSort(arr){
    if (arr.length <=1 ) return arr
    let mid = Math.floor(arr.length / 2)
    let left = mergeSort(arr.slice(0, mid))
    let right = mergeSort(arr.slice(mid))
    return mergeArrays(left, right)
}

function mergeArrays(arr1, arr2){
    let mergedArray = []
    let point1 = 0
    let point2 = 0

    while (point1 < arr1.length && point2 < arr2.length){
        if (arr1[point1] <= arr2[point2]){
            mergedArray.push(arr1[point1])
            point1++
        } else {
            mergedArray.push(arr2[point2])
            point2++
        }
    }

    while (point1 < arr1.length){
        mergedArray.push(arr1[point1])
        point1++
    } 
    while (point2 < arr2.length){
        mergedArray.push(arr2[point2])
        point2++
    } 
    
    return mergedArray
}

console.log(mergeSort([5,8,1,4,66,3,2]))