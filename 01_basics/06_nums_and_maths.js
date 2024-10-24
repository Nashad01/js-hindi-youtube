const score = 400

const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(typeof balance)
// console.log(balance.toFixed(2))

const otherNumber = 1134.79393
// console.log(otherNumber.toPrecision(5))
// console.log(otherNumber.toPrecision(3))

const hundreds = 10000000000
// console.log(hundreds.toLocaleString('en-IN'));

// ++++++++++++++++++++++++ Maths ++++++++++++++++++++++++++++

// console.log(Math)
// console.log(Math.abs(-4))
// console.log(Math.abs(4))
// console.log(Math.round(4.6))
// console.log(Math.ceil(4.2))   //ceil means top
// console.log(Math.floor(4.2))   // floor means lower
// console.log(Math.min(2, 3, 7, -9))
// console.log(Math.max(2, 3, 7, -9))

console.log(Math.random());
console.log(Math.random()*10);
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 
const max = 20 

console.log(Math.floor (Math.random() * (max - min + 1) ) + min)