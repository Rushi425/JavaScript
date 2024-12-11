let randomNumber = parseInt(Math.random() * 100 + 1);
console.log(randomNumber);

const lowOrHi = document.querySelector(".lowOrHi");
const remaining = document.querySelector(".lastResult");
const guesseSlot = document.querySelector(".guesses");
const submit = document.querySelector("#subt");
const userInput = document.querySelector("#guessField");
const startOver = document.querySelector(".resultParas");

let prevGuess = []; // for storing the guesses in array
let numGuess = 1;   // for validating 10 chances

let playGame = true;

const p = document.createElement('p');

// Initialize remaining guesses display
remaining.innerHTML = `${11 - numGuess} `;

// For playing
if (playGame) {
    submit.addEventListener('click', function (e) {
        e.preventDefault();
        const guess = parseInt(userInput.value);
        console.log(guess);
        validateInput(guess);
    });
}

function validateInput(guess) {
    if (isNaN(guess)) {
        alert("Please enter a number");
    } else if (guess < 1) {
        alert("Please enter a number more than 1");
    } else if (guess > 100) {
        alert("Please enter a number less than 100");
    } else {
        prevGuess.push(guess);
        if (numGuess === 11) {
            displayGuess(guess);
            displayMessage(`Game over! Random number was ${randomNumber}`);
            endGame();
        } else {
            checkGuess(guess);
            displayGuess(guess);
        }
    }
}

function checkGuess(guess) {
    if (guess === randomNumber) {
        displayMessage(`Congratulations! You guessed the number ${guess} correctly!`);
        endGame();
    } else if (guess > randomNumber) {
        displayMessage('Number is too high');
    } else if (guess < randomNumber) {
        displayMessage('Number is too low');
    }
}

function displayMessage(mess) {
    lowOrHi.innerHTML = `<h2>${mess}</h2>`;
}

function displayGuess(guess) {
    userInput.value = '';
    guesseSlot.innerHTML += `${guess}, `;
    numGuess++;
    remaining.innerHTML = `${11 - numGuess} `;
}

function endGame() {
    userInput.value = '';
    userInput.setAttribute('disabled', '');
    p.classList.add('button');
    p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
    startOver.appendChild(p);
    playGame = false;
    newGame();
}

function newGame() {
    const newGameButton = document.querySelector('#newGame');
    newGameButton.addEventListener('click', function (e) {
        randomNumber = parseInt(Math.random() * 100 + 1);
        console.log(randomNumber);

        prevGuess = [];
        numGuess = 1;
        guesseSlot.innerHTML = '';
        remaining.innerHTML = `${11 - numGuess} `;
        userInput.removeAttribute('disabled');
        userInput.focus();
        startOver.removeChild(p);

        playGame = true;
    });
}
