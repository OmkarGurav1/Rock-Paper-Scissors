const prompt = require('prompt-sync')();

console.log("Hello World");

let humanScore = 0;
let computerScore = 0;
let humanChoice;

function getHumanChoice(){
    humanChoice = prompt("Choose: Rock, Paper, or Scissors: ");
    if(humanChoice === null){
      return null;
    }
    return humanChoice;
}

function getComputerChoice(){
    const choices = ["rock","paper","scissors"];
    const randomIndex = Math.floor(Math.random()* choices.length);
    return choices[randomIndex];
}

function playGame(){
function playRound(humanChoice, computerChoice) {
    const human = humanChoice;
    const computer = computerChoice;
    console.log("determining winner - human choice: ", humanChoice, " computer choice: ", computerChoice);
        if (human === computer) {
            return "Tie";
        } else if (human === "rock" && computer === "scissors") {
            humanScore++;
            return human;
        } else if (human === "paper" && computer === "rock") {
            humanScore++;
            return human;
        } else if (human === "scissors" && computer === "paper") {
            humanScore++;
            return human;
        } else {
            computerScore++;
            return computer;
        }
    }
    for(let i = 0; i < 5; i++){
      playRound(getHumanChoice(), getComputerChoice());
      console.log(`\nPlayer score: ${humanScore}`);
      console.log(`Computer score: ${computerScore}`);
  }

  if(humanScore > computerScore){
      console.log("You WIN!");
  }else if(computerScore > humanScore){
      console.log("Computer WINS!");
  }else{
      console.log("DRAW!");
  }
}

playGame();
  