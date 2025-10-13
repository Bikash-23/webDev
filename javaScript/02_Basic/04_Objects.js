// singleton

const tinderUser = new Object() // singleton object 
// const tinderUser = {} // non-singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "some@gamil.com",
    fullName :{
        userfullname :{
            firstname : "Bikash",
            lastname : "Pari"
        }
    }
}
// console.log(regularUser.fullName);
// console.log(regularUser.fullName.userfullname);
// console.log(regularUser.fullName?.userfullname.firstname);

const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"a", 4: "b"}
const obj4 = {5:"a", 6: "b"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4) // most accurate rule
// const obj3 = Object.assign(obj1,obj2,obj4)
const obj3 = {...obj1,...obj2,...obj4} // most practical
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "b@gamil.com"
    },
       {
        id: 2,
        email: "k@gamil.com"
    },
       {
        id: 3,
        email: "l@gamil.com"
    },
       {
        id: 4,
        email: "b@gamil.com"
    }
]


// console.log(users[1].email);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));

