const reverseString = function(string) {
    const reversed = [];
    for (char of string.split("")) {
        reversed.unshift(char);
    };
    return reversed.join("");
};

// Do not edit below this line
module.exports = reverseString;
