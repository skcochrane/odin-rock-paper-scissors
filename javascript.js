"use strict";

// Create function for computer to randomly pick rock, paper, or scissors -- random number between 1&3, each number assigned to a choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3) + 1;

  if (computerChoice === 1) {
    computerChoice = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  //   console.log(computerChoice);
  return computerChoice;
}

// Create function for a single round of play -- takes two parameters (computerChoice, playerChoice), returns a string declaring the winner.
// let playerChoice = prompt("Make a choice: rock, paper, or scissors");
let computerScore = 0;
let playerScore = 0;

function playRound(computerChoice, playerChoice) {
  playerChoice = playerChoice.toLowerCase();
  if (computerChoice === playerChoice) {
    console.log("It's a tie");
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerScore++;
    console.log("You lose! Scissors beat paper");
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Rock beats scissors");
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScore++;
    console.log("You lose! Paper beats rock");
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    playerScore++;
    console.log("You win! Scissors beats paper");
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    playerScore++;
    console.log("You win! Rock beats scissors");
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    playerScore++;
    console.log("You win! Paper beats rock");
  }
}

// console.log(playRound(getComputerChoice(), playerChoice));

// Create function to play 5 rounds. Keep score. First player to 3 wins.

function game() {
  for (let i = 0; i < 5; i++) {
    playRound(
      getComputerChoice(),
      prompt("Make a choice: rock, paper, or scissors")
    );
    console.log(
      `Player Score: ${playerScore}, Computer Score: ${computerScore}`
    );
  }
  if (playerScore > computerScore) {
    return "Congratulations, you win!";
  } else if (computerScore > playerScore) {
    return "I'm sorry, computer wins.";
  } else {
    return "It's a tie.";
  }
}

console.log(game());
