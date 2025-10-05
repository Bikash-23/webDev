// Stack(Primitive) :: use a duplicate of main so main data are not change 

let myname  = "Bikash Pari";
let anotherName = myname;

// console.log(anotherName);

anotherName = "js-tutorial";

console.log(myname);

console.log(anotherName);

// Heap(Non-primitive) :: use a single reference so main data change

let userOne ={
    email : "user@gmail.com",
    upi : "user@ybl"
}

let usertwo = userOne

usertwo.email = "bikash@gmail.com"

console.log(usertwo.email);
console.log(userOne.email);

