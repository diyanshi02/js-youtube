// primitive 
// 7 categories: string, number, boolean,null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 282729828921898n;//bigInt


//js is dynamically typed

//refernce (non primitive)
//arrays, objects, functions

const heros = ["cook", "jobs", "pichai","judge"]
let myObj = {
    name: "diyanshi",
    age: 24
}

const myFunction = function(){
console.log("hello world!");
}

console.log(typeof anotherId);