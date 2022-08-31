console.log(!!1);

const constant = "" || 0; // The or operator returns the first value if true, and the second value if both are false.

const anotherConstant = "" && "1"; // The and operator returns the falsy value if one is false, and returns the second element if both are true.

console.log(constant);
console.log(anotherConstant);

const userInput = "";
const isAnotherInput = !!userInput;
const validInput = userInput || "Max";

console.log(isAnotherInput);
console.log(validInput);

let isLoggedIn = true;
const cart = isLoggedIn && ["Books"];

console.log(cart);
