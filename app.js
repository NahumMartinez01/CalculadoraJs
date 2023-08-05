const d = document;
const numbers = d.querySelectorAll("#number");
const operators = d.querySelectorAll("#operator");
const equal = d.getElementById("equal");
const btnClear = d.getElementById("clear");
const result = document.getElementById("result");
const lastOperationScreen = document.getElementById("lastOperationScreen");
let currentNum = "";
let currentOperator = "";
let previousNum = "";

numbers.forEach((number) => {
  number.addEventListener("click", function () {
    let text = number.dataset.num;
    currentNum += text;

    updateDisplay();
  });
});

operators.forEach((operator) => {
  operator.addEventListener("click", function () {
    let text = operator.dataset.op;
    console.log(text);
    if (currentNum !== "") {
      if (currentOperator !== "") {
        calculate();
      }
      firstOperand = result.value;
      currentOperator = text;
      lastOperationScreen.textContent = `${firstOperand} ${currentOperator}`;
      previousNum = currentNum;
      currentNum = "";

      updateDisplay();
    }
  });
});

equal.addEventListener("click", function () {
  calculate();
});

btnClear.addEventListener("click", function () {
  clearDisplay();
});

function calculate() {
  if (currentNum !== "" && previousNum !== " ") {
    const num1 = parseFloat(previousNum);
    console.log("num1 " + num1);
    const num2 = parseFloat(currentNum);
    console.log("num2 " + num2);
    switch (currentOperator) {
      case "+": {
        currentNum = add(num1, num2);
        break;
      }
      case "-": {
        currentNum = subtract(num1, num2);
        break;
      }
      case "*": {
        currentNum = multiply(num1, num2);
        break;
      }
      case "/": {
        currentNum = divide(num1, num2);
        break;
      }
      default: {
        currentNum = 0;
      }
    }
    lastOperationScreen.textContent = `${num1} ${currentOperator} ${num2} =`
    currentOperator = "";
    previousNum = "";
    updateDisplay();
  }
}

function add(num1, num2) {
  
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 0;
  } else {
    return num1 / num2;
  }
}

function clearDisplay() {
  currentNum = "";
  currentOperator = "";
  previousNum = "";
  result.value = "0";
  lastOperationScreen.textContent = ""
}

function updateDisplay() {
  result.value = currentNum;
}
