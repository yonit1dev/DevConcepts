console.log("app.js connected!");

const monsterHealth = document.getElementById("monster-bar");
const monsterHealthText = document.getElementById("monster-health-text");
const playerHealth = document.getElementById("player-bar");
const playerHealthText = document.getElementById("player-health-text");
const bonusLife = document.getElementById("bonus-life");

const attackBtn = document.getElementById("attack");
const strongAttackBtn = document.getElementById("strong-attack");
const healBtn = document.getElementById("heal");
const showLogBtn = document.getElementById("show-log");
const resetBtn = document.getElementById("reset-game");

function adjustHealthBars(maxLife) {
  monsterHealth.max = maxLife;
  monsterHealth.value = maxLife;
  playerHealth.max = maxLife;
  playerHealth.value = maxLife;
}

function damageActor(damage, actor){
    const damageDealt = Math.random() * damage;
    actor.value = +actor.value - damageDealt;

    return damageDealt;
}

function healPlayerHealth(healValue) {
  playerHealth.value = +playerHealth.value + healValue;
}

function reset() {
  adjustHealthBars(100);
}
