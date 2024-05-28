const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	const sum = arr.reduce((total, item) => total + item, 0);
  return sum;
};

const multiply = function(arr) {
	const product = arr.reduce((total, item) => total * item, 1);
  return product;
};

const power = function(base, exponent) {
  let total = base;
	for ( let i=0; i < exponent - 1; i++) {
    total *= base;
  }
  return total;
};

const factorial = function(num) {
  let total = 1;
  let fact = num;
  while( fact > 0 ) {
    total *= fact;
    fact--;
  }
  return total;
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
