//const tinderUser = new Object() //1 & 2 are different ways writing similiar things
const tinderUser = Object();

tinderUser.id = "123abs"
tinderUser.name = "donkey"
tinderUser.isLoggedIn = false


//console.log(tinderUser)

// const regularUser = {
//     email: "d@gmail.com",
//     fullname: {
//         userfullname: {
//             firstname: "diyanshi",
//             lastname: "sharma"
//         }
//     }
// }

// console.log(regularUser["fullname"]); //vvvproud
//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// console.log(obj3) //gives an array i side an array as already discussed 

const obj4 = {...obj1,...obj2} //spread operator
// console.log(obj4)

//const obj3 = Object.assign({}, obj1, obj2) //anotherr way to create a new combined array with the previous two arrays
//console.log(obj2)

const users =[ 
    {
        id: "1",
    email: "2@gmaiil.com",
    },
    {
        id: "1",
    email: "2@gmaiil.com",
    }
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn')); //to check if  a certain property exists


const course = {
    coursename: "js",
    price: "99999",
    courseteacher: "dd"
}

//course.courseteacher

const {courseteacher: instructor} = course //destructuring an object
//console.log(courseteacher)
console.log(instructor);

// const navbar =({company}) => {

// }

// navbar(company = "ds")  react reference, not needed now

// {//not an object because no name  so this will be treated as json
//     "name": "diyanshi",
//     "hobbies": " sleeping",
//     "loves": "nothing really"
// }

[
    {},
    {},
    {}
]

