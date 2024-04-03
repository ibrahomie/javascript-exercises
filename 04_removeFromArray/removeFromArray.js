const removeFromArray = function(array, item) {
    let itemIndex = array.indexOf(item);
    array.splice(itemIndex, 1);
    return array
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
