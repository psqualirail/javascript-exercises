const findTheOldest = function(array) {
    array.sort(function(a, b) {
        if (a.yearOfDeath === undefined) {
            a.yearOfDeath = new Date().getFullYear();
        }
        if (b.yearOfDeath === undefined) {
            b.yearOfDeath = new Date().getFullYear();
        }
        let aAge = a.yearOfDeath - a.yearOfBirth;
        let bAge = b.yearOfDeath - b.yearOfBirth;
        if (aAge > bAge) {
            return -1;
        } else {
            return 1;
        }
    });
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;
