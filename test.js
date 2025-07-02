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

const fi = async () => {
  const num1 = (await Date().getTime()) % 100; // Simulating a number input
};

f1()
  .then(() => {
    console.log(num1);
    calC(10, 5, "+"); // Example usage
    calC(10, 5, "-"); // Example usage
  })
  .catch((error) => {
    console.error(error);
  });

conost;
