const accountId = 2105456
let accountEmail = "diyanshi02@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur" //not a prefered way but you can declare a variable this way
let accountState;
/*
prefer not to use var
because of issue in block scope and functional scope
*/
// accountId = 2 // not allowed

accountEmail = "i=aya@yay.com"
accountPassword = "2121"
accountCity = "bhubaneshwar"
console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])