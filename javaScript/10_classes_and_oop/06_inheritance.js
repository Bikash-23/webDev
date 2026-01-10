class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends user{
    constructor(username,email,password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new couse is added by ${this.username}` );
    }
}

const chai = new Teacher('chai', 'chai@teacher.com','123')
chai.addCourse()
const masalaChai = new user('Bikash')

// masalaChai.addCourse()
masalaChai.logMe()
chai.logMe()
console.log(chai instanceof user);
