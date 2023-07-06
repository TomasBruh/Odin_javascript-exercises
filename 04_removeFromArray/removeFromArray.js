const removeFromArray = function(arrayToRemoveStuffFrom) {
    const thingsToRemove = Array.prototype.slice.call(arguments, 1);
    if(thingsToRemove[0] == null || thingsToRemove[0] == "" || thingsToRemove[0] == undefined)
    {
        return arrayToRemoveStuffFrom;
    }
    for(let thingToRemove of thingsToRemove)
    {
        for(let i = 0; i < arrayToRemoveStuffFrom.length; i++)
        {
            if(arrayToRemoveStuffFrom[i] === thingToRemove)
            {
                arrayToRemoveStuffFrom.splice(i, 1);
            }
        }
    }
    
    return arrayToRemoveStuffFrom;
};
removeFromArray([1, 2, 3, 4], 3, 2);
// Do not edit below this line
module.exports = removeFromArray;
