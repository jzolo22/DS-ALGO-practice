function stockTrader(nums){
    let diff = 0
    let buy = 0
    let sell = 1
    
    while (sell < nums.length){
        if (nums[sell] > nums[buy]){
            diff = Math.max(diff, (nums[sell] - nums[buy]))
            sell ++
        } else {
            buy++
            sell = buy + 1
            // you had said the relationship between buy & sell was off --> this makes sure we move them both up together and buy never gets ahead of sell, without skipping over potential options.
        }
    }
    return diff
} 

// [10, 5, 15, 20, 6]
console.log(stockTrader([-20, 1, 20, 30, 0, -20]))

// [20, 15, 14, 17, 12, 7, 4, 30]