const leapYears = function(givenYear) {
    if(givenYear % 100 == 0)
    {
        if(givenYear % 400 == 0)
        {
            return true;
        }
        return false;
    }
    if(givenYear % 4 == 0)
    {
        return true;
    }
    return false;
    
};
leapYears(700);
// Do not edit below this line
module.exports = leapYears;
