// Задание 1
// Запросить у пользователя два числа, n и m - вывести все числа в диапазоне между ними.

document.getElementById("task-1-button").addEventListener("click", task1);

let task1N = document.getElementById("task-1-n");
let task1M = document.getElementById("task-1-m");

function task1() {
    let min = Math.min(+task1N.value, +task1M.value)
    let max = Math.max(+task1N.value, +task1M.value)

    let rangeArray = range(min, max)
    document.getElementById("task-1-answer").innerText = "Ответ: " + rangeArray.join(", ");
}

function range(start, end) {
    return Array(end - start - 1).fill().map((_, idx) => start + idx + 1)
}
