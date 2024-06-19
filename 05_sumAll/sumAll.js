const sumAll = function(arg1, arg2) {
    if ((arg1 < 0 || arg2 < 0) 
     || (typeof arg1 !== "number" || typeof arg2 !== "number")) {
        return "ERROR";
    };

    let sum = 0;
    let start = 0;
    let end = 0;

    if (arg1 > arg2) {
        start = arg2;
        end = arg1;
    } else {
        start = arg1;
        end = arg2;
    };

    for (i = start; i <= end; i++) {
        sum += i;
    };

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
