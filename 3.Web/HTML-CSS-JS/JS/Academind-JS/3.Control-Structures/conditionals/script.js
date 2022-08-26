// Checking if script is connected
console.log("Connected!");

/* A simple calculator app which adds, subtracts
 * multiplies and divides.

 * A bonus feature is that it checks division by zero.

 * outputResult function from vendor.js file.
 */

const defaultResult = 0; // Initial Value
let currentResult = defaultResult;
let calcDescription = "Start Calculating!"; // Initial Message
let logEntries = [];

outputResult(currentResult, calcDescription); // Initial Output

// Input from input field
function getUserInput() {
  return +userInput.value;
}

// Reset input value
function resetValue() {
  userInput.value = "";
}

// Construct output message function
function createOutputMessage(
  initialResult,
  currentResult,
  operator,
  userInput
) {
  outputResult(currentResult, `${initialResult} ${operator} ${userInput}`);
}

function calculateResult(calculationType) {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === "add") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "subtract") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "multiply") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else if (calculationType === "divide") {
    if (enteredNumber === 0) {
      resetValue();
      outputResult(NaN, "Division by 0 is invalid!");
      return;
    } else {
      currentResult /= enteredNumber;
      mathOperator = "/";
    }
  }

  createOutputMessage(
    initialResult,
    currentResult,
    mathOperator,
    enteredNumber
  );

  resetValue();
}

function add() {
  calculateResult("add");
}

function subtract() {
  calculateResult("subtract");
}

function multiply() {
  calculateResult("multiply");
}

function divide() {
  calculateResult("divide");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
mutliplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
