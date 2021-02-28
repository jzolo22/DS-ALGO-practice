/*

Write a function called collectStrings which accepts an object and returns an array of the all the values in the object that have a type of string

*/

// base case: iterate through whole object
//
// create an empty array
// if type is string, push it into the empty array
// otherwise, concatenate with return of collectString

const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

function collectStrings(obj) {
    let stringArray = []

    for (const key in obj) {
        if (typeof obj[key] === "string"){
            stringArray.push(obj[key])
        } else {
            stringArray = stringArray.concat(collectStrings(obj[key]))
        }
    }

    return stringArray
}

console.log(collectStrings(obj))





