/*
const user ={
    user:"Rushi",
    price:500,

    welcomeMessage : function(){
        console.log(`${this.user} Welcome`)
        console.log(this);
        
    }
}
user.welcomeMessage()
user.user = "Hashu"
user.welcomeMessage()

console.log(this);
*/




function one(){
    user :"Rushi"
    console.log(this.user);
}
// one();          //undefined

const two = () =>{
    user :"Rushi"
    console.log(this.user);
}
// two();          //undefined


// const addTwo = (n1, n2) =>{
    // return n1+n2;
// }
// console.log(addTwo(5, 7)); //12

//another technique
// const addTwo = (n1, n2) =>  n1+n2; //no need of return
const addTwo = (n1, n2) =>  (n1+n2); //also , if you use bracket no need of return 
//if you use curly bracket use of return is compulsary




