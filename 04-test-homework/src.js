const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];
const themes = ["Диференційне рівняння", "Теорія автоматів", "Алгоритми і структури даних"];
const marks = [4, 5, 5, 3, 4, 5];


// Task 1 Розділіть студентів на пари(хлопець + дівчина) для работи над проєктом.
// У вас повинен вийти вкладений масив з парами студентів: [["Олександр", "Олена"], [..], [...]];

function getPairs(arr) {
    const sudentsPairs = [];
    sudentsPairs.push([arr[0], arr[2]]);
    sudentsPairs.push([arr[1], arr[3]]);
    sudentsPairs.push([arr[4], arr[5]]);
    return sudentsPairs;

}
console.log(getPairs(students));

// Task 2 Зіставте пари з попереднього завдання та теми проєктів, над якими студенти будуть працювати. 
// Повинен вийти вкладений масив виду: [["Олександр і Олена", "Теорія автоматів"], [...], [...]]

function devideThemes() {
    const groups = [];
    const pairs = getPairs(students);
    pairs.forEach((item, index) => {
        item = item.join(' i ');
        groups.push([item, themes[index]]);
    });
    return groups;

}
console.log(devideThemes());

// Task 3 Зіставте оцінки(marks) зі студентом(students): [["Саша", 4], [...], [...]]

function setMarks(arr) {
    const markedStudents = [];
    arr.forEach((item, index) => {
        markedStudents.push([item, marks[index]])
    });
    return markedStudents;

}
console.log(setMarks(students));

//  Task 4 Поставте кожній парі випадкову оцінку(від 1 до 5) за проєкт(тут функція буде нечистою, але не повинна мутувати массив): [["Олександр і Олена", "Теорія автоматів", 5], [...], [...]]

function getRandomtMarks() {
    const randomMark = devideThemes();
    randomMark.forEach((item) => {
        item.push(Math.ceil(Math.random() * 5));
    });
    return randomMark;
}
console.log(getRandomtMarks());
