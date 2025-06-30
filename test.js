// // test.js
// "use strict";
// const { calC } = require("./calculator.js");

const calC = (num1, num2, operator) => {
  switch (operator) {
    case "+":
      console.log(num1 + num2);
    case "-":
      console.log(num1 - num2);
    case "*":
      console.log(num1 * num2);
    case "/":
      if (num2 === 0) {
        throw new Error("Division by zero is not allowed");
      }
      console.log(num1 / num2);
    default:
      throw new Error("Invalid operator");
  }
};

const name = "Salman Siddiqui";
