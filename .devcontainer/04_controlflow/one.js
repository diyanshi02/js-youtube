// if statement

const isUserLoggedIn = true
//const temperature = 42

// if(isUserLoggedIn){ 

// }
//<,>, <=,>=,==,!=,===

// if (temperature === 50){
//     console.log("temperature is less than 50")
// } else{
//     console.log("temperature is greater than 50");
// }
// console.log("always executed");


// const score = 200

// if (score>100){
//     let power = "fly" //her let and const will give error because their scope is limited, though var will not give any error still we cant use it because it makes the value accessiblem globally which is not correct
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);

const balance = 1000
//if(balance > 500) console.log("test"); //implicit scope

// if (balance < 500){
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("less than 750");
// } else if (balance < 960){
//     console.log("less than 960");
// } else if(balance === 1000){
//     console.log("exact amount");
// }

const userLogeedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLogeedIn && debitCard && 2==2){
    console.log("allowed to shop the world");
}
if(loggedInFromGoogle || loggedInFromEmail || userLogeedIn){
    console.log("user has been granted access");
    
}
