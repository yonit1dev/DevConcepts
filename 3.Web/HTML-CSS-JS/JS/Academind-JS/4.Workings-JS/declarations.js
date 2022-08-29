// let keyword

let userName = "Max"; // Defined globally

function greet() {
  let age = 30; // Not defined globally only in function scope
  let userName = "Chris"; // Shadows the outer userName
  console.log(userName, age);
}

greet();

console.log(userName);

// var keyword

var personName = "Anna";
console.log(personName);

var personName = "Chris"; // Redeclaring the variable doesn't throw an error unlike let.
console.log(personName);

function hello() {
  var age = 35; // Defined in the function scope.

  console.log(personName, age);
}

console.log(personName);

if (personName === "Chris") {
  var hobbies = ["Sports", "Cooking"]; // Created globally. let and const would create it locally in the if block.
  console.log(personName, hobbies);
}

console.log(personName, hobbies);
