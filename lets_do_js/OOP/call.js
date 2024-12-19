//call
function setUserName(username){
    this.username = username;
    console.log(1);
    
}

function createUser(username, gmail, pass){
    setUserName.call(this,username)
    this.gmail = gmail
    this.pass = pass
}
const chai = new createUser("Rushi", "rushi@gmail.com", 123);
console.log(chai);

