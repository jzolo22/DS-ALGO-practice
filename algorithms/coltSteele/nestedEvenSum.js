/*

Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.

*/

var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
}

var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
};

// base case: reach the end of the loop
// initialize sum variable
// loop through keys in object
// if object[key] is num
// check if it's even - if so, add it to sum
// if object[key] is an object
// call nestedEvenSum again

function nestedEvenSum(obj) {
  let sum = 0;
  for (const key in obj) {
    if (typeof obj[key] === "number" && obj[key] % 2 === 0) {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
        sum += nestedEvenSum(obj[key])
    }
  }
  return sum
}

console.log(nestedEvenSum(obj1)) // 6
console.log(nestedEvenSum(obj2)) // 10