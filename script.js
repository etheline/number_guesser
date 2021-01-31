let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

/* Called at the start of each round to generate the new secret target number between 0-9 */
const generateTarget = () => Math.floor(Math.random() * 10);


/* Check if user input is between 0-9 and a whole number. If not, alert user that their number is out of range */
const validateUserGuess = userGuess => 
    userGuess >= 0 && userGuess <= 9 && Number.isInteger(userGuess) ? true : alert('The number you inputted is out of range');

// Calculate absolute distance between a guess and target number
const getAbsoluteDistance = (guess, targetNumber) => 
  Math.abs(guess - targetNumber);

/* Called once each round to determine whether userGuess or computerGuess is closest to targetNumber. Returns true if human wins or ties and false if computer wins. */
function compareGuesses(userGuess, computerGuess, targetNumber) {
    userGuess = getAbsoluteDistance(userGuess, targetNumber); 
    computerGuess = getAbsoluteDistance(computerGuess, targetNumber);
    return userGuess <= computerGuess
}

// Takes in a string representing the winner and increments winner's score after each round. Doesn't return anything.
function updateScore(winner) {
    winner === 'computer' ? computerScore++ : humanScore++;
}

// Updates the round number after a round finishes 
function advanceRound() {
    currentRoundNumber++;
}

// TESTING FUNCTIONS
// Setting up target number and guesses
let targetNumber = generateTarget();
console.log(`Target: ${targetNumber}`);
let userGuess = 2;
console.log(`Human guess: ${userGuess}`);
let computerGuess = Math.floor(Math.random() * 10);
console.log(`Computer guess: ${computerGuess}`);

// Determine who won 
let finalWinner = compareGuesses(userGuess, computerGuess, targetNumber) ? 'human' : 'computer';
console.log(`Who won: ${finalWinner}`);

// Update scores
updateScore(finalWinner);
console.log(`Updated human score: ${humanScore}, Computer score: ${computerScore}`)

// Update round number
advanceRound();
console.log(`Next round number: ${currentRoundNumber}`);
