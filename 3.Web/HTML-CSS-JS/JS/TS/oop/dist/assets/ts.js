"use strict";
console.log("Connected!");
class TSPerson {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello! I'm ${this.name} and I'm ${this.age} years old.`);
    }
}
class TSPlayer {
    constructor(first, last) {
        this.score = 0;
        this.first = first;
        this.last = last;
    }
    greet() {
        return `Hello, I'm a new game player.\nMy name is ${this.first} - ${this.last}`;
    }
}
class SuperTSPlayer extends TSPlayer {
    constructor(first, last) {
        super(first, last);
        this.isAdmin = true;
    }
    maxScore() {
        this.score = 45;
    }
}
const tsFather = new TSPerson("Tessema", 56);
tsFather.greet();
const newPlayer = new TSPlayer("Elton", "Steel");
const superPlayer = new SuperTSPlayer("Super", "Player");
console.log(superPlayer.greet());
class Bike {
    constructor(color) {
        this.color = color;
    }
}
class Jacket {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;
    }
    print() {
        console.log(`This is a ${this.color} - ${this.brand} jacket!`);
    }
}
const redBike = new Bike("RED");
const blackJacket = new Jacket("Versace", "BLACK");
blackJacket.print();
class Employee {
    constructor(first, last) {
        this.first = first;
        this.last = last;
    }
}
class FullTime extends Employee {
    constructor(first, last, salary) {
        super(first, last);
        this.salary = salary;
    }
    getPay() {
        return this.salary;
    }
}
class PartTime extends Employee {
    constructor(first, last, hours, rate) {
        super(first, last);
        this.hours = hours;
        this.rate = rate;
    }
    getPay() {
        return this.hours * this.rate;
    }
}
const fullTime = new FullTime("Full", "Time", 56000);
console.log(fullTime.getPay());
const partTime = new PartTime("Part", "Time", 100, 45.7);
console.log(partTime.getPay());
