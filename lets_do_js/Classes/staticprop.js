class user {
    constructor(username){
        this.username = username
    }

    static logMe(){
        console.log(`${username}`);

    }
}
class teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
        
    }
}
const iphone = new teacher ('rushi', 'rushi@')
console.log(iphone.logMe());

