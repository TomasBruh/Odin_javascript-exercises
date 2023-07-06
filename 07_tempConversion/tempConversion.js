const convertToCelsius = function(fahrenheitDegrees) {
  let degreesInCelsius = Math.round((fahrenheitDegrees - 32) * 5 / 9 * 10) / 10;
  return degreesInCelsius;
};

const convertToFahrenheit = function(celsiusDegrees) {
  let degreesInFahrenheit = Math.round((celsiusDegrees * 9 / 5 + 32) * 10) / 10;
  return degreesInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
