let n, m;
let skipNum;
let sumNumbers = 0;

function counter() {
    do {
        n = +prompt('Enter 1st number:');
        m = +prompt('Enter 2nd number:');
    } while ((isNaN(n) || isNaN(m)) ||
        (n !== parseInt(n) || m !== parseInt(m)));

    skipNum = confirm('Do you want to skip even numbers?');

    let minNumber = Math.min(n, m);
    let maxNumber = Math.max(n, m);

    for (minNumber; minNumber <= maxNumber; minNumber++) {
        if (skipNum) {
            if (minNumber % 2 === 0) {
                continue;
            }
            sumNumbers += minNumber;
        } else {
            sumNumbers += minNumber;
        }
    }
    document.querySelector('.container').innerHTML = sumNumbers;

}
counter();