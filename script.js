const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const playerResult = document.createElement('p');
const computerResult = document.createElement('p');
const playerChoice = document.querySelectorAll('.choice');
const playerScoreboard = document.querySelector('#playerScore');
const comptuerScoreboard = document.querySelector('#computerScore');
const playerSpan = document.createElement('span');
const computerSpan = document.createElement('span');
const message = document.querySelector('#game-message');
const messageContent = document.createElement('p');
let playerScore = 0;
let computerScore = 0;

playerSpan.textContent = playerScore;
playerScoreboard.appendChild(playerSpan);
computerSpan.textContent = computerScore;
comptuerScoreboard.appendChild(computerSpan);

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
        messageContent.textContent = `It's a tie!`;
        message.appendChild(messageContent);
    } else if (player === "Rock" && computer === "Scissors" ||
               player === "Scissors" && computer === "Paper" ||
               player === "Paper" && computer === "Rock") {
        playerScore += 1;
        messageContent.textContent = `You win! ${player} beats ${computer}`;
        message.appendChild(messageContent);
    } else if (player === "Rock" && computer === "Paper" ||
               player === "Scissors" && computer === "Rock" ||
               player === "Paper" && computer === "Scissors") {
        computerScore += 1;
        messageContent.textContent = `You lose! ${computer} beats ${player}`;
        message.appendChild(messageContent);
    }
}

function game() {
    /*for (i = 1; i <= 5; i++) {
        let playerSelection = prompt('Choose rock, paper, or scissors');
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection) + `. Round ${i} complete`);
    }*/

    reset();

        if (playerScore === 5) {
            alert(`You beat the computer!!!`);
        } else if (computerScore === 5) {
            alert(`The computer beat you!!!`);
        }

    console.log(`Final: Player - ${playerScore}, Computer - ${computerScore}`);
}

function reset() {
    playerDisplay.removeChild(playerResult);
    computerDisplay.removeChild(computerResult);
    message.removeChild(messageContent);

    playerScore = 0;
    computerScore = 0;
    playerSpan.textContent = playerScore;
    playerScoreboard.appendChild(playerSpan);
    computerSpan.textContent = computerScore;
    comptuerScoreboard.appendChild(computerSpan);
}

playerChoice.forEach(choice => choice.addEventListener('click', function (e) {
    playRound(e.composedPath()[0].value, computerPlay());

    playerSpan.textContent = playerScore;
    playerScoreboard.appendChild(playerSpan);
    computerSpan.textContent = computerScore;
    comptuerScoreboard.appendChild(computerSpan);

    if (playerScore === 5) {
        alert(`You beat the computer!!!`);
    } else if (computerScore === 5) {
        alert(`The computer beat you!!!`);
    }
}));

