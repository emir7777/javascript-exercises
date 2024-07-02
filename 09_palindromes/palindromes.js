const palindromes = function (str) {
    str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~ ]/g, '').toLowerCase();
    
    if(str.length === 0 || str.length === 1){
        return true;
    }
    else{
        let pali = "";
        for(let i = str.length - 1;i>=0;i--){
            pali = pali + str[i];
        }
        return pali === str;
    }
};

// Do not edit below this line
module.exports = palindromes;
