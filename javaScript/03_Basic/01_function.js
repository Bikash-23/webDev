function sayMyName(){
    console.log('Bikash');
    
}
// sayMyName()

function addTwoNumber(number1, number2){
    console.log(number1+number2);
    
}
// addTwoNumber(3,4)
// addTwoNumber(3,"4")
// addTwoNumber(4,null)

function addNumberWithResult(number1,number2){
    // let result = number1+number2;
    // console.log("Bikash");
    
    // return result;
    // console.log("Bikash"); unreacheable due to excution of return statement before
    return number1 +number2
}

const result= addNumberWithResult(3, 5)
// console.log("Result:",result);

function loginUserMessage(username){
    if(!username){ //username === undefined  ->"same"
        console.log("please enter a user name")
        return
    }
   return `${username} just logged in`
}

// console.log(loginUserMessage("Bikash"))
// console.log(loginUserMessage())


function calculateCartPrice(val1, val2,...num1){ //rest operator
    return num1
}

console.log(calculateCartPrice(200,300,400,240));

const user ={
    username : "Bikash",
    price : 199
}
function  handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleObject(user)
handleObject({
    username :"Ram",
    price: 234
})

const myNewArray = [100, 200, 300, 400]
 
function getSecondArray(getArray){
    return getArray[1]
}

console.log(getSecondArray(myNewArray));
