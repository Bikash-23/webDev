class User{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`Username = ${this.username}`);
    }
    static createId(){
        return `123_${this.username}`
    }
}
class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email =email
    }
}
const Bikash = new User("Bikash")
// console.log(Bikash.createId());
// console.log(Bikash.logMe());

const iphone  = new Teacher('iphone','i@phone.com')
console.log(iphone.logMe());
