console.log("app.js connected!");

const monsterHealth = document.getElementById("monster-bar");
const playerHealth = document.getElementById("player-bar");
const bonusLife = document.getElementById("bonus-life");

const attackBtn = document.getElementById("attack");
const strongAttackBtn = document.getElementById("strong-attack");
const healBtn = document.getElementById("heal");
const showLogBtn = document.getElementById("show-log");

function adjustHealthBars(maxLife){
    monsterHealth.max = maxLife;
    monsterHealth.value = maxLife;
    playerHealth.max = maxLife;
    playerHealth.value = maxLife;
}
