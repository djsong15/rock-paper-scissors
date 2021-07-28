const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const scorePanel = document.querySelector
const playerResult = document.createElement('p');
const computerResult = document.createElement('p');
const playerChoice = document.querySelectorAll('.choice');
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
    playerResult.textContent = player;
    computerResult.textContent = computer;
    playerDisplay.appendChild(playerResult);
    computerDisplay.appendChild(computerResult);

    if (player === computer) {
        return ("It's a tie!");
    } else if (player === "Rock" && computer === "Scissors" ||
               player === "Scissors" && computer === "Paper" ||
               player === "Paper" && computer === "Rock") {
        playerScore += 1;
        return (`You win! ${player} beats ${computer}`);
    } else if (player === "Rock" && computer === "Paper" ||
               player === "Scissors" && computer === "Rock" ||
               player === "Paper" && computer === "Scissors") {
        computerScore += 1;
        return (`You lose! ${computer} beats ${player}`);
    }
}

function game() {
    /*for (i = 1; i <= 5; i++) {
        let playerSelection = prompt('Choose rock, paper, or scissors');
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection) + `. Round ${i} complete`);
    }*/

    console.log(`Final: Player - ${playerScore}, Computer - ${computerScore}`)

    if (playerScore > computerScore) {
        console.log(`You beat the computer!!!`);
    } else if (playerScore < computerScore) {
        console.log(`The computer beat you!!!`);
    } else {
        console.log(`You tied with a computer?!`);
    }
}

playerChoice.forEach(choice => choice.addEventListener('click', function (e) {
    playRound(e.composedPath()[0].value, computerPlay());
}));

