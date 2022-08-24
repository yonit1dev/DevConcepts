console.log("Connected to index.html");

const defaultResult = 0;
let currrentResult = defaultResult;

currrentResult = (currrentResult + 10) * 3 / 2 - 1;

let calculationDescription = `(${defaultResult} + 10) * 3 / 2 - 1`;
let errorMessage = 'An error occured!';

outputResult(currrentResult, calculationDescription);