// const playerSelection = prompt("Enter Rock, Paper or Scissors");
// const computerSelection = computerPlay();

const playerSelection = "scissors";
const computerSelection = "paper";

function computerPlay(){
    a = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random() * 3);
    return a[i];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection === "rock" ){
        return "You lose! " + playerSelection + " loses to " + computerSelection;
    }
    else {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
}

console.log(playRound(playerSelection, computerSelection))

/*
Console asks you for rock paper or scissors input

throw wrong input message when not one of those 3

compare playerInput to computers randomly generated play

if rock vs paper -> rock wins etc.

if(playerSelection === "rock" && computerSelection === "paper"){
    return "You lose! ${playerSelection} loses to $(computerSelection}"
}

*/
