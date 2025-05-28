const calculatorResult = document.querySelector(".calc-screen");

function addNumber(number) {
  calculatorResult.value += number;
}

function addOperator(operator) {
  calculatorResult.value += operator;
}

function calculate() {
  calculatorResult.value = eval(calculatorResult.value);
}

function clearScreen() {
  calculatorResult.value = "";
}
