let compChoice = ['rock','paper','scissors'];
function computerPlay () {
    let x = compChoice[Math.floor(Math.random()* compChoice.length)];
    return x
}




let result;
let playerChoice = ('')

function playRound (playerSelection, computerSelection) {

    let compChoice =  computerPlay()
    
    let playerChoice = prompt('what is your move?')
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
    alert(result)
    return result;
}
let score = 0
let cscore = 0
function game() {
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }
    playRound(compChoice, playerChoice.toLowerCase);
    if (result == 'you win!') {
        score++;
    } else if (result == 'you lost!'){
        cscore++;
    } else {
        cscore + 0;
        score + 0;
    }

   
   alert('the computer won '+ cscore + ' points and you won '+ score +' points')
   if (cscore > score) {
       alert ('You lost!');
   } else if (cscore < score) {
       alert('You won!');
   } else {
       alert('It is a tie!');
   }
    return cscore;
    
}
game()

