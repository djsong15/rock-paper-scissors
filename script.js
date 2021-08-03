const playerDisplay = document.querySelector('#player');
const computerDisplay = document.querySelector('#computer');
const playerChoice = document.querySelectorAll('.choice');
const playerScoreboard = document.querySelector('#playerScore');
const computerScoreboard = document.querySelector('#computerScore');
const score = document.querySelectorAll('.score');
const message = document.querySelector('#game-message');
const div = document.createElement('div');
const appContainer = document.querySelector('#app');
let playerScore = 0;
let computerScore = 0;

playerScoreboard.textContent = playerScore;
computerScoreboard.textContent = computerScore;

function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(player, computer) {
    playerDisplay.textContent = player;
    computerDisplay.textContent = computer;

    if (player === computer) {
        message.textContent = `It's a tie!`;
    } else if (player === "Rock" && computer === "Scissors" ||
               player === "Scissors" && computer === "Paper" ||
               player === "Paper" && computer === "Rock") {
        playerScore += 1;
        message.textContent = `You win! ${player} beats ${computer}`;
    } else if (player === "Rock" && computer === "Paper" ||
               player === "Scissors" && computer === "Rock" ||
               player === "Paper" && computer === "Scissors") {
        computerScore += 1;
        message.textContent = `You lose! ${computer} beats ${player}`;
    }

    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;

    if (playerScoreboard.textContent == 5 && playerScore > computerScore) {
        div.textContent = `You beat the computer!!!`;
        div.style.cssText = 'color: blue; font-weight: bold:; font-size: 25px; text-align: center';
        appContainer.appendChild(div);
    } else if (computerScoreboard.textContent == 5 && computerScore > playerScore) {
        div.textContent = `The computer beat you!!!`;
        div.style.cssText = 'color: red; font-weight: bold:; font-size: 25px; text-align: center';
        appContainer.appendChild(div);
    }
};

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

playerChoice.forEach(choice => choice.addEventListener('click', function (e) {
    playRound(e.composedPath()[0].value, computerPlay());
}));

const resetBtn = document.querySelector('#reset');
resetBtn.addEventListener('click', () => {
    playerDisplay.textContent = 'n/a';
    computerDisplay.textContent = 'n/a';
    message.textContent = 'Select a button above';

    playerScore = 0;
    computerScore = 0;
    playerScoreboard.textContent = playerScore;
    computerScoreboard.textContent = computerScore;

    appContainer.removeChild(div);
});