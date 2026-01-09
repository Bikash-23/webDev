const promiseOne = new Promise(
    function(resolve,reject){
        // do any async task
        // Db calls , cryptography, network
        setTimeout(function(){
            console.log('Async task is complete');
            resolve()
        },1000)
    }
)

promiseOne.then(function(){
    console.log('Promise consumed');
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task two');
        resolve()
        
    },1000)
}).then(function(){
    console.log("Async Two resolved");
    
})

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",Email:"hi@example.com"})
    },1000)
})

promiseThree.then(function(user){
console.log(user);

})

const promiseFour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username:"Bikash",PassWord:"1234"})
        }else{
            reject('ERROR: something went Wrong')
        }
    },1000)
})

promiseFour
.then((user) => {
    console.log();
    return user.username
    
})
.then((username) =>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
    
})
.finally(()=>{
    console.log("the promise is either resolve or rejected");
    
})

const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username:"JavaScript",PassWord:"123"})
        }else{
            reject('ERROR: JS went Wrong')
        }
    },1000)
})

async function consumePromiseFive(){
 try {
    const response =await promiseFive
    console.log(response);
 } catch (error) {
    console.log('error');
    
 }
    
}
consumePromiseFive()

// async function getAllUsers() {
//    try {
//      const response = await fetch('https://jsonplaceholder.typicode.com/users') 
//     const data  =await response.json()
//     console.log(data);
//    } catch (error) {
//     console.log("E: ",error);
    
//    }
// }
// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=> {
    return response.json()
})
.then((data) =>{
    console.log(data);
})
.catch((error)=>console.log(error))
