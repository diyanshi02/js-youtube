let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toISOString());
// console.log(typeof myDate)

let myCreatedDate = new Date(2025,0,23,6,4)
//console.log(myCreatedDate.toDateString());
//console.log(myDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

//console.log(Math.floor(Date.now()/1000))

let newDate= new Date()
//console.log(newDate.getMonth()+1);
//console.log(`day is ${newDate.getDay()} and the time is ${Math.floor((newDate.getTime()/1000))}`)

const weekday = newDate.toLocaleString('default', {
    weekday: "long",
})
console.log(weekday)