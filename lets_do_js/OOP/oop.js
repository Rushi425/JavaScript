//object literals
// const user = {
//     username : "Rushi",
//     loggedIn : true,

//     getUserDetails: function(){
//         console.log("Got user details from DB");
//     }
// };

// console.log(user.username);
// user.getUserDetails();
// console.log(user.getUserDetails());



function User(username, logginCount, loggedIn){
    this.username = username;
    this.logginCount = logginCount;
    this.loggedIn = loggedIn;

    return this;
}

// let user1 = User("Rushi", 5, true)
// let user2 = User("Om", 6, true)
// console.log(user1); // this will overwrite the values of user 2 
// //when we print user1 we get user 2, to avoid this use new keyword

// let user1 = new User("Rushi", 5, true);
// let user2 = new User("Om", 6, true);
// console.log(user1);
// console.log(user2);




