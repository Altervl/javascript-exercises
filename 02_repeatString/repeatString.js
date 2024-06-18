const repeatString = function(string, times) {
    let str = string;
    if (times > 0) {
        for (i = 1; i < times; i++) {
            str += string;
        };
    } else if (times < 0) {
        str = "ERROR";
    }  else {
        str = "";
    };
    return str;
};

// Do not edit below this line
module.exports = repeatString;
