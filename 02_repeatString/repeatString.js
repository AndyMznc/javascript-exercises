const repeatString = function (string, num) {
  let sentence = "";

  if (num < 0) {
    return (sentence = "ERROR");
  }

  while (num > 0) {
    sentence += string;

    num--;
  }

  return sentence;
};

// Do not edit below this line
module.exports = repeatString;
