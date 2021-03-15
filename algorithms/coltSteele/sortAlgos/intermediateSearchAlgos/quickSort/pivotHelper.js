/*

- In order to implement merge sort, it's useful to first implement a function responsible for arranging elements in an array on either side of a pivot.

- Given an array, this helper function should designate an element as the pivot.

- It should then rearrange elements in the array so that all values less than the pivot are moved to the left of the pivot, and all values greater are moved to the right

- The order on either side doesn't matter

- The helper should do this in place, i.e. should not create a new array

- When complete, the helper should return the index of the pivot

- The runtime of quick sort depends in part on how one selects the pivot.

- Ideally the pivot should be chosen so that it's roughly the median value in the dataset you're sorting

- For simplicity, we'll always select the first element (but this does have consequences)
 */

//  PIVOT PSEUDOCODE
// It will help to accept 3 arguments: array, start index, end index (can default to 0 and array.length -1)
// Grab the pivot from the start of the array
// Store the current pivot index in a variable (this will keep track of where the pivot should end up)
// Loop through the array from start to end
    // if the  current element is less than the pivot, incrememnt the pivot index variable and then swap the current element with the element at the pivot index
// Swap the starting element (i.e. the pivot) with the pivot index 
// Return the pivot index

function pivot(arr){
    // start = 0
    // end = array.length-1
    let pivotIndex = 0

    for (let i = 1; i < arr.length; i++){
        if (arr[i] < arr[0]){
            pivotIndex++
            swap(arr, i, pivotIndex)
            // console.log(pivotIndex)
        }
    }
    swap(arr, 0, pivotIndex)
    // console.log(arr)
    return pivotIndex
}

function swap(arr, index1, index2){
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

console.log(pivotCS([8,3,2,7,9,1,0]))


// ---------------- Colt Steele Solution ---------------- //

function pivotCS(arr, start=0, end=arr.length-1){
    let pivot = arr[start]
    let swapIndex = start

    for (let i = 1; i < arr.length; i++){
        if (pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

