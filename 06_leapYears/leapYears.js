const leapYears = function(year) {
    let divBy400 = true;
    if (year % 100 == 0) {
        if (year % 400 != 0) divBy400 = false;
    }
    return (year % 4 == 0 && divBy400); 
};

// Do not edit below this line
module.exports = leapYears;
