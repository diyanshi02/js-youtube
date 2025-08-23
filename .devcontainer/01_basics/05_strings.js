const name ="diyanshi sharma"
const repoCount = 1

//console.log(name + repoCount + "yoyo"); //concatenation

console.log(`hello my name is ${name} and my repo count is ${repoCount} `);

const gameName = new String('diyansh-iiiisc');
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(4));
// console.log(gameName.indexOf('h'));

const newString = gameName.substring(0,4); //last value not included
console.log(newString);

const anotherString = gameName.slice(-4,-2)
console.log(anotherString);

const newStringOne = "   diyanshi  "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "http://d.com/diyanshi%20sharma"

console.log(url.replace('%20','-'))

console.log(url.includes('diyanshi'))

console.log(gameName.split('-'));