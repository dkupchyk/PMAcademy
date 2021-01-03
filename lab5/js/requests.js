const task1 = function () {
    if (valid("ЗАДАНИЕ 1: Введите значения n и m.", 0, task1N.value.length, task1M.value.length)) {
        let min = Math.min(+task1N.value, +task1M.value)
        let max = Math.max(+task1N.value, +task1M.value)

        let rangeArray = "-";
        if (max - min >= 2) {
            rangeArray = range(min, max).join(", ");
        }
        document.getElementById("task-1-answer").innerText = `Ответ: ${rangeArray}`;
    }
}

function range(start, end) {
    return Array(end - start - 1).fill().map((_, idx) => start + idx + 1)
}

const task2 = function () {
    if (valid("ЗАДАНИЕ 2: Введите значения n.", 0, task2N.value.length)) {
        if (task2M.value.length === 0) {
            document.getElementById("task-2-answer").innerText = `Ответ: ${task2Arrow(+task2N.value)}`;
        } else {
            //вызов функции с стрелочным синтаксисом и аналог с function expression
            // document.getElementById("task-2-answer").innerText = "Ответ: " + task2Arrow(+task2N.value, +task2M.value);

            // аналог с function expression
            document.getElementById("task-2-answer").innerText = `Ответ: ${task2FuncExp(+task2N.value, +task2M.value)}`;
        }
    }
}

const task2FuncExp = function (x, y = 2) {
    return x ** y
}
const task2Arrow = (x, y = 2) => x ** y;


let task1N = document.getElementById("task-1-n");
let task1M = document.getElementById("task-1-m");

let task2N = document.getElementById("task-2-n");
let task2M = document.getElementById("task-2-m");

document.getElementById("task-1-button").addEventListener("click", task1);
document.getElementById("task-2-button").addEventListener("click", task2);
