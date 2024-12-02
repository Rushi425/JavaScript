// let a = alert("Enter your age : ") 
// a = Number.parseInt(a) // converting string to number
// console.log(a) // output : NaN
const prompt = require('prompt-sync')();
let userInput = prompt("Enter your name: ");
console.log("Hello, " +userInput);
if(userInput > 18){
    console.log("You ")
}
else{
    console.log("You are not eligible to vote");
}