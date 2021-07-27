function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    ,   comChoice = choices[Math.floor(Math.random() * choices.length)];

    //console.log('The computer chose ' + comChoice);
    return comChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toUpperCase()
    ,   computer = computerSelection.toUpperCase();

    console.log(`The player chose ${player}`);
    console.log(`The computer chose ${computer}`);

    if (player === computer) {
        return ("It's a tie!");
    } else if (player === "ROCK" && computer === "SCISSORS"
            || player === "SCISSORS" && computer === "PAPER"
            || player === "PAPER" && computer === "ROCK") {
        playerScore += 1;
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (player === "ROCK" && computer === "PAPER"
            || player === "SCISSORS" && computer === "ROCK"
            || player === "PAPER" && computer === "SCISSORS") {
        computerScore += 1;
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}

function game() {
    for (i = 1; i <= 5; i++) {
        let playerSelection = prompt('Choose rock, paper, or scissors');
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection) + `. Round ${i} complete`);
    }

    console.log(`Final: Player - ${playerScore}, Computer - ${computerScore}`)

    if (playerScore > computerScore) {
        console.log(`You beat the computer!!!`);
    } else if (playerScore < computerScore) {
        console.log(`The computer beat you!!!`);
    } else {
        console.log(`You tied with a computer?!`);
    }
}

const playerChoice = document.querySelector('#game-buttons');
playerChoice.addEventListener('click', (e) => console.log(e));

