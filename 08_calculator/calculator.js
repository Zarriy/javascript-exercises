const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let sumValue = 0;
  for (let key in arr) {
    sumValue += arr[key];
  }
  return sumValue;
};

const multiply = function (arr) {
  let multiple = 1;
  for (let x = 0; x < arr.length; x++) {
    multiple *= arr[x];
  }
  return multiple;
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (number) {
  let fact = 1;
  for (let x = 1; x <= number; x++) {
    fact *= x;
  }
  return fact;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
