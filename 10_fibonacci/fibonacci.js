const fibonacci = function(n) {
    const array = [1, 1];
    if (n <= 0) return "OOPS";
    if (n <= 2) return array[n-1];
    for (let i=3; i<=n; i++) {
        array.push(array[i-3] + array[i-2]);
    }
    return array[n-1];
};

// Do not edit below this line
module.exports = fibonacci;
