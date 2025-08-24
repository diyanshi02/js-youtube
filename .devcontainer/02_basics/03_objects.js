// singleton
Object.create //constructor method


//object literals

const mySym = Symbol("key1")

const jsUser = {
    name: "Diyanshi", 
    "fullname": "diyanshi sharma",
    [mySym]: "yookey1",
    age: 25,
    location: "ajmer",
    email: "di02@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["monday", "thursday"],
}

// console.log(jsUser.fullname) // not a preffered way to call the value
// console.log(jsUser["fullname"])
// console.log(jsUser[mySym])

jsUser.email = "d@gmail.com"
//Object.freeze(jsUser)
jsUser.email = "dog@gmail.com"
//console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello bro")
}
jsUser.greetingTwo = function(){
    console.log(`hello yoo bro, ${this.name}`); //better way
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());

