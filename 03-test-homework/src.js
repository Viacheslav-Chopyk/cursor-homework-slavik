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