console.log("script.js connected!");

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 16;
const MONSTER_ATTACK_VALUE = 12;
const HEAL_VALUE = 15;

// Way of declaring enums in js since it doesn't have native support for enums. Supported in TS.
const typeofAttack = {
  normal: "normal",
  strong: "strong",
};

let bonus_life = 1;
let hasBonusLife = true;

const enteredLife = prompt(
  "Maximum life for you and the monster. Default is a 100."
);

let chosenMaxLife = parseInt(enteredLife);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) chosenMaxLife = 100;

let activeMonsterHealth = chosenMaxLife;
let activePlayerHealth = chosenMaxLife;

let playerWins = 0;
let monsterWins = 0;

function resetGame() {
  bonusLife.textContent = +bonus_life;

  activeMonsterHealth = chosenMaxLife;
  activePlayerHealth = chosenMaxLife;

  adjustHealthBars(chosenMaxLife);

  monsterHealthText.textContent = activeMonsterHealth;
  playerHealthText.textContent = activePlayerHealth;
}

// Initialize or Reset Game.
resetGame();

function checkWin() {
  if (activeMonsterHealth <= 0 && activePlayerHealth > 0) {
    alert("You've won!");
    playerWins += 1;
    setHealthText(monsterHealthText, 0);
  } else if (activePlayerHealth <= 0 && activeMonsterHealth > 0) {
    alert("You've lost!");
    monsterWins += 1;
    setHealthText(playerHealthText, 0);
  } else if (activeMonsterHealth <= 0 && activePlayerHealth <= 0) {
    alert("A Draw!");
    setHealthText(monsterHealthText, activeMonsterHealth);
    setHealthText(playerHealthText, activePlayerHealth);
  }
}

function attackHandler(mode) {
  const damage =
    mode === typeofAttack.normal
      ? damageActor(ATTACK_VALUE, monsterHealth)
      : damageActor(STRONG_ATTACK_VALUE, monsterHealth);
  activeMonsterHealth -= damage;
  setHealthText(monsterHealthText, activeMonsterHealth);

  checkWin();

  const playerDamage = damageActor(MONSTER_ATTACK_VALUE, playerHealth);
  activePlayerHealth -= playerDamage;
  setHealthText(playerHealthText, activePlayerHealth);
}
function healHandler(healValue = 0) {
  if (activePlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    alert("You can't replenish more than your max health(100)!");
    healValue = chosenMaxLife - activePlayerHealth;
  } else {
    healValue = HEAL_VALUE;
  }

  healPlayerHealth(healValue);
  activePlayerHealth += healValue;
  setHealthText(playerHealthText, activePlayerHealth);

  checkWin();
}

function addLife() {
  if (+bonusLife.textContent) {
    healHandler(50);
    bonusLife.textContent -= 1;
  } else {
    alert("You've no bonus life!");
  }
}
function setHealthText(actor, value) {
  if (+value <= 0) {
    actor.textContent = 0;
  }
  actor.textContent = Math.round(value);
}

function showLog() {
  alert(`Player : ${playerWins} wins!\nMonster : ${monsterWins} wins!`);
}

attackBtn.addEventListener("click", () => {
  attackHandler(typeofAttack.normal);
});

strongAttackBtn.addEventListener("click", () => {
  attackHandler(typeofAttack.strong);
});

healBtn.addEventListener("click", healHandler);

bonusLife.addEventListener("click", addLife);

resetBtn.addEventListener("click", resetGame);

showLogBtn.addEventListener("click", showLog);
