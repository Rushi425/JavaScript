// async function getUserInfo(){
//     try{
//         const response = await fetch('https://api.github.com/users/Rushi425')
//         const data = await response.json();
//         console.log(data);
//         console.log('done');    
//     }
//     catch(error){
//         console.log(error);
//     }
// };

// getUserInfo()



//++++++also using this and catch++
// fetch('https://api.github.com/users/Rushi425').then((response) =>{
//     // console.log(response);
//     return response.json()
// }).then((jsonFile) =>{
//     console.log(jsonFile);
// }).catch((error) =>{
//     console.log(error);
// })