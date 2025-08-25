// console.log(2>1);
// console.log(2<=1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);

// console.log("2">1);
// console.log("02">1);

console.log(null > 0);
console.log(null == 0); // wont convert null to 0
console.log(null >= 0 );//the reason is that an equality check == and comparisons <><=>= work differently
//comparisons convert null to a number and treat it as zero "0"
//that's why null>=0 is true and null>0 is false


console.log(undefined == 0); //false
console.log(undefined < 0); //false
console.log(undefined > 0 ); //false
console.log(undefined == null) //true, treated as loosely equal

//=== strict check

console.log("2" === 2);


    