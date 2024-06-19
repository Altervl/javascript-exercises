const convertToCelsius = function(value) {
  let result = (value - 32) * 5 / 9;
  return Number(result.toFixed(1));
};

const convertToFahrenheit = function(value) {
  let result = (value * 9 / 5 + 32);
  return Number(result.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
