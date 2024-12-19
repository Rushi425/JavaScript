class user{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    passwordEncrypt(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user1 = new user("Rushi", "rushi@gmail.com", 123)
console.log(user1.passwordEncrypt());
console.log(user1.changeUsername());


//behind the scene

// function user(username, email, password){
//     this.username = username
//     this.email = email
//     this.password = password
// }
// user.prototype.changeUsername = function(){
//     return `${this.username.toUpperCase()}`
// }
// user.prototype.passwordEncrypt = function(){
//     return `${this.password}abc`;
// }
// const user1 = new user("Rushi", "rushi@gmail.com", 123)
//  console.log(user1.passwordEncrypt());
// console.log(user1.changeUsername());