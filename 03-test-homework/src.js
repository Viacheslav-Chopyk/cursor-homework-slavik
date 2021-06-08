// Task 1 Створити функцію getMaxDigit(number) – яка отримує будь-яке число та виводить найбільшу цифру в цьому числі. 
// Приклади: 1236 -> 6, 987 -> 9, 385 -> 8

function getMaxDigit(number) {
    if (number == 0) {
        return 0;
    }
    else {
        return Math.max(number % 10, getMaxDigit(number / 10))
    }
}
console.log(getMaxDigit(472658));

// Task 2 Створити функцію, яка визначає ступінь числа. Не використовуючи Math.pow та **. Використовуйте цикл

function getPowOfNumber(x, n) {
    let result = 1;
    for (let i = 0; i < n; i++) {
        result = result * x;
    }
    return result;
}
console.log(getPowOfNumber(2, 10));

// Task 3 Створити функцію, яка форматує ім'я, роблячи першу букву великою. ("влад" -> "Влад", "вЛАД" -> "Влад" і так далі);

function ucFirst(str) {
    if (!str) return str;

    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}
console.log(ucFirst('sLaVik'));

// Task 4 Створити функцію, яка вираховує суму, що залишається після оплати податку від зарабітньої плати. 
//(Податок = 18% + 1.5% -> 19.5%). Приклад: 1000 -> 805

function getSumAfterTax(salary, rate) {
    let taxesCoefficient = (1 - rate / 100);
    let revenue = salary * taxesCoefficient;
    return revenue;
}
console.log(getSumAfterTax(500, 19.5))

// Task 5 Створити функцію, яка повертає випадкове ціле число в діапазоні від N до M. 
// Приклад: getRandomNumber(1, 10) -> 5

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}
console.log(getRandomNumber(1, 10))