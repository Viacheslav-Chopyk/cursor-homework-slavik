// Task 1----------------

function getMaxDigit(number) {
    if (number == 0) {
        return 0;
    }
    else {
        return Math.max(number % 10, getMaxDigit(number / 10))
    }
}
console.log(getMaxDigit(472658));

// Task 2 -----------------

function getPowOfNumber(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}
console.log(getPowOfNumber(2, 2));