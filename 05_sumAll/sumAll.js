const sumAll = function(start,end) {
    let sum = 0
    if(start > end){
        let holder = end
        end = start
        start = holder
    }
    else if(start < 0 ||end < 0){
        return "ERROR"
    }
    else if(typeof start != "number" || typeof end != "number"){
        return "ERROR"

    }
    while(start<=end){
      sum+=start
      start++
      
    }
    return sum
  };
  
  module.exports = sumAll;
  