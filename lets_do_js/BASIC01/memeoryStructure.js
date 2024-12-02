//Stack, primitive memeory
let myName = "Rushikesh"

let anotherName = myName
anotherName = "Harshu"

console.log(myName);
console.log(anotherName);
//it shares a copy doesnt change the original value

//Heap, non primitive memeory
let user1 ={
    name: "Rushikesh",
    gmail: "rushi.com"
}
let user2 = user1
user2.name = "Harshu"

console.log(user1);
console.log(user2);
//it shares a reference and changes the original value