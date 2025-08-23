const marvel_heros = ["ironman", "thor", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

//marvel_heros.push(dc_heros) //creates array inside an array which is not preferred
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])

// const newHero = marvel_heros.concat(dc_heros)
// console.log(newHero)

const all_new_heros = [...marvel_heros,...dc_heros] //adds arrays simply in a new array similiar to concat
//console.log(all_new_heros)

const anotherArr = [1,2,3,[4,5], 7, [7,8, [3,4]]]

const realAnotherArr = anotherArr.flat(Infinity)
console.log(realAnotherArr)


console.log(Array.isArray("diyanshi")) //tells if input is an array or not
console.log(Array.from("diyanshi")) //converts into an array from whatever initial datatype. here, string to array
console.log(Array.from({name: "diynshi"})) //will give empty array, interesting  

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3))