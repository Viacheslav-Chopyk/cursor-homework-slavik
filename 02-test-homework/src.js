<<<<<<< HEAD
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
=======
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

if(addEvenNumber){
    for(let i= n; i<=m; i++){
    sum +=i;
    }return sum;
}
    else{
        for(let i= n; i<=m; i++){
            if(!(i%2==0)){
            sum+=i;
            }
            return sum;
        }
    }
    document.querySelector('.sumcount').innerHTML = sum;
}

>>>>>>> e34d98043f8395ce94f76d6ac7a4d3e400888dd9
