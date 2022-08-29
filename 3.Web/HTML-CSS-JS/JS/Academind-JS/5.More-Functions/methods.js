// Direct execution of functions.
function startGame() {
  console.log("Game Started!");
}

startGame();

// Methods - functions withing objects.
const person = {
  name: "Yoni",
  greet: function greet() {
    console.log("Hello, I'm a method.");
  },
};

person.greet();

// JS functions are really objects.
console.log(typeof startGame);
