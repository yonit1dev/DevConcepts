console.log("Connected to index.html");

const defaultResult = 0;
let currentResult = defaultResult;
let calculationDescription = 'Nothing here!';
let errorMessage = 'An error occured!';

outputResult(currentResult, calculationDescription);

function add(){
    currentResult += +userInput.value;
    userInput.value = "";
    outputResult(currentResult, calculationDescription);
}

function subtract(){
    currentResult -= +userInput.value;
    userInput.value = "";
    outputResult(currentResult, calculationDescription);
}

function multiply(){
    currentResult *= +userInput.value;
    userInput.value = "";
    outputResult(currentResult, calculationDescription);
}

function divide(){
    if (+userInput.value === 0){
        currentResult = undefined;
        return outputResult(currentResult, calculationDescription);
    }
    currentResult /= +userInput.value;
    userInput.value = "";
    outputResult(currentResult, calculationDescription);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
mutliplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);