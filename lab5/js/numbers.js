const task3 = function () {
    if (task3N.value.length === 0 || task3M.value.length === 0) {
        alert("ЗАДАНИЕ 3: Введите значения чисел.")
    } else {
        let first = Math.round(+task3N.value * 0.3);
        let second = Math.round(+task3M.value * 0.3);
        
        document.getElementById("task-3-answer").innerText = "Ответ: " + first + " и " + second;
    }
}

const task4 = function () {
    if (task4N.value.length === 0 || task4M.value.length === 0) {
        alert("ЗАДАНИЕ 4: Введите значения чисел.")
    } else {
        let min = Math.min(+task4N.value, +task4M.value)
        let max = Math.max(+task4N.value, +task4M.value)

        let rangeArr = range(min, max);
        let random = rangeArr[Math.floor(Math.random() * rangeArr.length)];

        document.getElementById("task-4-answer").innerText = "Ответ: " + random;
    }
}

let task3N = document.getElementById("task-3-n");
let task3M = document.getElementById("task-3-m");

let task4N = document.getElementById("task-4-n");
let task4M = document.getElementById("task-4-m");

document.getElementById("task-3-button").addEventListener("click", task3);
document.getElementById("task-4-button").addEventListener("click", task4);
