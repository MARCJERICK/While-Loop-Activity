// Importing the prompt-sync
const ps = require("prompt-sync");
const prompt = ps();

// Generate a random number between 1 and 10
const Number = Math.floor(Math.random() * 10) + 1;
// guess to 0
let guess = 0;
// Loop until the user's guess matches the Number
while (guess !== Number) {
    // Prompt the user for input and convert it to a number
    guess = parseInt(prompt("Guess a number between 1 to 10: "), 10);

    // Check if the guess is higher or lower than the number
    if (guess > Number) {
        console.log("Too high!");
    }else if (guess < Number) {
        console.log("Too low!");
    }
    //log the guess if it is correct
    else {
        console.log("Correct!");
    }
}
