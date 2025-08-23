//arrays

const myArr =[0, 1, 2, 3, 4, 5]
const myHeros = ["momsie", "pappa"]
const myArr2 = new Array(1,2,3,4)
//console.log(myArr[2]);

//array methods

// myArr.push(6)
// myArr.pop() //removes last value
// console.log(myArr);

//myArr.unshift(8) //inserts at the beginning of the array
//myArr.shift(); //removes the first element basically


//console.log(myArr.includes(9)); // cgecks if this number is a part of the array
//console.log(myArr.indexOf(9)); //negative value means the number is not a part of the array

const newArr = myArr.join() //converts array to string
// console.log(myArr);
// console.log(newArr);
// console.log(typeof newArr);

//slice and splice

console.log("A", myArr);

const myN1 = myArr.slice(1,3) //again i will repeat last index number is not included in slice
console.log(myN1);
console.log("B", myArr);

const myN2 = myArr.splice(1, 3)
console.log(myN2);
console.log("C", myArr);
