const sumAll = function(num1, num2) {
    if ((typeof(num1) != "number") || (typeof(num2) != "number") || (num1 < 0) || (num2 < 0)) {
             return 'ERROR';
    }
    let low = Math.min(num1, num2);
    let high = Math.max(num1, num2);
    let sum = 0;
    for (low; low <= high; low++) {
        sum += low;
    }

    return sum;
};



// Do not edit below this line
module.exports = sumAll;
