/*

A search algorithm similar to bubble sort, but instead of placing large values at the end, it places smallest values at the beginning.

It loops through the whole array, identifies minimum in the array, then swaps it with the first unsorted element.

*/

// store the first element as the smallest value we've seen
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
// if the minimum is not the value (index) you initially began with, swap the two values
// repeat this with the next element until the array is sorted

function selectionSort(nums){
    let index = 0
    for (let i = 0; i < nums.length; i++){
        small = nums[i]
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < small){
                small = nums[j]
                index = j
            }
        }
        if (small < nums[i]){
            swap(nums, i, index)
        }
    }
    return nums
}


const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

console.log(selectionSort([6, 77, 3, 5, 8, 2, 1]))
