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
aFunction(); // Doesn't work, throws an error.
const aFunction = function(){
    console.log("A Function");
};
aFunction(); // Works

