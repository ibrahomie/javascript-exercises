const removeFromArray = function(array, ...items) {
     for (let item of items) {
        for (let i = array.length; i >= 0; i--) {
            if (array[i] === item) {
                spliced = array.splice(i, 1);
            }   
        }
    }
    return array;
};

removeFromArray([1,2,3,4], 3, 2);

console.log(removeFromArray([1,2,2,3], 2));

// Do not edit below this line
module.exports = removeFromArray;
