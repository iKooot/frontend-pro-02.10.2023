function calculationAverage(array) {
    const numericValues = array.filter( function(el) {
        return typeof el === 'number';
    });

    if (!numericValues.length) return 0

    const sum = numericValues.reduce(function(acc, el) {
        return acc + el;
    }, 0);

    return sum / numericValues.length;
}

const array = [ "string", "string", 5, "string", 10, 5 ];

console.log(calculationAverage(array))