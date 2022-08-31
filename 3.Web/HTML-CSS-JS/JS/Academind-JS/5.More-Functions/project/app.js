const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DRAW_RES = "DRAW";
const PLAYER_WIN = "PLAYER";
const COMP_WIN = "COMPUTER";

const startGameBtn = document.getElementById("start-game-btn");
let gameRunning = false;

function getPlayerChoice() {
  const selection = prompt("Rock, Paper or Scissors?", "").toUpperCase();

  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert("Invalid choice! Default is ROCK.");
    return ROCK;
  } else {
    return selection;
  }
}

function getComputerChoice() {
  const randomValue = Math.random();

  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
}

function determineWin(playerChoice, computerChoice) {
  if (computerChoice === playerChoice) {
    return DRAW_RES;
  } else if (
    (computerChoice === ROCK && playerChoice === PAPER) ||
    (computerChoice === PAPER && playerChoice === SCISSORS) ||
    (computerChoice === SCISSORS && playerChoice === ROCK)
  ) {
    return PLAYER_WIN;
  } else if (
    (playerChoice === ROCK && computerChoice === PAPER) ||
    (playerChoice === PAPER && computerChoice === SCISSORS) ||
    (playerChoice === SCISSORS && computerChoice === ROCK)
  ) {
    return COMP_WIN;
  }
}

startGameBtn.addEventListener("click", function () {
  if (gameRunning) {
    return;
  }
  gameRunning = true;
  console.log("Game is starting...");

  const playerChoice = getPlayerChoice();
  console.log(playerChoice);

  const computerChoice = getComputerChoice();
  console.log(computerChoice);

  const winner = determineWin(playerChoice, computerChoice);

  let msg = `You picked ${playerChoice}, computer picked ${computerChoice}, `;

  if (winner === DRAW_RES) {
    msg += "it's a DRAW!";
  } else if (winner === PLAYER_WIN) {
    msg += "YOU WON!";
  } else {
    msg += "COMPUTER WON!";
  }

  alert(msg);

  gameRunning = false;
});
