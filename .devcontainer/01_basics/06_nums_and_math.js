const score = 400
//console.log(score)
const balance = new Number(190)
// console.log(balance);

// console.log(balance.toString().charAt(2));
// console.log(balance.toFixed(2)) //digits after decimal used in ecommerce or where too much calculation is involved

const otherNumber = 123.7883

//console.log(otherNumber.toPrecision(3)) //ROUNDS of also if needed

// const hundreds = 100000000
// console.log(hundreds.toLocaleString('en-IN')) //puts commas according to us system by default we can further change it to indian by using en-IN

//++++++++++++++++MATHS++++++++++++

// console.log(Math)
// console.log(Math.abs(-5)) //only changes sign, absolute value
// console.log(Math.round(4.6))// simple round off
// console.log(Math.ceil(4.2))//top value, ceiling
// console.log(Math.floor(9.6))//lower value

//console.log(Math.min(2,6,8,9))//similarly math.max

console.log(Math.random()); //gives value between 0 and 1 always
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min)) 