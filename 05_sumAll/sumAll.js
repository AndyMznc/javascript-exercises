const sumAll = function (num1, num2) {
  let total = 0;

  function isNumber(value) {
    return typeof value === "number";
  }

  if (!isNumber(num1) || !isNumber(num2)) {
    return "ERROR";
  }

  if (num1 < 0 || num2 < 0) {
    return "ERROR";
  }

  for (let i = num1; i <= num2; i++) {
    total += i;
  }

  for (let i = num2; i <= num1; i++) {
    total += i;
  }

  return total;
};


// Do not edit below this line
module.exports = sumAll;
