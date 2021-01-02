const task5 = function () {
    const sourceStr = task5N;
    const searchStr = task5M;
    const indexes = [...sourceStr.matchAll(new RegExp(searchStr, 'gi'))].map(a => a.index);
    console.log(indexes); // [2, 25, 27, 33]
}

let task5N = document.getElementById("task-5-n");
let task5M = document.getElementById("task-5-m");

// let task2N = document.getElementById("task-2-n");
// let task2M = document.getElementById("task-2-m");

document.getElementById("task-5-button").addEventListener("click", task5);
// document.getElementById("task-6-button").addEventListener("click", task6);
