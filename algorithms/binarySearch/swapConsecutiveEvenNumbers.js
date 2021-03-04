function swapConsecutiveEven(nums){
        let first = 0
        let second = 1

        while (second < nums.length){
            if (nums[first] % 2 === 0 && nums[second] % 2 === 0  && first !== second){
                [nums[first], nums[second]] = [nums[second], nums[first]]
                first = second + 1
                second += 2
            } else if (nums[first] % 2 === 0) {
                second++
            } else if (nums[second] % 2 === 0) {
                first++
            } else if (nums[first] % 2 !== 0 && nums[second] % 2 !== 0){
                first = second + 1
                second += 2 
            } else if (first === second) {
                second++
            }
        }
        return nums
}

console.log(swapConsecutiveEven([1,3,7,2,4]))
console.log(swapConsecutiveEven([1,3]))

// [1,3,7,2,4]
//        fs