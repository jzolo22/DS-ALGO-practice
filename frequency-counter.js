/*
Given two positive integers, find out if the two numbers have the same frequency of digits.

Solution must have O(N) time complexity.
*/

function sameFrequency(int1, int2){
    if (int1.toString().length !== int2.toString().length) {
        return false
    }
    // initialize empty counter object
    let counter = {}
    // turn int1 into string or array
    const stringInt1 = int1.toString()
    // loop over str1
    for (let i = 0; i < stringInt1.length; i++) {
        // if obj[str1[i]] exists
        if (counter[stringInt1[i]]) {
            // obj[str1][i] ++
            counter[stringInt1[i]] ++
        } else {
            // obj[str1][i] = 1
            counter[stringInt1[i]] = 1
        }
    }

    const stringInt2 = int2.toString()
    // loop over str2
    for (let i = 0; i < stringInt2.length; i++) {
        // if obj[str2[i]] exists
        if (counter[stringInt2[i]]) {
            // subtract 1 if exists, so that if it hits zero, skips to else statement
            counter[stringInt2[i]] --
        } else {
            return false
        }
    }
    // if it has passed all conditions in the last for loop, should return true
    return true
  }

