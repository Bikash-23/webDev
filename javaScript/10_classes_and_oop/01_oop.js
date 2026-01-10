// -------------Object Literal---------------

const user = {
    Username: "Bikash",
    loginCount: 10,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.Username}`);
        // console.log(this);
        
        
        
    }
}
// console.log(user.Username);
// console.log(user.getUserDetails());
// console.log(this);


// -----------------Constuction---------------------

// const promiseOne = new Promise()
// const date = new Date()

function User(UserName, loginCount, isLoggedIn){
    this.UserName = UserName;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    return this

}
// new -> when new keyword use then a empty object create; called instense 
const userOne = new User("Bik",12,true)
const userTwo = new User("Bikash",15,false)
console.log(userOne);
console.log(userTwo);
