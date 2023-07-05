const reverseString = function(stringToReverse) {
    let arrayOfChars = stringToReverse.split("");
    arrayOfChars.reverse();
    return arrayOfChars.join("");
};

// Do not edit below this line
module.exports = reverseString;
