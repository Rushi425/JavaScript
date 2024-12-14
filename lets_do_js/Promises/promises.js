// const promise = new Promise(function(resolve, reject){
//     // do any asynchronus task like DB calls, cryptography, networking
//     setTimeout(function(){
//         console.log("Async task is completed");
//     },1000)
// })
// // promise consuming
// promise.then(function(){
//     console.log("Promise consumed");
    
// })
//+++here we can't connected consuming(this) to resolve so "Promise consumed" is not printing
//to connect use "resolve()"

//+++++++++++++++++
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//     },1000);
//     resolve(); // here we are connecting consuming(this) to resolve
// })
// promise.then(function(){
//     console.log("Promise consumed");  // here we are getting first lof of this after 1 sec upper log is logged
// })
//+++++++++++++++

//we can also do this like
// new Promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },5000) 
// }).then(function(){
//     console.log("Promise consumed");
// })


//++++++++++Parameters(value) pass in resolve
// const promise = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         resolve({name: "Rushi",email:"rushi.@gmail.com"})
//     })
// },1000)
// promise.then(function(data){
//     console.log(data);
// })


//+++++++Chaining and reject.++
// const promise = new Promise(function(resolve, reject){
//     let error = false;
//     if(error){
//         resolve({username: "Rushi",email:"rushi@gmail.com"});
//     }
//     else{
//         reject("ERROR : Something went wrong");
//     }
// })
// //the promise returns something that will be catched using "promise.then"
// // promise.then().catch() // catch for reject
// promise.then((user) =>{
//     console.log(user);
//     return user.username;
// }).then((username) =>{ //chaining of this
//     console.log(username);
// }).catch(function(error){
//     console.log(error);    
// }).finally(() =>{ //Always executed finally
//     console.log("done");
    
// })

//++++++++++++++++++++++++++++++






// //we can also consume promises using async wait
// const promise = new Promise(function(resolve, reject){
//     let error = true;
//     if(!error){
//     resolve({username: "Rushi",email:"rushi@gmail.com"});
//     }
//     else{
//          reject("ERROR : Something went wrong");
//     }
// });

// // async function consumePromise(){
// //     const response = await promise;
// //     console.log(response);
// // }
// // consumePromise(); // this code if a else block is exexuted it gives error(means erroris their then not run code:error)
// //if only this (true) then code runs

// //to handle this
// async function consumePromise(){
//     try{
//         const response = await promise;
//         console.log(response);
//     }
//     catch(error){
//         console.log(error);
//     }   
// }
// consumePromise();
// //+++++++++++++++++++++