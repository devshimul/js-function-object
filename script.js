// function sum() {
//   console.log("Hello from js function");
// }
// console.log(sum());

// let name = "Jolil";
// let age = 20;
// // console.log("I am age Years old");
// // console.log(`I am ${age} Years old`);
// console.log(`I am ${name} and, I am ${age} years old`);
// function added(num1, num2) {
//   const total = num1 + num2;
//   return total;
// }
// const sum = added(445, 45);
// console.log(sum);

const juice = appleOrangeJuice(2, 1);
console.log(juice);

function cutPices(fruit) {
  const pices = fruit * 4;
  return pices;
}

function appleOrangeJuice(apples, oranges) {
  const applesPices = cutPices(apples);
  const orangePices = cutPices(oranges);

  const juice = `Juice with ${applesPices} pieces apples and ${orangePices} pices oranges.`;
  return juice;
}

// console.log(juice);

// There are three types of function
/**
 * Function declaration
 * Function Expression
 * Arrow Function
 */

// function subtract(){}

const subtract = function (num1, num2) {
  return num1 - num2;
};

const result = subtract(45, 15);
console.log(result);
// const multiply = (num1, num2) => console.log(num1 - num2);
// multiply(10, 5);

const numbers = [45, 88, 77, 96, 36, 51, 57, 54, 47, 85, 107];

function arrSum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    let singleValue = numbers[i];
    total = total + singleValue;
  }
  return total;
}
const resultSum = arrSum(numbers);
console.log(resultSum);
