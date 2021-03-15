/*

Function accepts a sorted array and a value
Create a left pointer at the start of the array and a right pointer at the end of the array
While the left pointer comes before the right pointer:
    -create a pointer in the middle
    -if you find the value you want, return the index
    -if the value is too small, move the left pointer up
    -if the value is too big, move the right pointer down
If you never find the value, return -1

*** MUST BE A SORTED ARRAY ***

*/

function binarySearch(arr, val){
    let left = 0
    let right = arr.length - 1
    let middle = Math.floor((right+left)/2)

    while (left <= right){
        if (arr[middle] === val) {
            return middle
        } else if (arr[middle] > val) {
            right = middle - 1
            middle = Math.floor((right+left)/2)
        } else if (arr[middle] < val) {
            left = middle + 1
            middle = Math.floor((right+left)/2)
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,8,12,29], 2)) // 1
console.log(binarySearch([1,2,3,4,8,12,29], 12)) // 5
console.log(binarySearch([1,2,3,4,8,12,29], 14)) // -1

