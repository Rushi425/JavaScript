function addTwoNumbers(n1, n2){
    return n1 + n2;
}
let c = addTwoNumbers(5,5)
// console.log(c);

function loginUSerMessage(user){
    if(!user){
        return "Please enter your username"
        
    }
    return `Welcome ${ user } `
}

// console.log(loginUSerMessage("Rushi"));

function calculateCartPrice (...n1){
    let sum = 0;
    for(let i = 0; i < n1.length; i++){
        sum += n1[i];
    }
    return sum;
}
// console.log(calculateCartPrice(10,20,30,40,50));\

const user ={
    username :"Rushi",
    prices
     : 500
}
function handleUser(anyobject){
    // console.log(`username is ${anyobject.username} and price is ${anyobject.price}.`);
}
// console.log(handleUser(user));

const addTwo = function(num){
    return num + 2;
}
console.log(addTwo(5));


 