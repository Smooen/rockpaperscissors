console.log("Hello World");

function computerPlay(){
    a = ["rock", "paper", "scissors"];
    i = Math.floor(Math.random() * 3);
    return a[i];
}

console.log(computerPlay());

/*
Console asks you for rock paper or scissors input

throw wrong input message when not one of those 3

compare playerInput to computers randomly generated play

if rock vs paper -> rock wins etc.


*/
