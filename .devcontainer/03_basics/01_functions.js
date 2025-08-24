// console.log("D")
// console.log("I")
// console.log("y")
// console.log("a")


function sayMyName(){
    console.log("D")
console.log("I")
console.log("y")
console.log("a")

}
//sayMyName()

// function addTwoNumbers(num1,num2){

//     console.log(num1 + num2)
// }

function addTwoNumbers(num1,num2){

    // let result = num1 + num2
    // return result

    return num1 + num2

}
const result = addTwoNumbers(4,6)

//console.log("Result:", result);

function loginUserMessage(username){
    if(!username){
        console.log("please give a username")
        return

    }
    return `${username} just logged in`
}
//console.log(loginUserMessage("diya"))
//console.log(loginUserMessage()) //if no vaue passed it gives undefined

function calculateCartPrice(val1, val2, ...num1){   //REST operator
return num1
}
//console.log(calculateCartPrice(200,300,400))

const user1 =
{
    username: "diya",
    price: 34
}
const user2 =
{
    username: "piya",
    price: 34
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user1)
handleObject({
    username: "sam",
    price: 22
})

const myNewArr = [200, 400, 600]

function returnsecondValue(getArr){
    return getArr[2]
}
console.log(returnsecondValue(myNewArr))