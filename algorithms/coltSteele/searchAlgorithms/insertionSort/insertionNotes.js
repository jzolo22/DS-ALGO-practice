/*

Builds up a sorted portion of an array by placing each item in the right spot of the sorted bit

*/

// start by picking the second element in the array
// compare the second element with the one before it and swap if necessary
// continue to the next element and if it's in the wrong order, iterate through the sorted portion to place the element in the correct place
// repeat until the array is sorted

function insertionSort(nums){
    for (let i = 1; i < nums.length; i++){
        console.log("OUTSIDE I: ", i)
        let current = nums[i]
        let j
        for (j = i-1; j >= 0 && nums[j] > current; j--){
            nums[j+1] = nums[j]
        }
        nums[j+1] = current
    }
    return nums
}

console.log(insertionSort([77, 2, 3, 0]))

// [2, 3, 77, 77]
//         j  i