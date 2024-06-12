const repeatString = function(word, number) {
    let cock = "";
    if(number < 0){
        return "ERROR"
    }
    for(let i = 0; i < number;i++){
        cock = cock + word;
    }
    return cock;
    

};

// Do not edit below this line
module.exports = repeatString;
