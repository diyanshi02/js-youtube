//var c = 77
let a = 300
if(true){
    let a = 10
const b = 20
//console.log("inner:", a) 

}


//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "diyanshi"

    function two(){
        const website = "lololol"
        console.log(username);
    }
    //console.log(website);

    two()
}

//one()

if (true) {
    const username = "diya"
    if (username === "diya"){
        const website = " lolol"
        //console.log(username + website)
    }
    //console.log(website);
}
//console.log(username);


//+++++++++++interesting+++++++++++

addOne(5)
function addOne(num){
    return num + 1
}


addtwo(5)  //depending on how we create the function the accessibility changes and this is called HOISTING which we learn later elaborately
const addtwo = function(num){    
    return num + 2
}


