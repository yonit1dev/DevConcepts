// Ways of declaring / assigning functions

// Assign to a variable. On the right side of an assignment operator.
const startGame = function () {
  console.log("Game Started!");
};

startGame();

/* 
    Difference of function declaration / expression.

    Related to hoisting. You can't call function expression functions before defining them.

    Enforces to define functions before call.
*/

// aFunction(); // Doesn't work, throws an error.
const aFunction = function () {
  console.log("A Function");
};
aFunction(); // Works

// Another way to declare functions - arrow functions

const arrowFunction = () => {
  console.log("This is an arrow function!");
};

const anotherArrowFunction = () => console.log("Another Arrow Function");

const differentArrowFunction = (result) => console.log(result);

const sum = (a, b) => a + b;

arrowFunction();
anotherArrowFunction();
differentArrowFunction("With out paranthesis!");
console.log(sum(1, 5));
