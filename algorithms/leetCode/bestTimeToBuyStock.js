/*

You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

 

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.

*/


// set variable to store max difference
// set buy & sell variables
// loop through array, moving forward one or the other


function maxProfit(prices){
    let currentDiff = 0
    let profit = -Infinity

    for (let i = 0; i < prices.length - 1; i++){
        for (let j = i+1; j <= prices.length; j++){
            if (prices[j] < prices[i]) {
                break;
            } else if (prices[j] > prices[i]){
                currentDiff = Math.max(currentDiff, prices[j] - prices[i])
            }
        }
        profit = Math.max(currentDiff, profit)
    }
    return profit
}

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))