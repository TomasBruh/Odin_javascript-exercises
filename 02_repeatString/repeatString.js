const repeatString = function(word, nrOfTimes) {
    if (nrOfTimes < 0)
    {
        return "ERROR";
    }
    let stringToRepeat = "";
    for(nrOfTimes; nrOfTimes > 0; nrOfTimes--)
    {
        stringToRepeat = stringToRepeat.concat(word);
    }
    return stringToRepeat;
};

// Do not edit below this line
module.exports = repeatString;
