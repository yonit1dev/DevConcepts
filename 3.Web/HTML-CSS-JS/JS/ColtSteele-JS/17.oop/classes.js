// Inheritance: extends, super and subclasses

class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  eat() {
    return `${this.name} is eating!`;
  }
}

class Cat extends Pet {
  constructor(name, age, numLives) {
    super(name, age);
    this.numLives = numLives;
  }
  meow() {
    return "MEOWWW!";
  }
}

class Dog extends Pet {
  constructor(name, age) {
    super(name, age);
  }
  bark() {
    return "WOOFF!";
  }
}

const monty = new Cat("Monty", 3, 6);
console.log(monty.eat());
console.log(monty.meow());
console.log(monty.__proto__); // Pet

const bobby = new Dog("Bobby", 6);
console.log(bobby.eat());
console.log(bobby.bark());
console.log(bobby.__proto__); // Pet
