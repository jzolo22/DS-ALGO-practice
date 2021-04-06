/*

A search algorithm similar to bubble sort, but instead of placing large values at the end, it places smallest values at the beginning.

It loops through the whole array, identifies minimum in the array, then swaps it with the first unsorted element.

Time complexity --> O(n^2) even in best case scenario
Space complexity: O(1)

If you want to minimize the number of swaps for some reason, selection would be better because it's only swapping at the end of each loop

*/

// store the first element as the smallest value we've seen
// compare this item to the next item in the array until you find a smaller number
// if a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array
// if the minimum is not the value (index) you initially began with, swap the two values
// repeat this with the next element until the array is sorted

function selectionSort(nums){
    for (let i = 0; i < nums.length; i++){
        small = i
        for (let j = i + 1; j < nums.length; j++){
            if (nums[j] < nums[small]){
                small = j
            }
        }
        if (nums[small] < nums[i]){
            swap(nums, i, small)
        }
    }
    return nums
}


const swap = (arr, index1, index2) => {
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}

console.log(selectionSort([6, 77, 3, 5, 12, 2, 1]))

