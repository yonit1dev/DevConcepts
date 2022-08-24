// Checking is script is connected
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

function add() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;

  createOutputMessage(initialResult, currentResult, "+", enteredNumber);

  resetValue();
}

function subtract() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult -= enteredNumber;

  createOutputMessage(initialResult, currentResult, "-", enteredNumber);

  resetValue();
}

function multiply() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  currentResult *= enteredNumber;

  createOutputMessage(initialResult, currentResult, "*", enteredNumber);

  resetValue();
}

function divide() {
  const enteredNumber = getUserInput();
  const initialResult = currentResult;

  if (enteredNumber === 0) {
    resetValue();
    outputResult(NaN, "Division by 0 is invalid!");
    return;
  } else {
    calcDescription = createOutputMessage(currentResult, "/", enteredNumber);

    currentResult /= enteredNumber;

    createOutputMessage(initialResult, currentResult, "/", enteredNumber);

    resetValue();
  }
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
mutliplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
