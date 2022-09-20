// Constructor Function

class Person {
  name = "Yoni";

  constructor() {
    this.age = 22;
  }

  greet() {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  }
}

const p1 = new Person();
p1.greet();

/*
 * What the class is basically achieving behind the scenes is creating a constructor function. Refer below to the implementation. A class is basically a syntatic sugar for a constructor function.
 */

// An implementation of the Person class in the form of a constructor function.
function Persons() {
  this.name = "Yoni";
  this.age = 22;
  this.greet = function () {
    console.log(`Hi, I am ${this.name} and I am ${this.age} years old.`);
  };
}

console.log(Object.getOwnPropertyDescriptors(Person));

/*
 * The difference between constructor functions and classes is in the way methods are defined and added. When adding a method to a class it actually gets added to the prototype of the class. Refer below.
 */

function People() {
  this.groupName = "Ethiopian";
  this.continent = "Africa";

  this.describe = function () {
    console.log(
      `We are from ${this.continent} and are of the ${this.groupName} race!`
    );
  };
}

const ppl = new People();
console.dir(ppl); // The describe function is added to the constructor function itself not the prototype.

class Race {
  raceName = "Ethiopian";
  continent = "Africa";

  describe() {
    console.log(
      `We are from ${this.continent} and are of the ${this.groupName} race!`
    );
  }
}

const race = new Race();
console.dir(race); // the describe method here is added to a prototype of the Race class. Hence, an additional prototype if added by JS by default when creating classes which houses methods for the class.
