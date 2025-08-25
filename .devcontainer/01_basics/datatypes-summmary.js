// primitive 
// 7 categories: string, number, boolean,null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.4;

const isLoggedIn = false
const outsideTemp = null
let userEmail; //undefined
const id = Symbol('123');
const anotherId = Symbol('123')

console.log(id === anotherId); //even though same value in both symbols it is still considered to be unique so output will be false

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



//***************memory*************

// stack(primitive), heap(non primitve)

let myNiceName = "diyanshisharmagreat"

let anotherName = myNiceName
anotherName = "chocolateisgreat"
console.log(anotherName);
console.log(myNiceName);

let user1 = {
    email: "diyanshi088702@gmail.com",
    upi: "d@ybl"
}

let user2 = user1;

user2.upi = "ds@ybl";

console.log(user1.upi);
console.log(user2.upi);
