const removeFromArray = function(array, ...items) {
    for (let item of items) {
        let itemIndex = array.indexOf(item);
        array.splice(itemIndex, 1);
    }
    return array;
};

removeFromArray([1,2,3,4], 3, 2);

// Do not edit below this line
module.exports = removeFromArray;
