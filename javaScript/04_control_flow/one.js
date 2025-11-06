// if , else, else if

// < , >, <=, >=, ==,!=, ===

// const isUserloggedIn= true

// if(2 == "2"){ // only chek same or not
//     console.log("executed")
// }

// if(2 === "2"){ // chek datatype also while cheking
//     console.log("executed")
// }else{
//     console.log("Not executed");
// }

// const temperature = 41

// if(temperature>50){
//     console.log("less then 50");
// }else{
// console.log(`tempetature is ${temperature}`);
// }


// let bal = 1000
// if(bal > 500 ) console.log("test"), console.log("test2"); // possible but not a good practice


// let balance = 1000
// if(balance  < 500){
//     console.log("less then 500");
// } else if(balance <750){
//     console.log("less then 750");
// }else if(balance <900){
//     console.log("less then 900");
// }else{
//     console.log(`Balance : ${balance}`); 
// }

const underLoggedIn = true
const debidCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true


if(underLoggedIn && debidCard){
    console.log("Allow to buy a course");
}
if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");
}