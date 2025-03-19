// Select the DOM elements
const submitButton = document.getElementById('submitGuess');
const guessInput = document.getElementById('guess');
const feedbackElement = document.getElementById('feedback');
const attemptsElement = document.getElementById('attempts');
const restartButton = document.getElementById('restartButton');

// Variables for game logic
let randomNumber = Math.floor(Math.random() * 100) + 1; // Random number between 1 and 100
let attempts = 0;

// Function to handle submitting the guess
function submitGuess() {
    const userGuess = parseInt(guessInput.value);

    // Check if the guess is a number and within the valid range
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        feedbackElement.textContent = "Please enter a number between 1 and 100.";
        feedbackElement.style.color = "red";
        return;
    }

    attempts++;
    attemptsElement.textContent = attempts;

    // Provide feedback to the user
    if (userGuess === randomNumber) {
        feedbackElement.textContent = "Congratulations! You guessed the correct number!";
        feedbackElement.style.color = "green";
        restartButton.style.display = "block"; // Show the restart button
    } else if (userGuess < randomNumber) {
        feedbackElement.textContent = "Too low! Try again.";
        feedbackElement.style.color = "orange";
    } else {
        feedbackElement.textContent = "Too high! Try again.";
        feedbackElement.style.color = "orange";
    }

    guessInput.value = ''; // Clear the input field after each guess
}

// Function to restart the game
function restartGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    attemptsElement.textContent = attempts;
    feedbackElement.textContent = '';
    restartButton.style.display = "none";
}

// Event listeners
submitButton.addEventListener('click', submitGuess);
restartButton.addEventListener('click', restartGame);
