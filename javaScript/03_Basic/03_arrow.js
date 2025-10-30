const user ={
    username: "Biaksh",
    price: 199,

    welcomeMessage: function (){
        console.log(`${this.username} , welcome to website`);
        // console.log(this);
    }
}

// user.welcomeMessage()
// user.username  ="sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "Bikash"
//     console.log(this.username);
// }
// chai()

// const chai = function(){
//     let username = "Bikash"
//     console.log(this.username);
// }
// chai()

 const chai = () =>{
    let username = "Bikash"
    console.log(this);
    console.log(this.username);
}
// chai()

// const addTwo=(num1,num2) => {
//     return num1+num2
// }
// const addTwo=(num1,num2) => num1+num2
// const addTwo=(num1,num2) => (num1+num2)
const addTwo=(num1,num2) => ({username:"Bikash"})


console.log(addTwo(4,5));


