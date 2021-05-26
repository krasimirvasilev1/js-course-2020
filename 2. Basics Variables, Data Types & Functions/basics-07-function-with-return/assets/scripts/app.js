const plusOperator = '+';
const minusOperator = '-';
const divideOperator = '/';
const multiplyOperator = '*';

const defaultResult = 0;
let currentResult = defaultResult;

let allDigitsInOperations = [];

function getUserInput() {
  return parseInt(userInput.value);
}

function createCalculationDescription(numberBeforeCalculation, operator) {
  return `${numberBeforeCalculation} ${operator} ${getUserInput()}`;
}

function createCalculationResult(operator) {
  let userInput = getUserInput();
  currentResult = eval(`${currentResult} ${operator} ${userInput}`) || 0;

  allDigitsInOperations.push(userInput);

  console.log(`Number from user input - ${userInput}`)
  console.log("All numbers that have been manipulated " + allDigitsInOperations);

  return currentResult;
}

function add() {
  let numberBeforeCalculation = currentResult;
  outputResult(
    createCalculationResult(plusOperator),
    createCalculationDescription(numberBeforeCalculation, plusOperator)
  );
}

function subtract() {
  let numberBeforeCalculation = currentResult;
  outputResult(
    createCalculationResult(minusOperator),
    createCalculationDescription(numberBeforeCalculation, minusOperator)
  );
}

function divide() {
  let numberBeforeCalculation = currentResult;
  outputResult(
    createCalculationResult(divideOperator),
    createCalculationDescription(numberBeforeCalculation, divideOperator)
  );
}

function multiply() {
  let numberBeforeCalculation = currentResult;
  outputResult(
    createCalculationResult(multiplyOperator),
    createCalculationDescription(numberBeforeCalculation, multiplyOperator)
  );
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
divideBtn.addEventListener('click', divide);
multiplyBtn.addEventListener('click', multiply);
