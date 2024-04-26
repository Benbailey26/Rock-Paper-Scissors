// create a new function named getComputerChoice() that returns 'rock', 'paper', or 'scissors' using Math.random().
function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}
// create a new function named getPlayerChoice() that prompts the user to enter 'rock', 'paper', or 'scissors' uses prompt() and returns the value entered.
function getPlayerChoice() {
    return prompt("Enter 'rock', 'paper', or 'scissors'").toLowerCase();
}

// create two new variables humanScore and computerScore in the global scope and set them to 0.
let humanScore = 0;
let computerScore = 0;

// create a new function named playRound() and define two parameters playerChoice and computerPlay increment the score of the winner and return a string that declares the winner of the round and a string that declares winner of the round.
function playRound(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        humanScore++;
        return `You win! ${playerChoice} beats ${computerChoice}`;
    }
    computerScore++;
    return `You lose! ${computerChoice} beats ${playerChoice}`;
}

 // create a new function named playGame() that uses the playRound() function to play a 5 round game that keeps score and reports a winner or loser at the end.
function playGame() {
    for (let i = 0; i < 5; i++) {
        const playerChoice = getPlayerChoice();
        const computerChoice = computerPlay();
        console.log(playRound(playerChoice, computerChoice));
    }
    if (humanScore > computerScore) {
        console.log('You win the game!');
    } else if (computerScore > humanScore) {
        console.log('You lose the game!');
    } else {
        console.log("It's a tie!");
    }
}


