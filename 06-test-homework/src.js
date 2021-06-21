const students = [{
    name: "Tanya",
    course: 3,
    subjects: {
        math: [4, 4, 3, 4],
        algorithms: [3, 3, 3, 4, 4, 4],
        data_science: [5, 5, 3, 4]
    }
}, {
    name: "Victor",
    course: 4,
    subjects: {
        physics: [5, 5, 5, 3],
        economics: [2, 3, 3, 3, 3, 5],
        geometry: [5, 5, 2, 3, 5]
    }
}, {
    name: "Anton",
    course: 2,
    subjects: {
        statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
        english: [5, 3],
        cosmology: [5, 5, 5, 5]
    }
}];

// 1. Task Створіть функцію getSubjects(students[0] --> ["Math", "Algorithms", "Data science"] - яка повертає список предметів для конкретного студента. 
/// Зверніть увагу – назву предмету необхідно повертати з великої літери, а _ – замінити на пробіл

function getSubjects(students) {
    let listSubjects = Object.keys(students.subjects);

    listSubjects = listSubjects.map((item) => {
        return item[0].toUpperCase() + item.slice(1).replaceAll("_", "-");
    });

    return listSubjects;
}

console.log(getSubjects(students[0]));


// 2. Створіть функцію getAverageMark(students[0]) --> 3.79 – яка поверне середню оцінку по усім предметам для переданого студента НЕ МАСИВА СТУДЕНТІВ. 
// Оцінку округліть до 2ого знаку. Можна використовувати функції, написані у попередніх домашніх завданнях :)

function getAverageMark(students) {
    const studentSubjects = students.subjects;
    const allMarks = [];

    for (subject in studentSubjects) allMarks.push(...studentSubjects[subject]);

    let marksSum = allMarks.reduce((total, prev) => total + prev, 0);
    let marksCount = allMarks.length;

    return +(marksSum / marksCount).toFixed(2);
}
console.log(getAverageMark(students[0]));

// Task 3. Створіть функцію getStudentInfo(students[0]) --> { "course": 3, "name": "Tanya", "averageMark": 3.79} – яка повертає інформацію загального виду по переданому студенту (вам знадобиться функція з попереднього завдання). 
// Пoвинна бути виведена інформація: курс, ім'я, середня оцінка.

function getStudentInfo(students) {
    const { course, name } = students;
    const averageMark = getAverageMark(students);
        return { course, name, averageMark };

}
console.log(getStudentInfo(students[0]));

// Task 4. Ствроіть функцію getStudentsNames(students) --> ["Anton", "Tanya, "Victor"] – яка повертає імена студентів у алфавітному порядку.

const getStudentsNames = students => students.map(student => student.name).sort();
console.log(getStudentsNames(students));

// Task 5. Створіть функцію getBestStudent(students) --> "Anton" – яка повертає кращого студента зі списку по показнику середньої оцінки.

function getBestStudent(students) {
    const maxAverage = Math.max(...students.map(student => getAverageMark(student)));
    const bestStudents = [];
        for (student of students) if (maxAverage === getAverageMark(student)) bestStudents.push(student.name);

    return bestStudents;
}
console.log(getBestStudent(students));

// Task 6. Створіть функцію calculateWordLetters("тест") --> { "т": 2, "е": 1, "с": 1 } – яка повертає обє'кт, в якому ключі це букви у слові, а значення – кількість їх повторень.

function calculateWordLetters(str) {

}
