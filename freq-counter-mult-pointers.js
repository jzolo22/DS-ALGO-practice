/*
Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. 

You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Time: O(N)
Space: O(N)

**potential edge cases to look out for:
    -no arguments passed in??
    -what kind of arguments?? -- can arrays or objects be passed in? or just letters/numbers?

*/


// FREQUENCY COUNTER
function areThereDuplicates(...args) {
    // args will already be an array
    // initialize a counter variable
    let counter = {}

    // loop through the args array
    for (let i = 0; i < args.length; i++) {
        // if the key already exists in counter
        if (counter[args[i]]) {
            return true
        } else {
            // add that key to counter variable with value of 1
            counter[args[i]] = 1
        }
    }
    return false
}
// console.log(areThereDuplicates(1, 2, 3, 4, 2))

// MULTIPLE POINTERS
function areThereDuplicates(...args) {
    // first, sort args
    args.sort((a, b) => a-b)
    console.log(args)
    // set pointer 1 to 0
    let p1 = 0
    // set up pointer 2 to pointer1 + 1
    let p2 = 1

    // loop over args (for length - 1)
    while (p2 < args.length - 1) {
        // if pointer 2 and pointer 1 are equal
        if (args[p1] === args[p2]) {
            return true
        } else {
            p1++
            p2++
        }
    }
    return false
}

// console.log(areThereDuplicates(1, 2, 3, 4))

// ONE LINER SOLUTION

function areThereDuplicates() {
    return new Set(arguments).size !== arguments.length;
  }