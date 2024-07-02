const fibonacci = function(num) {
    if(parseInt(num) === 0 ){
        return 0;
    }
    else if(num<0){
        return "OOPS"
    }
    else{
        let arr = [];
        for(let i = 0; i<num;i++){
            if(i === 0 || i === 1){
                arr[i] = 1;
            }
            else{
                arr[i] = (arr[i-1] + arr[i-2])
            }
        }
        return arr[num-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
