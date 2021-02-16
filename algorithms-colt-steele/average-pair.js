/*

Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target. 

Input: a sorted array, a target average
Output: boolean - is there a pair that equals the target avg?

Bonus:
    Time: O(N)
    Space: O(1)

Potential questions:
    -empty array --> should return false

*/

function averagePair(arr, avg) {
    // since array is sorted, use mult pointers
    // if array is empty, return false (0 is falsy)
    if (!arr.length) return false

    // initialize p1 --> 0
    let p1 = 0
    // initialize p2 --> arr.length - 1
    let p2 = arr.length - 1

    // loop through array until arr.length /2
    // BETTER: while (p1 < p2)
    while (p1 < arr.length/2) {
        // if (arr[p1] + arr[p2])/2 === avg 
        if ((arr[p1] + arr[p2]) / 2 === avg) {
            return true 
        } else if ((arr[p1] + arr[p2]) / 2 > avg) {
            p2--
        } else if ((arr[p1] + arr[p2]) / 2 < avg) {
            p1++
        }
    }
    return false 
}

console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1))