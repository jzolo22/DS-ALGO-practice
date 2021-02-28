/*

Write a recursive function called reverse which accepts a string and returns a new string in reverse.

*/

// base case: str is empty
// slice off last letter each time and add into new str 
// each time concatenate with that string

function reverse(str){
    if (!str.length) return ''
    let rStr = ''
    rStr += str.slice(-1)
    return rStr += reverse(str.slice(0, -1))
}

console.log(reverse("string"))
console.log(reverse('awesome')) // 'emosewa'