const ratioOfTwoNumbers = require("../ratio/index");
const factorialOfNumber = require("../factorial/index");

const ratioAndFactorial = (a, b, c) => {
  const newObject = {};
  const ratio = ratioOfTwoNumbers(a, b);
  const factorial = factorialOfNumber(c);

  newObject.ratio = ratio;
  newObject.factorial = factorial;
  return newObject;
};

module.exports = ratioAndFactorial;
console.log(ratioAndFactorial(4, 2, 3));
