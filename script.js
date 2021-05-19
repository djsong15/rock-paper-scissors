function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors']
    ,   comChoice = choices[Math.floor(Math.random() * choices.length)];

    console.log('The computer chose ' + comChoice);
}