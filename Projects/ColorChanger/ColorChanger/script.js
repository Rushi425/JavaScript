// const buttons = document.querySelectorAll('.button');
// // console.log(button);
// const body = document.querySelector('body');
// // console.log(body);

// buttons.forEach(function (button){
//     // console.log(button);
//     button.addEventListener('click', function(e){
//         console.log(e);
//         console.log(e.target);
        
//         if(e.target.id === 'grey'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'white'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'blue'){
//             body.style.backgroundColor = e.target.id;
//         }
//         if(e.target.id === 'yellow'){
//             body.style.backgroundColor = e.target.id;
//         }
//     });
// });

const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
    button.addEventListener('click', function(e) {
        const color = e.target.id; // Get the id of the clicked button
        const validColors = ['grey', 'white', 'blue', 'yellow']; // Array of valid colors

        // Check if the clicked button's id is a valid color
        if (validColors.includes(color)) {
            body.style.backgroundColor = color; // Set the background color
        }
    });
});