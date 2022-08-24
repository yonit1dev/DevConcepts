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

outputResult(currentResult, calcDescription); // Initial Output

// Input from input field
function getUserInput() {
  return +userInput.value;
}

// Reset input value
function resetValue(){
    userInput.value=  "";
}

// Construct output message function
function createOutputMessage(currentResult, operator, userInput){
    return `${currentResult} ${operator} ${userInput}`;
}

function add() {
  const enteredNumber = getUserInput();

  calcDescription = createOutputMessage(currentResult, '+', enteredNumber);

  currentResult += enteredNumber;
  resetValue();

  outputResult(currentResult, calcDescription);
}

function subtract() {
  const enteredNumber = getUserInput();

  calcDescription = createOutputMessage(currentResult, '-', enteredNumber);

  currentResult -= enteredNumber;
  resetValue();

  outputResult(currentResult, calcDescription);
}

function multiply() {
  const enteredNumber = getUserInput();

  calcDescription = createOutputMessage(currentResult, '*', enteredNumber);

  currentResult *= enteredNumber;
  resetValue();

  outputResult(currentResult, calcDescription);
}

function divide() {
  const enteredNumber = getUserInput();

  if (enteredNumber === 0) {
    resetValue();
    outputResult(NaN, 'Division by 0 is invalid!');
    return;
  } else {
    calcDescription = createOutputMessage(currentResult, '/', enteredNumber);

    currentResult /= enteredNumber;
    resetValue();

    outputResult(currentResult, calcDescription);
  }
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
mutliplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
