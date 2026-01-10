// let myName = "Bikash"
// console.log(myName.length)

let myName2 = "Bikash   "
// console.log(myName2.trim().length)
// myName2.trueLength()


let myHeros = ['thor','ironman','batman']

let heroPower = {
    thor: 'hammer',
    ironman:'brain',
    batman:'money',

    getThorPower: function(){
        console.log(`Thor power is ${this.thor}`);
        
    }
}

Object.prototype.bikash = function(){
    console.log(`Bikash is Present in all Object`);
    
}

Array.prototype.heyBikash = function(){
    console.log("Bikash says hey to Array");
    
}

// heroPower.bikash()
// myHeros.bikash()
// myHeros.heyBikash()
// heroPower.heyBikash()  // give error only avilable for Array not any other Object


const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}
// old syntax for - Prototype chaining :: allows objects to inherit properties
Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUsername.trueLength()
"hitesh".trueLength()
"iceTea".trueLength()
