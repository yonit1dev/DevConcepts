// Assignment for Module

/* 
    Rewrite the function in an arrow function format. 
*/

// Original Function:
function sayHello(name) {
  console.log("Hi, " + name);
}
sayHello("User");

// Rewritten Function:
const sayHi = function (name) {
  console.log("Hi, " + name);
};
sayHi("User");

const greet = (name) => {
  console.log("Hello, " + name);
};
greet("User");

/* 
    Rewrite the arrow function with different parameters / arguments.
*/

// First Modification
function modGreet(phrase, name) {
  console.log(phrase + ", " + name + "!");
}
modGreet("Hello", "User1");

// Second Modification
function modModGreet() {
  console.log("Hello, User2!");
}
modModGreet();

// Third Modification
const thridModGreet = (phrase, name) => {
  return phrase + ", " + name + "!";
};

let statement = thridModGreet("Hello,", "User3");
console.log(statement);

/* 
    Rewrite the function with default parameters.
*/

function defaultFunction(name, phrase = "Hello") {
  return phrase + ", " + name + "!";
}
statement = defaultFunction("User4", "Olla");
console.log(statement);

/* 
    Define a function which takes unlimited arguments, and executes callback function.
*/

function checkInput(someCB, ...strings) {
  for (let string of strings) {
    if (!string) {
      console.log("Invalid arguments!");
      break;
    } else {
      someCB(string);
    }
  }
}

checkInput(
  (string) => {
    console.log(string.toUpperCase());
  },
  "hello",
  "there",
  "",
  "is",
  "me",
  "!"
);
