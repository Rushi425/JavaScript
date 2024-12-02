/*
const obj = {
    name: 'John',
    age: 30,
    "is": "yes"

}
console.log(obj.name);
console.log(obj.age);
console.log(obj["name"]);
console.log(obj.is);

*/
/*
const sys = Symbol("Rushi")
const item ={
    [sys]:"Rushi",
    name: 'John',
    age: 30
}
console.log(item);
console.log( typeof item[sys])
item.name = "Harshu"
console.log(item.name)
Object.freeze(item)
item.name = "Ruhsi"
console.log(item.name);
*/
/*
const item ={
    sys:"Rushi",
    name: 'John',
    age: 30
}
item.greeting = function(){
    console.log("Hello")
}
item.greetingTWo = function(){
    console.log(`Hello ,${this.name}`)
}
console.log(item.greetingTWo());
// item.greeting()
console.log(item.greeting())
*/

const item ={
    sys:"Rushi",
    name: 'John',
    age: 30,
    Hello :{
        name:"Rushi",
        age : 23
    }
}

console.log(item.Hello.name);

