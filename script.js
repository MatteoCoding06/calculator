const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");

let currentInput = "";
let operator = "";
let previousInput = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.textContent;

    if (value === "AC") {
      currentInput = "";
      previousInput = "";
      operator = "";
      display.value = "";
    } else if (value === "+/-") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;
      }
    } else if (value === "%") {
      if (currentInput) {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
      }
    } else if (
      value === "+" ||
      value === "-" ||
      value === "X" ||
      value === "/"
    ) {
      if (currentInput) {
        operator = value;
        previousInput = currentInput;
        currentInput = "";
      }
    } else if (value === "=") {
      if (previousInput && currentInput && operator) {
        const a = parseFloat(previousInput);
        const b = parseFloat(currentInput);
        let result = 0;

        switch (operator) {
          case "+":
            result = a + b;
            break;
          case "-":
            result = a - b;
            break;
          case "X":
            result = a * b;
            break;
          case "/":
            result = b !== 0 ? a / b : "Error";
            break;
        }

        display.value = result;
        currentInput = result.toString();
        previousInput = "";
        operator = "";
      }
    } else {
      // Numeri e punto
      if (value === "." && currentInput.includes(".")) return;
      currentInput += value;
      display.value = currentInput;
    }
  });
});
