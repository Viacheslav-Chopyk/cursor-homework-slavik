let n, m;
let sum = 0;

function inputN() {
    do {
        n = +prompt("Enter first integer number");
    } while ((Object.is(NaN, n) === true) || (n !== parseInt(n)))
}
function inputM() {
    do {
        m = +prompt("Enter last number integer");
    } while ((Object.is(NaN, m) === true) || (m !== parseInt(m)))
}

inputN();
inputM();


let addEvenNumber = confirm('Add Even numbers?');

for (n; n <= m; n++) {
    if (addEvenNumber) {
        if (n % 2 === 0) {
            continue;
        }
        sum += n;
    } else {
        sum += n;
    }
    document.querySelector('.sumcount').innerHTML = sum;
}

