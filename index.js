// write the logic to get the computer choice for rock, paper, scissors

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

// write the logic to get human choice for rock, paper, scissors using a window prompt
const getUserChoice = () => {
    const userChoice = prompt('Enter your choice: rock, paper or scissors');
    if (userChoice === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
        return userChoice;
    } else {
        console.log('Invalid choice');
    }
}


// declare the players score variables
let userScore = 0;
let computerScore = 0;

// write the logic to determine the winner on a single round of rock, paper, scissors

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return 'It is a tie!';
    }
    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }
    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }
    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            return 'Computer wins!';
        } else {
            return 'You win!';
        }
    }
}

// Create a new function named playGame Move your playRound function and score variables so that they’re declared inside of the new playGame function Play 5 rounds by calling playRound 5 times


const playGame = () => {
    for (let i = 0; i < 5; i++) {
        const userChoice = getUserChoice();
        const computerChoice = getComputerChoice();
        console.log(`You chose: ${userChoice}`);
        console.log(`Computer chose: ${computerChoice}`);
        console.log(determineWinner(userChoice, computerChoice));
    }
}

playGame();



