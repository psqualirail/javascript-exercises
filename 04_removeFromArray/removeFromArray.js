const removeFromArray = function(a, ...toBeRemoved) {
    for (const toRemove of toBeRemoved) {
        a = a.filter(element => element !== toRemove)
    }
    return a;
};

// Do not edit below this line
module.exports = removeFromArray;
