"use strict";

let computerScore = document.querySelector(".computer-score");
let playerScore = document.querySelector(".human-score");
let outcome = document.querySelector(".outcome");
let rockBtn = document.querySelector(".rock");
let paperBtn = document.querySelector(".paper");
let scissorsBtn = document.querySelector(".scissors");
let playerChoiceImg = document.querySelector(".human-choice-img");
let computerChoiceImg = document.querySelector(".computer-choice-img");

let computerChoice;
let playerChoice;
let cScore = 0;
let pScore = 0;

function computerScoresPoint() {
  cScore++;
  computerScore.textContent = cScore;
}

function playerScoresPoint() {
  pScore++;
  playerScore.textContent = pScore;
}

function getComputerChoice() {
  computerChoice = Math.floor(Math.random() * 3) + 1;
  if (computerChoice === 1) {
    computerChoice = "rock";
    computerChoiceImg.src = "./img/rock.svg";
    computerChoiceImg.alt = "rock";
  } else if (computerChoice === 2) {
    computerChoice = "paper";
    computerChoiceImg.src = "./img/paper.svg";
    computerChoiceImg.alt = "paper";
  } else {
    computerChoice = "scissors";
    computerChoiceImg.src = "./img/scissors.svg";
    computerChoiceImg.alt = "scissors";
  }
  return computerChoice;
}

function playRound(computerChoice, playerChoice) {
  outcome.classList.remove("hidden");
  if (computerChoice === playerChoice) {
    outcome.textContent = "It's a tie";
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerScoresPoint();
    outcome.textContent = "You lose! Scissors beat paper";
  } else if (computerChoice === "rock" && playerChoice === "scissors") {
    computerScoresPoint();
    outcome.textContent = "You lose! Rock beats scissors";
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerScoresPoint();
    outcome.textContent = "You lose! Paper beats rock";
  } else if (computerChoice === "paper" && playerChoice === "scissors") {
    playerScoresPoint();
    outcome.textContent = "You win! Scissors beats paper";
  } else if (computerChoice === "scissors" && playerChoice === "rock") {
    playerScoresPoint();
    outcome.textContent = "You win! Rock beats scissors";
  } else if (computerChoice === "rock" && playerChoice === "paper") {
    playerScoresPoint();
    outcome.textContent = "You win! Paper beats rock";
  }
}

rockBtn.addEventListener("click", function () {
  playerChoiceImg.src = "./img/rock.svg";
  playerChoiceImg.alt = "rock";
  playerChoice = "rock";
  getComputerChoice();
  return playRound(computerChoice, playerChoice);
});

paperBtn.addEventListener("click", function () {
  playerChoiceImg.src = "./img/paper.svg";
  playerChoiceImg.alt = "paper";
  playerChoice = "paper";
  getComputerChoice();
  return playRound(computerChoice, playerChoice);
});

scissorsBtn.addEventListener("click", function () {
  playerChoiceImg.src = "./img/scissors.svg";
  playerChoiceImg.alt = "scissors";
  playerChoice = "scissors";
  getComputerChoice();
  return playRound(computerChoice, playerChoice);
});
