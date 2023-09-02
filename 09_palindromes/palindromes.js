const palindromes = function (s) {
    const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleanString.split("").reverse().join("") == cleanString;
};

// Do not edit below this line
module.exports = palindromes;
