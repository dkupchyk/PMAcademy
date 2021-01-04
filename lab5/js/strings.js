const task5 = function () {
    if (valid("ЗАДАНИЕ 5: Введите значения строк.", 0, task5N.value.length, task5M.value.length)) {
        let sourceStr = task5N.value;
        let searchStr = task5M.value;

        let indexes = [...sourceStr.matchAll(new RegExp(searchStr, 'g'))].map(a => a.index);
        let amount = indexes.length;
        let indexesStr = (amount === 0) ? " - " : indexes.join(", ");

        document.getElementById("task-5-answer").innerText = `Всего: ${amount}\nИндексы: ${indexesStr}`;
    }
}

const task6 = function () {
    if (valid("ЗАДАНИЕ 6: Введите значение строки.", 0, task6N.value.length)) {
        let sourceStr = task6N.value;

        let indexes = [...sourceStr.matchAll(new RegExp(/[0-9]+/, 'g'))];
        let answer = (indexes.length === 0) ? " - " : indexes.join(", ");

        document.getElementById("task-6-answer").innerText = `Ответ: ${answer}`;
    }
}

const task7 = function () {
    if (valid("ЗАДАНИЕ 7: Введите значение строки.", 0, task7N.value.length)) {
        let sourceStr = task7N.value;

        let indexes = [...sourceStr.matchAll(new RegExp(/[A-Z]/, 'g'))];
        let answer = (indexes.length === 0) ? " - " : indexes.join(", ");

        document.getElementById("task-7-answer").innerText = `Ответ: ${answer}`;
    }
}


let task5N = document.getElementById("task-5-n");
let task5M = document.getElementById("task-5-m");

let task6N = document.getElementById("task-6-n");

let task7N = document.getElementById("task-7-n");

document.getElementById("task-5-button").addEventListener("click", task5);
document.getElementById("task-6-button").addEventListener("click", task6);
document.getElementById("task-7-button").addEventListener("click", task7);
