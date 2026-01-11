class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password = value
    } 
}

const bikash = new User('bik@gmail.in','abc@123')
console.log(bikash.password);

