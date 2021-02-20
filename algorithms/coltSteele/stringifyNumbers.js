/*

Write a function called stringifyNumbers which takes in an object and finds all the values which are numbers and converts them to strings. Recursion would be a great way to solve this. 

*/

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

// base case: iterated through all of keys 
// use a for...in loop
// if obj[key] is a number
//  then obj[key] = obj[key].toString()
// if it's an obj, call function again on that obj

function stringifyNumbers(obj) {
    let newObj = {...obj}
    for (const key in obj){
        if (typeof obj[key] === "number"){
            newObj[key] = obj[key].toString()
        } else if (typeof obj[key] === "object"){
            newObj[key] = stringifyNumbers(obj[key])
        }
    }
    return newObj
}

console.log(stringifyNumbers(obj))