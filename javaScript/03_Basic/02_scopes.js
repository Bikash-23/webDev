// {} //scope


var c = 300
let a = 200 
if(true){
    let a  = 10
    // console.log("Inner:",a);
    
    const b = 20
    c = 30
}

// console.log(b); //not execute as it is written in the scope 
// console.log(a); //not execute as it is written in the scope
// console.log(c); // run due to var


function one(){
    const userName = "Bikash"

    function two(){
        const webSite = "YouTube"
        console.log(userName);
        
    }
    // console.log(webSite); //not run
    two()
    
}
// one()

if(true){
    const username = "Bikash"
    if(username === "Bikash"){
        const website = "Youtube"
        // console.log(username+" "+website);
        
    }
    // console.log(website); //error
    
}
// console.log(username); //error



//+++++++++++++++++++++++++++ interesting ++++++++++++++++++

console.log(addOne(5)) //possible

function addOne(num){
    return num +1
}
// console.log(addTwo(5)); // error as it decleare but have hold with variable "addTwo"

const addTwo = function(num){
    return num +2
}


console.log(addTwo(5));
