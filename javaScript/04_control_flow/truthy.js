const userEmail = "bikash@js.in" // if have anythig in the String then have a truth value
const userEmail2= "" // empty string give false value
const userEmail3 = [] //truth

// if(userEmail){
//     console.log("Got user email");
// }else{
//     console.log("Don't have user email");
// }

// falsey value => false, 0,-0,BigInt 0n,"", null,undefined,NaN
// truthy value => "0", 'false'," ",[],{},function(){}

// check empty array 

// if (userEmail3.length === 0) {
//     console.log("Array is Empty");
// }

// const emptyObj ={}
// if(Object.keys(emptyObj).length === 0){
//     console.log("Object is Empty");
// }

// Nullish Coalesescing Opeartor(??): null undefined

// let val1 ;
// val1 = 5 ?? 10
// val1 = null??10
// val1 = undefined??15
// val1 = null ?? 10 ?? 15
// console.log(val1);

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ?console.log("Less than 80") : console.log("More than 80")


