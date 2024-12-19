class user{
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log('User Logged');   
    }
}

class teacher extends user{
    constructor(username, email, password){
        super(username)  // to extend the property of parent class
        this.email = email
        this.password = password
    }
    teacherPrint(){
        console.log(`teacher name is ${this.username}.`);
    }
}

const teacher1 = new teacher("Rushi", "rushi@gmail.com", 123)
teacher1.teacherPrint()