/*
Shallow copy — Object.assign()
Deep copy — JSON.parse() & JSON.stringify()
Object.create()
Object.entries()
Object.keys()
Object.values()
Object.freeze()
*/

let obj = {
    name: "Julia",
    occupation: "developer",
    employed: false,
    employable: true
}

let obj1 = {...obj} // makes a copy that is NOT  a reference to the initial obj. comparing them returns FALSE

let obj2 = Object.assign(obj) // makes a copy that IS a reference to initial obj. comparing them returns TRUE. both objects would be affected by changes.

let deepCopy = JSON.parse(JSON.stringify(obj)) // makes a copy that will copy NESTED objects as well (except for functions)

let entriesArray = Object.entries(obj) // creates an array of arrays. each inner array is a key/value pair

let keys = Object.keys(obj) // creates an array of the keys in the object

let values = Object.values(obj) // creates array of the values in the object
console.log(values)


console.log(deepCopy)
console.log(obj)
