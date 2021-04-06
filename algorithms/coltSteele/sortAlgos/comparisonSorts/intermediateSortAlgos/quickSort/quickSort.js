function quickSort(arr, left=0, right=arr.length-1){
    if (left < right){
        let pivotIndex = pivotCS(arr, left, right)
        console.log(pivotIndex)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}

console.log(quickSort([3,4,5,8,7,6,1,2]))
// HELPER FUNCTIONS 

function pivotCS(arr, start=0, end=arr.length-1){
    let pivot = arr[start]
    let swapIndex = start

    for (let i = start+1; i <= end; i++){
        if (pivot > arr[i]){
            swapIndex++
            swap(arr, swapIndex, i)
        }
    }
    swap(arr, start, swapIndex)
    return swapIndex
}

function swap(arr, index1, index2){
    [arr[index1], arr[index2]] = [arr[index2], arr[index1]]
}
