let n;
let m;
let skipNumbers;
let summNumbers = 0;

function counter() {
    do {
        n = +prompt('Enter 1st number:');
        m = +prompt('Enter 2nd number:');
    } while ((isNaN(n) || isNaN(m)) ||
        (n !== parseInt(n) || m !== parseInt(m)));

    skipNumbers = confirm('Do you want to skip even numbers?');

    let minNumber = Math.min(n, m);
    let maxNumber = Math.max(n, m);

    for (minNumber; minNumber <= maxNumber; minNumber++) {
        if (skipNumbers) {
            if (minNumber % 2 === 0) {
                continue;
            }
            summNumbers += minNumber;
        } else {
            summNumbers += minNumber;
        }
    }
    document.querySelector('.container').innerHTML = summNumbers;

}
counter();