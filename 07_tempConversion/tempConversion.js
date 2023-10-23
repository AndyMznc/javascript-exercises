const convertToCelsius = function (fahrenheit) {
  // Temperature in degrees Celsius (°C) = (Temperature in degrees Fahrenheit (°F) - 32) * 5/9.

  const FORMULA = ((fahrenheit - 32) * 5) / 9;
  return Math.round(FORMULA * 10) / 10;
};

const convertToFahrenheit = function (celsius) {
  // Temperature in degrees Fahrenheit (°F) = (Temperature in degrees Celsius (°C) * 9/5) + 32.

  const FORMULA = (celsius * 9) / 5 + 32;
  return Math.round(FORMULA * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
