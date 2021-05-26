const plusOperator = '+';
const minusOperator = '-';
const divideOperator = '/';
const multiplyOperator = '*';

const defaultResult = 0;
let currentResult = defaultResult;

function getUserInput() {
  return parseInt(userInput.value);
}

function createCalculationDescription(numberBeforeCalculation, operator) {
  return `${numberBeforeCalculation} ${operator} ${getUserInput()}`;
}

function createCalculationResult(operator) {
  currentResult = eval(`${currentResult} ${operator} ${getUserInput()}`) || 0;

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
