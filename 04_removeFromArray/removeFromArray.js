const removeFromArray = function(array, ...nums) {
    
      
      for(let i = 0;i<nums.length;i++){
          let count = 0;
          let newArray = []
          for(let j = 0;j<array.length;j++){
              if(array[j] === nums[i]){
  
              }
              else{
                  newArray[count] = array[j];
                  count++;
              }
          }
        array = newArray
      }
      return array;
  };

// Do not edit below this line
module.exports = removeFromArray;
