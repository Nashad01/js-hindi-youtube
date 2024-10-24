const name = "Nashad"
const repoCount= 50;

// console.log( name + " repoCount" + " Value");


console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('Nashad')

console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))


//substring
const newString = gameName.substring(0, 4)
console.log(newString)

//slice
const anotherString = gameName.slice(-5, 2)
console.log(anotherString)

//trim
const newStringOne = "       hitesh            "
console.log(newStringOne)
console.log(newStringOne.trim())

//replace
const url = "https://nashad.in/balgal/ullabe&#20jilani"
console.log(url.replace('&#20', '888'))

console.log(url.includes('nashad'))
console.log(url.includes('nash'))
console.log(url.includes('nashji'))