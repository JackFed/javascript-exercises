const reverseString = function(str) {
    let i = 0;
    output = ""
    while (i < str.length) {
        output = output.concat(str[str.length - 1 - i])
        i += 1;
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
