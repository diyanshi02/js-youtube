const userEmail = []

if (userEmail) {
    console.log("got user email");
    
}else{
    console.log("dont have user email");
    
}

//falsy values : false, 0, -0, biginr 0n, "", null, undefined, NaN
//all the remaining ones are truthy values
// truthy values: "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("array is empty");
    
// }

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
console.log("object is empty");

}

//Nullish Coalescing Operator(??): null undefined

let val1;
//val1 = 5 ?? 10
//val1 = null ?? 2
//val1 = undefined ?? 18
val1 = null ?? 10 ?? 13

console.log(val1);

//terniary opertor
//condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("less than 80") : console.log("more than 80");


