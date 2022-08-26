console.log("script.js connected!");

const ATTACK_VALUE = 10;
const STRONG_ATTACK_VALUE = 16;
const MONSTER_ATTACK_VALUE = 12;
const HEAL_VALUE = 15;

const enteredLife = prompt(
  "Maximum life for you and the monster. Default is a 100."
);

let chosenMaxLife = parseInt(enteredLife);
if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) chosenMaxLife = 100;

let bonus_life = 1;
let activeMonsterHealth = chosenMaxLife;
let activePlayerHealth = chosenMaxLife;
let hasBonusLife = true;

resetGame();

function resetGame() {
  bonusLife.textContent = +bonus_life;

  activeMonsterHealth = chosenMaxLife;
  activePlayerHealth = chosenMaxLife;

  adjustHealthBars(chosenMaxLife);

  setHealthText(monsterHealthText, activeMonsterHealth);
  setHealthText(playerHealthText, activePlayerHealth);
}

function setHealthText(actor, value) {
  actor.textContent = Math.round(value);
}

function checkWin() {
  if (activeMonsterHealth <= 0 && activePlayerHealth > 0) {
    alert("You've won!");
    setHealthText(monsterHealthText, 0);
    return;
  } else if (activePlayerHealth <= 0 && activeMonsterHealth > 0) {
    alert("You've lost!");
    setHealthText(playerHealthText, 0);
    return;
  } else if (activeMonsterHealth <= 0 && activePlayerHealth <= 0) {
    alert("A Draw!");
    setHealthText(monsterHealthText, activeMonsterHealth);
    setHealthText(playerHealthText, activePlayerHealth);
    return;
  }
}

function attackHandler(mode) {
  if (mode === "attack") {
    const damage = damageActor(ATTACK_VALUE, monsterHealth);
    activeMonsterHealth -= damage;
  } else if (mode === "strong") {
    const damage = damageActor(STRONG_ATTACK_VALUE, monsterHealth);
    activeMonsterHealth -= damage;
  }

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

attackBtn.addEventListener("click", () => {
  attackHandler("attack");
});

strongAttackBtn.addEventListener("click", () => {
  attackHandler("strong");
});

healBtn.addEventListener("click", healHandler);

bonusLife.addEventListener("click", addLife);

resetBtn.addEventListener("click", resetGame);
