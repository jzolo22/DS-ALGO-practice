/*

Given the array candies and the integer extraCandies, where candies[i] represents the number of candies that the ith kid has.

For each kid check if there is a way to distribute extraCandies among the kids such that he or she can have the greatest number of candies among them. Notice that multiple kids can have the greatest number of candies.

*/

function kidsWithCandies(candies, extraCandies) {
    // let max = 0
    let max = 0
    // empty array = []
    let booleanArray = []

    // for loop to check each element in candies & capture the highest one
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > max) {
            max = candies[i]
        }
    }

    // for loop to check if element +extraCandies will exceed or equal the max
    for (let i = 0; i < candies.length; i++) {
        if (candies[i] + extraCandies >= max) {
            booleanArray.push(true)
        } else {
            booleanArray.push(false)
        }
    }
        // if so, add true to array
        // otherwise, add false to array

    return booleanArray
}

console.log(kidsWithCandies([2,3,5,1,3], 3))