// singleton
// Object.create

// object literals
const mySym= Symbol("Key1");
const JsUser ={
    name :"Bikash",
    "full Name": "Bikash Pari",
    [mySym]: "MyKey1", // for symbol
    age : 22,
    location: "Kolkata",
    email: "bik23@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser."full Name"); Not possible
// console.log(JsUser["full Name"]);
// console.log( JsUser[mySym]);
// console.log(typeof JsUser[mySym]);
JsUser.email =  "bik23#hi.com"
// console.log(JsUser.email);
// Object.freeze(JsUser)

JsUser.email  = "bikash@gmail.com"
// console.log(JsUser.email);
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user,${this.name}`);
    
}

// console.log(JsUser.greeting);
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
