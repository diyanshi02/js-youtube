const user = {
    username: " diya",
    price: 22,

    welcomeMessage: function(){
        console.log(`${this.username/*current context*/}, welcome to website`);
        //console.log(this)
    }
    
}
// user.welcomeMessage()
// user.username = "sam"  //here we changed the context
// user.welcomeMessage()

//console.log(this)

// function chai(){
//     let username = "diya"
//     console.log(this.username)
// }
// chai()


// const chai = function (){
//     let username = "diya"
//    console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "diya"
   console.log(this)
}
//chai()

// const addtwo = (num1, num2) => {
//     return num1 + num2  //explicit return
// }

//const addtwo = (num1, num2) => num1 + num2  //implicit statemnt

// const addtwo = (num1, num2) => (num1 + num2)  //if we use {} we need to write return keyword but if we use () we dont need to use return keyword

const addtwo = (num1, num2) => ({username: "diya"})  //to return object

//console.log(addtwo(3,4))

//const myArray = [2, 5, 6, 8]

//myArray.forEach()