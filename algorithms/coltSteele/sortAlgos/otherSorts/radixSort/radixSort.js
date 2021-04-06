/*

- Define a function that accepts a list of numbers
- Figure out the longest number (to determine how many times we loop)
- start a loop from 0 to that ^ number
    - create a bucket (array) for each digit
    - place each number in the corresponding bucket based on it's "kth" digit
- return list at the end

*/

function radixSortJZ(nums){
    let maxDigitCount = mostDigits(nums)
    let i = 0
    sorted = []
    while (i < maxDigitCount){
        let zeros = []
        let ones = []
        let twos = []
        let threes = []
        let fours = []
        let fives = []
        let sixes = []
        let sevens = []
        let eights = []
        let nines = []
        // Array.from({length: 10}, () => []) 
            // would create an array of 10 empty sub arrays 

        nums.forEach(num => {
            switch(getDigit(num, i)){
                case 0:
                    zeros.push(num)
                    break
                case 1:
                    ones.push(num) 
                    break  
                case 2:
                    twos.push(num) 
                    break
                case 3:
                    threes.push(num)
                    break
                case 4: 
                    fours.push(num)
                    break
                case 5: 
                    fives.push(num)
                    break
                case 6:
                    sixes.push(num)
                    break
                case 7:
                    sevens.push(num)
                    break
                case 8: 
                    eights.push(num)
                    break
                case 9:
                    nines.push(num)
                    break
            }
        })
        sorted = zeros.concat(ones, twos, threes, fours, fives, sixes, sevens, eights, nines)
        i++
    }
    return sorted
}

console.log(radixSortJZ([1234, 23, 900008, 78]))

//--------------------------------------------//
function radixSort(nums){
    let maxDigitCount = mostDigits(nums)
    for (let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => [])
        for (let i = 0; i < nums.length; i++){
            let digit = getDigit(nums[i], k)
            digitBuckets[digit].push(nums[i])
        }
        nums = [].concat(...digitBuckets)
    }
    return nums
}

console.log(radixSort([1234, 56, 89, 90000089, 1]))
// ------------------------------------------//
function digitCount(num){
    return num.toString().length
}

// ------------------------------------------//
function mostDigits(nums){
    let max = 0
    nums.forEach(num => {
        max = Math.max(digitCount(num), max)
    })
    return max
}

// ------------------------------------------//
function getDigit(num, i){
    return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
}
