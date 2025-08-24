//Immediately invoked function expression (IIFE)


( function chai(){
   //named iffe
    console.log(`DB CONNECTED`);
 })();   //this ';' is very important

 ( (name) => {
   //unnamed iffe
   console.log(`DB CONNECTED TWO ${name}`)
 }) ('diya')

 



 