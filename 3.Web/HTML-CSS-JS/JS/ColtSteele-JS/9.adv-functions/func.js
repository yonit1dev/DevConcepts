/*
 * Scope of functions
 * Higher order functions
 * Callbacks and Hoisting
 */

// scope - visibility of code
function helpMe() {
  let msg = "I'm on fire!";

  var anotherMsg = "This is a var declaration"; // only visible inside the function

  console.log(msg); // only visible inside this function
}

helpMe();
// console.log(msg); // throws an error

// console.log(anotherMsg); // also throws an error

let bird = "pigeon";

function birdWatch() {
  let bird = "canary";
  console.log(bird);
}

birdWatch();
console.log(bird);

// block scope
if (true) {
  let animal = "eel";
  var anotherAnimal = "dog";
}
console.log(anotherAnimal); // does work since var is not block scoped.
// console.log(animal); // animal is block scoped to the if statement so throws an error. let and const are block scoped.

// another block scope
var i = 11;
for (let i = 0; i < 10; i++) {
  // this i is separate from the one declared on the preceeding line.
  console.log(i);
}
console.log(i); // logs 11.

// for example purposes, could be done using the map method.
function doubleArr(arr) {
  const newArr = [];
  for (let num of arr) {
    let double = num * 2;
    newArr.push(double);
  }
  return newArr;
}

console.log(doubleArr([1, 3, 5]));
