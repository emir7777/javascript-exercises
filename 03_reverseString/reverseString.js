const reverseString = function(word) {
    let dick = "";
  for(let i = word.length-1;i>=0;i--){
    dick = dick + word[i];
  }
  return dick;
  };
  

// Do not edit below this line
module.exports = reverseString;
