let people: string[] = ["Greg", "Mary", "Devon", "James"]

// people.forEach(name => {
//     if (name === "Mary"){
//        console.log(name)
//         return;
//     }
// })
// people.find(name => name === "Mary")

people.pop()
people.shift()
people.unshift("Matt")
people.push("Julia")
const slice: string[] = people.slice(2)
console.log(slice)
const index: number = people.findIndex(name => name === "Mary")
console.log(index)
const indexTwo: number = people.findIndex(name => name === "Foo")
console.log(indexTwo)
people = ["Greg", "Mary", "Devon", "James"]
people.splice(2, 1, "Elizabeth", "Artie")
const withBob: string[] = people.concat("Bob")
console.log(withBob)
// for (let i: number = 0; i < people.length; i++){
//     if (people[i] === "Mary"){
//         console.log("Mary")
//         break
//     }
// }
console.log(people)

let myString: string = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';
const myArray: string[] = myString.split('+')
myArray.forEach((name:string, index:number) => {
    myArray[index] = name + ` (${index})`
})
console.log(myArray.join(' - '))
console.log(myArray)

