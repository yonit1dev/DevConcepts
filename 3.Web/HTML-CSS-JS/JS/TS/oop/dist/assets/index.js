"use strict";
console.log("Connected!");

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

const father = new Person("Tessema", 56);
father.greet();

class Player {
  #score = 0;
  numLives = 10;
  static description = "Player initiated!";

  constructor(first, last) {
    this.first = first;
    this.last = last;
  }
  getScore() {
    return this.#score;
  }
  setScore(value) {
    this.#score = +value;
  }
  taunt() {
    console.log("BOOYAH!");
  }
  loseLife() {
    if (this.numLives <= 0) {
      this.numLives = 0;
      return;
    }
    this.numLives -= 1;
  }
}

class AdminPlayer extends Player {
  constructor(role) {
    super("Admin", "Player");
    this.role = role;
  }

  changePlayerLive(player, value) {
    if (value && value >= 0) player.numLives = value;
    return;
  }
}

const player1 = new Player("Blue", "Steel");
player1.taunt();

console.log(player1.numLives);
player1.loseLife();
console.log(player1.numLives);

player1.setScore(25);
console.log(player1.getScore());

const admin = new AdminPlayer("ROOT");
console.log(admin.role);
admin.changePlayerLive(player1, 6);
console.log(player1.numLives);
