const fibonacci = function(n) {
    let num = Number(n);
    if (num < 0) {
        return "OOPS";
    } else if ( num === 0 ){
        return 0;
    }
    let nth = 1;
    let last = 0;
    while( num > 1 ){
        const temp = nth;
        nth += last;
        last = temp;
        num--;
    }
    return nth;
};

// Do not edit below this line
module.exports = fibonacci;
