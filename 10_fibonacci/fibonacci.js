const fibonacci = function(num) {
    num = parseInt(num);
    if (num === 0) {
        return 0;
    } else if (num < 0) {
        return "OOPS";
    } else {
    const arr = [1, 1];
        for (i = 2; i < num; i++) {
            arr.push(arr.at(-1) + arr.at(-2));
        };
        return arr.at(-1);
    };
};

fibonacci(4);

// Do not edit below this line
module.exports = fibonacci;
