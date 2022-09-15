// Spread Operator

"use strict";

const person = { name: "Yoni", hobbies: ["Sports", "Cooking"] };

console.log(person);

const anotherPerson = { ...person, hobbies: [...person.hobbies] }; // Copies the nested objects not the reference.

person.age = 21;

person.hobbies.push("Programming"); // Objects within the parent object are not copied

console.log(person);
console.log(anotherPerson);

// Object Destructuring
/*
 * Refer to the demo project in this module, addMovieHandler function for more on this.
 */

// this keyword

let title = "Batman";
let part = "Dark Knight";

const movie = {
  info: {
    title,
    part,
  },
  id: (Math.random() * 10).toFixed(2).toString(),
  getFormattedTitle: function (anotherArg = "!") {
    return (this.info.title + anotherArg).toUpperCase();
  },
};

console.log(movie.getFormattedTitle());

/*
 * To curb error with the this key word use bind function on functions to make it correctly refer to the proper object.
 */

let { getFormattedTitle } = movie;
getFormattedTitle.apply(movie);

// This and arrow function
function hello() {
  console.log(this); // Undefined
  console.log("Hello");
}

const helloth = () => {
  console.log(this); // Global window object
  console.log("Hello there");
};

hello();
helloth();
console.log(this); // Global window object

const members = {
  teamName: "Liverpool",
  people: ["Salah", "Firmino", "Darwin"],
  getTeamMembers() {
    this.people.forEach((p) => console.log(p + " - " + this.teamName)); // Using an arrow function in this context returns the objects. Doesn't work with the normal function keyword.
  },
};

members.getTeamMembers();

// Getters and Setters
const newObj = {
  get type() {
    return this._type;
  },
  set type(val) {
    if (!val) {
      this._type = "Object";
    }
    this._type = val;
  },
  get objName() {
    return this._objName;
  },
  set objName(val) {
    this._objName = val;
  },
};

newObj.type = "Object";
console.log(newObj.type);
