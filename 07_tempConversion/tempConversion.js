const convertToCelsius = function(f) {
  let c = (f - 32) * (5/9) 
  let x = Math.round(c*10)
  return x/10
};

const convertToFahrenheit = function(c) {
  let f = c * (9/5) + 32
  let x = Math.round(f*10)
  return x/10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
