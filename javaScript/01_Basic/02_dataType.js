"use strict"; //treat all js code as new version

//alert("hello"); //we are using nodejs, not browser


let name = "Bikash"
let age = 21
let isLogedIn = false

// number -> 2 to the power 53
//bigint -> large number
//string -> ""
//boolean -> true/false
//null-> standalone value
//undefined -> not defined
//symbol -> for finding uniqueness

//object 
// console.log(typeof undefined);
// console.log(typeof null);

// console.table([typeof name, typeof age, typeof isLogedIn])


// Primitive -> total 7 :: String , Number , Boolean , null , undefiend , Symbol ,BigInt

// reference / Non primitive :: Array , Objects , Function

const hero =["saktiman", "ironman", "Batman"];
let myObj = {
    name : "Bikash", 
    age: 22,
}
const myFun = function(){
    console.log("Hello world");
    
}
// JS is Dynamically typed Lang. . This means you don't have to declear the type of a var when you create it, and var can hold value of any type
// Example:
// let x= 42;
// x= "hello";
// x=[1, 2, 3];


console.log(typeof myObj);
console.log(typeof myFun);
console.log(typeof hero);

// https://262.ecma-international.org/5.1/

