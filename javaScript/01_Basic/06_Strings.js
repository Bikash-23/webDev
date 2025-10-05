//  Old type of writing String 

let str = "hello" + " world"
console.log(str);

const name = "Biaksh"

const repoCount = 50

console.log(name +" "+ repoCount+ " Value");

// mordern Writing 

console.log(`Hello my name is ${name.toLowerCase()} and my repo count is ${repoCount}`);

const gameName = new String('Bikash')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.substring(0,3));
console.log(gameName.slice(-5,5));

const newStr = "   Bikash pari  "
console.log(newStr);
console.log(newStr.trim());

const url = "https://Bikash.com/Bikash%20pari"
console.log(url.replace('%20','-'));
console.log(url.includes('Bikash'));
console.log(url.includes('Ram'));

const str1= new String('Bik-ash-Pari');
console.log(str1.split('-'));

