const add = function(x,y) {
	let result = parseInt(x) + parseInt(y);
  return result;
};

const subtract = function(x,y) {
	let result = parseInt(x) - parseInt(y);
  return result;
};

const sum = function(arr) {
	let result = 0;
  for(let i = 0; i < arr.length;i++){
    result+=arr[i];
  }
  return result;
};

const multiply = function(arr) {
  let result = 1;
  for(let i = 0; i < arr.length;i++){
    result = result * arr[i];
  }
  return result;
};

const power = function(num, power) {
	if(power === 0){
    return 1;
  }
  else{
    result = 1;
    for(let i = 1; i <= power; i++){
      result = result * num
    }
    return result;
  }
};

const factorial = function(num) {
	if(num === 0){
    return 1;
  }
  else{
    result = 1;
    while(num > 0){
      result = result * num;
      num--;
    }
    return result;
  }
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
