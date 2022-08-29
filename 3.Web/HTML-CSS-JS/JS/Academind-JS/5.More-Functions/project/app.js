const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";

const startGameBtn = document.getElementById("start-game-btn");
let gameStarted = false;

function getPlayerChoice() {
  const selection = prompt("Rock, Paper or Scissors?", "").toUpperCase();

  if (selection != ROCK && selection != PAPER && selection != SCISSORS) {
    alert("Invalid choice! Default is ROCK.");
    return ROCK;
  } else {
    return selection;
  }
}

startGameBtn.addEventListener("click", function () {
  if (gameStarted) {
    return;
  }
  console.log("Game is starting...");
  gameStarted = true;

  const playerChoice = getPlayerChoice();
  console.log(playerChoice);
});
