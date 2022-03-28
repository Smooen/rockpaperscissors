let computerSelection = computerPlay();
// const computerSelection = "paper";

let playerScore = 0;
let computerScore = 0;


let rockButton = document.getElementById("rock");

let paperButton = document.getElementById("paper");

let scissorsButton = document.getElementById("scissors");

const display = document.getElementById("display");
const score = document.getElementById("score");

function computerPlay() {
    a = ["Rock", "Paper", "Scissors"];
    i = Math.floor(Math.random() * 3);
    return a[i];
}


function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "draw";
    }
    else if (playerSelection === "Rock" && computerSelection === "Paper" || playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
        return "loss";
    }
    else {
        return "win";
    }

}

function gameOver() {
    return playerScore == 5 || computerScore == 5;
}

function winner() {
    if (playerScore > computerScore) {
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        display.textContent = "Congrats, you win!";
    }
    else {
        score.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
        display.textContent = "You lost!";
    }
}

rockButton.addEventListener("click", () => { game("Rock"); });
paperButton.addEventListener("click", () => { game("Paper"); });
scissorsButton.addEventListener("click", () => { game("Scissors"); });


function game(playerSelection) {
    if (gameOver() === true) {
        winner();
        return;
    }
    if (playRound(playerSelection, computerSelection) === "win") {
        playerScore++;
        if (gameOver() === true) {
            winner();
            return;
        }
        else {
            display.textContent = "You win! " + playerSelection + " beats " + computerSelection;
            score.textContent = "Score - You: " + playerScore + " Computer: " + computerScore;
        }
    }
    else if (playRound(playerSelection, computerSelection) === "loss") {
        computerScore++;
        if (gameOver() === true) {
            winner();
            return;
        }
        else {
            display.textContent = "You lose! " + playerSelection + " loses to " + computerSelection;
            score.textContent = "Score - You: " + playerScore + " Computer: " + computerScore;
        }
    }
    else {
        if (gameOver() === true) {
            winner();
            return;
        }
        else {
            display.textContent = "It's a Draw! Both chose " + playerSelection;
            score.textContent = "Score - You: " + playerScore + " Computer: " + computerScore;
        }
    }
    computerSelection = computerPlay();
}

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
