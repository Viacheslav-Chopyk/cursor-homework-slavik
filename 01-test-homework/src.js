const apple = 15.678, banan = 123.965, ananas = 90.2345



let maxNum = Math.max(apple, banan, ananas);
let minNum = Math.min(apple, banan, ananas);
let sumProduct = apple + banan + ananas;
let sumProductFloor = Math.floor(apple) + Math.floor(banan) + Math.floor(ananas);
let discount = Math.random();
let priceDiscount = sumProduct - (sumProduct * discount);
let profit = priceDiscount - (sumProduct / 2);

document.querySelector('.price').innerHTML =
    (`<ol>
    <ul>Найбільше число: ${maxNum}</ul>
    <ul>Найменше число: ${minNum}</<ul>>
    <ul>Сума всіх товарів: ${sumProduct}</<ul>>
    <ul>Сума всіх товарів округлена: ${sumProductFloor}</ul>
    <ul>Сума округлена до сотень: ${(Math.ceil(sumProductFloor / 100)) * 100}</ul>
    <ul>Чи парне число: ${sumProductFloor % 2 == 0}</li>
    <ul>Решта з 500 грн складає: ${(500 - sumProduct).toFixed(2)}</ul>
    <ul>Середнє значення цін: ${((apple + banan + ananas) / 3).toFixed(2)}</ul>
    <ul>Ваша знижка складає: ${(discount * 100).toFixed(0)}%!!!</ul>
    <ul>Cума зі знижкою: ${priceDiscount.toFixed(2)}</ul>
    <ul>Чистий прибуток складає: ${profit.toFixed(2)}</ul>
    </ol>`);