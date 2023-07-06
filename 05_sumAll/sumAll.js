const sumAll = function(sumFrom, sumTo) {
    if(sumFrom < 0 || sumTo < 0)
    {
        return "ERROR";
    }
    else if(!Number.isInteger(sumFrom) || !Number.isInteger(sumTo))
    {
        return "ERROR";
    }
    let sumOfBetween = 0;
    if (sumFrom > sumTo)
    {  
        let temp = sumFrom;
        sumFrom = sumTo;
        sumTo = temp;
    }
    for(let i = sumFrom; i <= sumTo; i++)
    {
            sumOfBetween += i;
    }
    return sumOfBetween;
};
// Do not edit below this line
module.exports = sumAll;
