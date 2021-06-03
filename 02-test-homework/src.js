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

