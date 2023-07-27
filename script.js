let currentInput = '';
let operator = '';
let resultShown = false;

function appendNumber(number) {
  if (resultShown) {
    clearDisplay();
  }
  currentInput += number;
  updateDisplay();
}

function appendDecimal() {
  if (resultShown) {
    clearDisplay();
  }
  if (!currentInput.includes('.')) {
    currentInput += '.';
    updateDisplay();
  }
}

function appendOperator(op) {
  if (currentInput !== '') {
    operator = op;
    resultShown = false;
    currentInput += ' ' + op + ' ';
    updateDisplay();
  }
}

function calculate() {
  if (operator && currentInput !== '') {
    const expression = currentInput.replace('x', '*').replace('/', '/');
    const result = eval(expression);
    currentInput = result.toString();
    operator = '';
    resultShown = true;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  operator = '';
  resultShown = false;
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('result').value = currentInput;
}
