//let playerSelection = prompt("Enter Rock, Paper or Scissors");
let computerSelection = computerPlay();
// const computerSelection = "paper";

let rockButton = document.getElementById("rock");
rockButton.addEventListener("click", function(){ display.textContent = playRound("rock", computerSelection); });

let paperButton = document.getElementById("paper");
paperButton.addEventListener("click", function(){ display.textContent = playRound("paper", computerSelection); });

let scissorsButton = document.getElementById("scissors");
scissorsButton.addEventListener("click", function(){ display.textContent = playRound("scissors", computerSelection); });

function computerPlay(){
    a = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random() * 3);
    return a[i];
}

function playRound(playerSelection, computerSelection) {

    if(playerSelection === computerSelection){
        return "draw";
    }
    else if(playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || 
    playerSelection === "scissors" && computerSelection === "rock" ){
        return "loss";
    }
    else {
        return "win";
    }

}

const display = document.getElementById("display");


/*
function game(){
    let playerScore = 0;
    let computerScore = 0;

    for(let i = 0; i < 5; i++){
        playRound(playerSelection, computerSelection);

        if(playRound(playerSelection, computerSelection) === "win"){
            playerScore++;
            console.log("You win! " + playerSelection + " beats " + computerSelection);
            console.log("Score - You: " + playerScore + " Computer: " + computerScore)
        }
        else if(playRound(playerSelection, computerSelection) === "loss"){
            computerScore++;
            console.log("You lose! " + playerSelection + " loses to " + computerSelection);
            console.log("Score - You: " + playerScore + " Computer: " + computerScore)
        }
        else{
            console.log("It's a Draw! Both chose " + playerSelection);
            console.log("Score - You: " + playerScore + " Computer: " + computerScore)
        }

        playerSelection = prompt("Enter Rock, Paper or Scissors");
        computerSelection = computerPlay();
    }

    if(playerScore > computerScore){
        console.log("Congrats you win!");
    }
    else if(playerScore < computerScore){
        console.log("Computer Wins, better luck next time");
    }
    else{
        console.log("It's a Draw! Nobody wins");
    }
}
*/

/*

Works, but needs input validation
Could also make it a game to a specific number of wins

make it a 5 round game

ask for input
generate computerSelection
decide win or lose
increment score based on winner
show scores
do it again as long as i < 5
generate NEW user input and computerSelection
...

*/
