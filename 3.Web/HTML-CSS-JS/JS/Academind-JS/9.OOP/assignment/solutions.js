// Solutions to assignment on OOP

// Create a class called Course with three properties and instantiate twice.
class Course {
  constructor(title, length = 0, price = 0) {
    this.title = title;
    this.length = length;
    this._price = price;
  }

  set price(value) {
    if (value <= -1) {
      return "Invalid Price!!!";
    } else {
      this._price = value;
    }
  }

  get price() {
    return `\$${this._price}`;
  }
}

const courseOOP = new Course(
  "Object Oriented Programming",
  "12.5hrs",
  "$10.99"
);
const mobileDev = new Course("Android Development", "72hrs", "$99.99");

console.log(courseOOP, mobileDev);

// Add two methods to the course class
Course.prototype.calculateValue = function (price) {
  this._price = price;
  this.length = (price * 0.25).toFixed(2);
};
Course.prototype.outputCourse = function () {
  console.log(
    `You've subscribed to the ${this.title} course.\nThe course will be ${this.length} hrs long based on your payment of \$${this._price}.\nGood Luck!
    `
  );
};

const iosDev = new Course("iOS Development");
iosDev.calculateValue(30);
iosDev.outputCourse();

// Create two more specialized classes and base them on the course class.
class PracticalCourse extends Course {
  constructor(title, numOfExercises) {
    super(title);
    this.numOfExercises = numOfExercises;
  }

  outputCourse() {
    console.log(
      `You've subscribed to the ${this.title} practical course.\nThe course will have ${this.numOfExercises} exercises, and is ${this.length} hrs long based on your payment of \$${this._price}.\nGood Luck!
        `
    );
  }
}

class TheoreticalCourse extends Course {
  constructor(title) {
    super(title);
  }

  publish() {
    console.log(`Publishing ${this.title} as a theoretical course!`);
  }
}

const aPracticalCourse = new PracticalCourse("First Practical Course", 12);
const aTheoreticalCourse = new TheoreticalCourse("First Theoretical Course");

aPracticalCourse.calculateValue(49.99);
aPracticalCourse.outputCourse();

aTheoreticalCourse.calculateValue(89.99);
aTheoreticalCourse.outputCourse();

// Use getters and setter to ensure that the price property can only be set to a positive value and returned with a $ sign.
// For solution refer to the class.

// Use private fields
// For solution, again refer to the class.
