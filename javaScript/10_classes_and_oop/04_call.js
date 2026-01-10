function setUserName(username){
    // Complex DB call
    this.username = username
}

function creatUser(username,email,password){
    setUserName.call(this,username)
    this.email = email
    this.password = password

}

const chai = new creatUser('Biaksh', 'bik@gmail.com','123')
console.log(chai);
