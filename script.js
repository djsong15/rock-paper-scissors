const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const playerChoice = document.querySelectorAll('.choice');
const playerScoreboard = document.querySelector('#playerScore');
const computerScoreboard = document.querySelector('#computerScore');
const score = document.querySelectorAll('.score');
const message = document.querySelector('#game-message');
let playerScore = 0;
let computerScore = 0;

playerScoreboard.innerHTML = playerScore;
computerScoreboard.innerHTML = computerScore;

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
    playerDisplay.innerHTML = player;
    computerDisplay.innerHTML = computer;

    if (player === computer) {
        message.innerHTML = `It's a tie!`;
    } else if (player === "Rock" && computer === "Scissors" ||
               player === "Scissors" && computer === "Paper" ||
               player === "Paper" && computer === "Rock") {
        playerScore += 1;
        message.innerHTML = `You win! ${player} beats ${computer}`;;
    } else if (player === "Rock" && computer === "Paper" ||
               player === "Scissors" && computer === "Rock" ||
               player === "Paper" && computer === "Scissors") {
        computerScore += 1;
        message.innerHTML = `You lose! ${computer} beats ${player}`;;
    }

    if (playerScore == 5 && playerScore > computerScore) {
        alert(`You beat the computer!!!`);
    } else if (computerScore == 5 && computerScore > playerScore) {
        alert(`The computer beat you!!!`);
    }
}

/*function game() {
    for (i = 1; i <= 5; i++) {
        let playerSelection = prompt('Choose rock, paper, or scissors');
        let computerSelection = computerPlay();
        console.log(playRound(playerSelection, computerSelection) + `. Round ${i} complete`);
    }

    //reset();
    console.log(playerSpan.innerHTML);



        if (playerScore === 5) {
            alert(`You beat the computer!!!`);
        } else if (computerScore === 5) {
            alert(`The computer beat you!!!`);
        }

    console.log(`Final: Player - ${playerScore}, Computer - ${computerScore}`);
}*/

function reset() {
    playerDisplay.innerHTML = '';
    computerDisplay.innerHTML = '';
    message.innerHTML = '';

    playerScore = 0;
    computerScore = 0;
    playerScoreboard.innerHTML = playerScore;
    computerScoreboard.innerHTML = computerScore;
}

playerChoice.forEach(choice => choice.addEventListener('click', function (e) {
    playRound(e.composedPath()[0].value, computerPlay());

    playerScoreboard.innerHTML = playerScore;
    computerScoreboard.innerHTML = computerScore;


}));

score.forEach(value => value.addEventListener(''))