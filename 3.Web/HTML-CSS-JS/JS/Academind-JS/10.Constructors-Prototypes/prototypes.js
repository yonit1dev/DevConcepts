// Prototypes

// Prototype for the Personal Class
class Human {
  inform() {
    console.log("Hi, I am a Human Being!");
  }
}

class Person extends Human {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old!`);
  }
}

Person.prototype.describe = () => {
  console.log("Creating Person...");
};

// Constructor function which is basically a class
function Individual(name, age) {
  this.name = name;
  this.age = age;

  this.greet = function () {
    console.log(`Hi, my name is ${this.name}, and I am ${this.age} years old!`);
  };
}

const p = new Person("Yoni", 22);
console.log(p);
console.log(p.__proto__); // Human gets logged

Individual.prototype.printAge = function () {
  console.log(this.age);
}; // This method will not be added as a property to the class, rather only interacts with objects created.

const newIndiv = new Individual("Lenda", 16);
console.log(newIndiv);
newIndiv.printAge();

console.dir(Object.prototype);
