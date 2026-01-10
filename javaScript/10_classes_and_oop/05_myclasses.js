class user {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
    encryptPassword(){
        return `${this.password}abc`
    }
    changeUserName(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new user('Bikash','bik@gmail.com','123')
console.log(chai.encryptPassword());
console.log(chai.changeUserName());


// behind the scene
class user2 {
    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password
    }
}
user2.prototype.encryptPassword = function(){
   return `${this.password}abc`
    }
user2.prototype.changeUserName = function(){
        return `${this.username.toUpperCase()}`
    }

const tea = new user2('tea','tea@gmail.com','123')
console.log(tea.encryptPassword());
console.log(tea.changeUserName());