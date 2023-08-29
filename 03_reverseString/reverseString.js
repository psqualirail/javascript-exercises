const reverseString = function(s) {
    let arr = [];
    for (let i = s.length-1; i >= 0; i--) {
        arr.push(s[i]);
    }
    return arr.join('');
};

// Do not edit below this line
module.exports = reverseString;
