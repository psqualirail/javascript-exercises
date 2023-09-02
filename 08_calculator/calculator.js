const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(array) {
	let sum = 0;
  for (let arg of array) {
    sum += arg;
  }
  return sum;
};

const multiply = function(array) {
  let result = 1;
  for (let arg of array) {
    result *= arg;
  }
  return result;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	if (a < 0) {
    return undefined;
  }
  let result = 1;
  while (a > 1) {
    result *= a;
    a--; 
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
