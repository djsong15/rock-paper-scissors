function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    ,   comChoice = choices[Math.floor(Math.random() * choices.length)];

    //console.log('The computer chose ' + comChoice);
    return comChoice;
}

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
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else if (player === "ROCK" && computer === "PAPER"
            || player === "SCISSORS" && computer === "ROCK"
            || player === "PAPER" && computer === "SCISSORS") {
        return (`You lose! ${computerSelection} beats ${playerSelection}`);
    }
}


const playerSelection = "ROCK";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));
