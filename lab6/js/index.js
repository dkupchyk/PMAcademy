let usersHashMap = new Hashmap(USERS);
usersHashMap.displayAllUsers();

// HashMap
let task1Id = document.getElementById("task-1-id");
let task2Id = document.getElementById("task-2-id");
let task3Company = document.getElementById("task-3-company");
let task5Id = document.getElementById("task-5-id");
let task5Phone = document.getElementById("task-5-phone");

// Arrays
let task6Array = document.getElementById("task-6-array");
let task6Number = document.getElementById("task-6-number");
let task7Array1 = document.getElementById("task-7-array-1");
let task7Array2 = document.getElementById("task-7-array-2");
let task8Array1 = document.getElementById("task-8-array-1");
let task8Array2 = document.getElementById("task-8-array-2");
let task8Index = document.getElementById("task-8-index");


document.getElementById("task-1-button").addEventListener("click", () => {
    if (valid("HASHMAP | ЗАДАНИЕ 1: Введите id пользователя.", 0, task1Id.value.length)) {
        let user = usersHashMap.getUserById(+task1Id.value);

        let answer = `Ответ: `;
        (usersHashMap.hasOwnProperty(task1Id.value))
            ? answer += `<br> { <br> ${usersHashMap.printUser(user)} }`
            : answer += `такого пользователя не существует.`;

        document.getElementById("task-1-answer").innerHTML = answer;
    }
});

document.getElementById("task-2-button").addEventListener("click", () => {
    if (valid("HASHMAP | ЗАДАНИЕ 2: Введите id пользователя.", 0, task2Id.value.length)) {
        let user = usersHashMap.getUserById(+task2Id.value);

        let answer = `Ответ: `;
        (usersHashMap.hasOwnProperty(task2Id.value))
            ? answer += `<br> { <br> ${usersHashMap.printUser(user.address)} }`
            : answer += `такого пользователя не существует.`;

        document.getElementById("task-2-answer").innerHTML = answer;
    }
});

document.getElementById("task-3-button").addEventListener("click", () => {
    if (valid("HASHMAP | ЗАДАНИЕ 3: Введите компанию.", 0, task3Company.value.length)) {
        const filtered = usersHashMap.filterByCompanyName(task3Company.value);

        let answer = `Ответ: `;
        if (Object.keys(filtered).length === 0) {
            answer += `такого пользователя не существует.`;
        } else {
            for (let user in filtered) {
                answer += `<br> { <br> ${usersHashMap.printUser(filtered[user])} } <br>`
                answer += `<p class="centered">==========</p><br>`;
            }
        }

        document.getElementById("task-3-answer").innerHTML = answer;
    }
});

document.getElementById("task-4-button").addEventListener("click", () => {
    for (let user in usersHashMap) {
        Object.defineProperty(usersHashMap[user], 'id', {
            configurable: false,
            writable: false
        });
    }
});

document.getElementById("task-5-button").addEventListener("click", () => {
    if (valid("HASHMAP | ЗАДАНИЕ 5: Введите правильные значения.", 0, task5Id.value.length, task5Phone.value.length)) {
        let answer = `Ответ: `;
        const isValidPhone = /^\s*\(\d{3}\) \d{3}-\d{2}-\d{2}\s*$/.test(task5Phone.value);

        if (!usersHashMap.hasOwnProperty(task5Id.value)) {
            answer += `такого пользователя не существует.`
        } else if (!isValidPhone) {
            answer += `введите валидный номер телефона.`;
        } else {
            usersHashMap.setPhone(+task5Id.value, task5Phone.value)
            answer += `номер телефона успешно изменён.`;
        }

        document.getElementById("task-5-answer").innerHTML = answer;
    }
});

document.getElementById("task-6-button").addEventListener("click", () => {
    if (valid("ARRAYS | ЗАДАНИЕ 1: Введите правильные значения.", 0, task6Array.value.length, task6Number.value.length)) {
        document.getElementById("task-6-answer").innerText = `Ответ: [${findIndexes(toNumArray(task6Array), +task6Number.value)}]`;
    }
});

document.getElementById("task-7-button").addEventListener("click", () => {
    if (valid("ARRAYS | ЗАДАНИЕ 2: Введите правильные значения.", 0, task7Array1.value.length, task7Array2.value.length)) {
        document.getElementById("task-7-answer").innerText = `Ответ: [${intersection(toNumArray(task7Array1), toNumArray(task7Array2))}]`;
    }
});

document.getElementById("task-8-button").addEventListener("click", () => {
    if (valid("ARRAYS | ЗАДАНИЕ 3: Введите правильные значения.", 0, task8Array1.value.length, task8Array2.value.length, task8Index.value.length)) {
        +task8Index.value < 0
            ? document.getElementById("task-8-answer").innerText = `Ответ: -`
            : document.getElementById("task-8-answer").innerText = `Ответ: [${insertion(toNumArray(task8Array1), toNumArray(task8Array2), +task8Index.value)}]`;
    }
});

console.log("---------------------------------------- Отсортировать массив из первого задания в порядке убывания id ----------------------------------------")
console.log(orderByID(USERS))

console.log("-------------------- Отсортировать массив из первого задания в порядке убывания даты регистрации (registrationDate) ----------------------------")
console.log(orderByRegDate(USERS))
