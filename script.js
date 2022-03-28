let computerSelection = computerPlay();
// const computerSelection = "paper";

let playerScore = 0;
let computerScore = 0;


let rockButton = document.getElementById("rock");

let paperButton = document.getElementById("paper");

let scissorsButton = document.getElementById("scissors");

const display = document.getElementById("display");

function computerPlay() {
    a = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random() * 3);
    return a[i];
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "draw";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "rock") {
        return "loss";
    }
    else {
        return "win";
    }

}

rockButton.addEventListener("click", () => { game("rock"); });
paperButton.addEventListener("click", () => { game("paper"); });
scissorsButton.addEventListener("click", () => { game("scissors"); });


function game(playerSelection) {
    while (playerScore || computerScore > 5) {
        if (playRound(playerSelection, computerSelection) === "win") {
            playerScore++;
            display.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            display.textContent = "Score - You: " + playerScore + " Computer: " + computerScore;
        }
        else if (playRound(playerSelection, computerSelection) === "loss") {
            computerScore++;
            display.textContent = "You lose! " + playerSelection + " loses to " + computerSelection;
            display.textContent = "Score - You: " + playerScore + " Computer: " + computerScore;
        }
        else {
            display.textContent = "It's a Draw! Both chose " + playerSelection;
            display.textContent = "Score - You: " + playerScore + " Computer: " + computerScore;
        }

        playerSelection = prompt("Enter Rock, Paper or Scissors");
        computerSelection = computerPlay();
    }

    if (playerScore > computerScore) {
        display.textContent = "Congrats you win!";
    }
    else if (playerScore < computerScore) {
        display.textContent = "Computer Wins, better luck next time";
    }
    else {
        display.textContent = "It's a Draw! Nobody wins";
    }
}

game();

/*

User clicks button
depending on button clicked, winner is calculated
score is changed and displayed
if any score = 5 end game
else generate new computerSelection
player clicks button again
outcome is determined
score updated
...

*/
