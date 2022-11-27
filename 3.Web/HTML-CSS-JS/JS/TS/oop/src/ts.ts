console.log("Connected!");

class TSPerson {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hello! I'm ${this.name} and I'm ${this.age} years old.`);
  }
}

class TSPlayer {
  readonly first: string;
  readonly last: string;
  protected score = 0;

  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }

  greet(): string {
    return `Hello, I'm a new game player.\nMy name is ${this.first} - ${this.last}`;
  }
}

class SuperTSPlayer extends TSPlayer {
  public isAdmin: boolean = true;
  constructor(first: string, last: string) {
    super(first, last);
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

interface Colorful {
  color: string;
}

interface Printable {
  print(): void;
}

class Bike implements Colorful {
  constructor(public color: string) {}
}

class Jacket implements Colorful, Printable {
  constructor(public brand: string, public color: string) {}
  print(): void {
    console.log(`This is a ${this.color} - ${this.brand} jacket!`);
  }
}

const redBike = new Bike("RED");
const blackJacket = new Jacket("Versace", "BLACK");
blackJacket.print();

abstract class Employee {
  constructor(public first: string, public last: string) {}

  abstract getPay(): number;
}

class FullTime extends Employee {
  constructor(first: string, last: string, private salary: number) {
    super(first, last);
  }
  getPay(): number {
    return this.salary;
  }
}

class PartTime extends Employee {
  constructor(
    first: string,
    last: string,
    private hours: number,
    private rate: number
  ) {
    super(first, last);
  }
  getPay(): number {
    return this.hours * this.rate;
  }
}

const fullTime = new FullTime("Full", "Time", 56000);
console.log(fullTime.getPay());
const partTime = new PartTime("Part", "Time", 100, 45.7);
console.log(partTime.getPay());
