// array 

const myArr1 = [0,1,2,3,4,5, true , "Biaksh"] // store diff. data type

const myArr2 = new Array(1,2,3,4,5,6)
console.log(myArr2[0]);

// Array Methods 

myArr2.push(8) // push at last
myArr2.push(9)
console.log(myArr2);
myArr2.pop() // pop at last

myArr2.unshift(10)  // add at first
console.log(myArr2);

myArr2.shift()  // remove at first
console.log(myArr2);

console.log( myArr2.includes(9)); // chech the data present or not data type -> boolean
console.log(myArr2.indexOf(3)); // search index of the data ; if not present then return -1

const newArr = myArr2.join(); // convert into String

console.log( typeof newArr);

// slice , splice

const newArr2 =[0,1,2,3,4,5,6,7,8,9,10]
console.log("Slice Operation:");
console.log(newArr2.slice(1,3)); // take range 1 to before 3
console.log("Origianl after slice:");
console.log(newArr2);
console.log("Splice Operation:");
console.log(newArr2.splice(1,3)); // take range 1 to 3 and manipulet org. array
console.log("Origianl after splice:");
console.log(newArr2);
