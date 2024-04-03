const repeatString = function(string, repeats) {
    
    if(repeats < 0) {
        return 'ERROR';
    }
    let repeatedString = '';
    for (let i = 0; i < repeats; i++){
        repeatedString += string;
    }
     
    return repeatedString;   
};

console.log(repeatString('hey', 3))

// Do not edit below this line
module.exports = repeatString;
