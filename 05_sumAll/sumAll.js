const sumAll = function(firstNumber, lastNumber) {
    let sum = 0;
    
    if (firstNumber < 0 || lastNumber < 0) {
        return "ERROR";
    } else if (typeof(firstNumber) !== 'number' || typeof(lastNumber) !== 'number') {
        return 'ERROR'
    }
    
    if (firstNumber < lastNumber ){
        for (let i = firstNumber; i <= lastNumber; i++) {
            sum += i;
        }
    }else if (firstNumber > lastNumber) {
        for (let i = firstNumber; i >= lastNumber; i--) {
            sum += i;
        }
    }
    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
