const removeFromArray = function(arrayToRemoveStuffFrom) {
    const args = Array.prototype.slice.call(arguments, 1);
    removeStuffFromString = arrayToRemoveStuffFrom.join("\nTEST\n"); //in order to use .replace()
    for(let thingToRemove of args)
    {
        removeStuffFromString = removeStuffFromString.replaceAll(thingToRemove, "");
    }
    return removeStuffFromString.split("\nTEST\n");
};

// Do not edit below this line
module.exports = removeFromArray;
