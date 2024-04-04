const sumAll = function(firstNumber, lastNumber) {
    if (firstNumber < 0 || lastNumber < 0) return "ERROR";
    if (!Number.isInteger(firstNumber) || !Number.isInteger(lastNumber)) return 'ERROR'
    if (firstNumber > lastNumber) {
        const temp = firstNumber;
        firstNumber = lastNumber;
        lastNumber = temp;
    }

    let sum = 0; 
    for (i = firstNumber; i <= lastNumber; i++) {
        sum += i;
    }
    return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
