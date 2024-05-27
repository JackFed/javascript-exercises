const removeFromArray = function(arr, ...theArgs) {
    for ( let j = 0; j < theArgs.length; j++) {
        let arg = theArgs[j];
        let i = 0;
        while ( i < arr.length ) {
            if (arr[i] === theArgs[j]) {
                arr.splice(i, 1)
                i--;
            }
            i++;
        }

    }
    return arr;
};

removeFromArray([1, 2, 2, 3], 2)

// Do not edit below this line
module.exports = removeFromArray;
