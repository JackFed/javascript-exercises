const repeatString = function(word, amount) {
    let i = 0;
    let str = "";
    if (amount < 0) {
        str = "ERROR";
    }
    while (i < amount) {
        str = str.concat("", word);
        i += 1;
    }
    return str;
};

// Do not edit below this line
module.exports = repeatString;
