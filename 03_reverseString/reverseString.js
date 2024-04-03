const reverseString = function(string) {

    let reversed = '';
    for (let i = string.length-1; i >= 0; i--) {
        reverseContainer = string.at(i);
        reversed += reverseContainer;
    } 
    return reversed;
};

console.log(reverseString('hello'))

// Do not edit below this line
module.exports = reverseString;
