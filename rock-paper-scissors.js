let compChoice = ['rock','paper','scissors'];
function computerPlay () {
    let x = compChoice[Math.floor(Math.random()* compChoice.length)];
    return x
}


let playerChoice = prompt('what is your move?')

let result;

function playRound (playerSelection, computerSelection) {

    let compChoice =  computerPlay()

    if (compChoice == 'rock' && playerChoice.toLowerCase() == 'rock'){
        result ='Its a tie!';
    } else if (compChoice == 'rock' && playerChoice.toLowerCase() == 'paper'){
        result ='you win!';
    } else if (compChoice == 'rock' && playerChoice.toLowerCase() == 'scissors'){ 
        result ='you lost!'; 
    } else if (compChoice == 'paper' && playerChoice.toLowerCase() == 'rock') {
        result = 'you lost!';
    } else if (compChoice == 'paper' && playerChoice.toLowerCase() == 'scissors') {
        result = 'you win!';
    } else if (compChoice == 'paper' && playerChoice.toLowerCase() == 'paper'){
        result ='Its a tie!';
    } else if (compChoice == 'scissors' && playerChoice.toLowerCase() == 'rock') {
        result = 'you win!';
    } else if (compChoice == 'scissors' && playerChoice.toLowerCase() ==  'paper') {
        result = 'you lost!';
    } else if (compChoice == 'scissors' && playerChoice.toLowerCase() == 'scissors'){
        result ='Its a tie!';
    } else {
        result = 'woops something went wrong';
    }
    return result;
}

console.log(playRound(playerChoice, compChoice))
console.log (computerPlay())
