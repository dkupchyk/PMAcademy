let usersHashMap = new HashMap(USERS);
usersHashMap.displayAllUsers();

let task1Id = document.getElementById("task-1-id");
let task2Id = document.getElementById("task-2-id");
let task3Company = document.getElementById("task-3-company");
let task5Id = document.getElementById("task-5-id");
let task5Phone = document.getElementById("task-5-phone");

document.getElementById("task-1-button").addEventListener("click", () => {
    if (valid("ЗАДАНИЕ 1: Введите id пользователя.", 0, task1Id.value.length)) {
        let user = usersHashMap.getUserById(+task1Id.value);

        let answer = `Ответ: `;
        (usersHashMap.hasOwnProperty(task1Id.value))
            ? answer += `<br> { <br> ${usersHashMap.printUser(user)} }`
            : answer += `такого пользователя не существует.`;

        document.getElementById("task-1-answer").innerHTML = answer;
    }
});

document.getElementById("task-2-button").addEventListener("click", () => {
    if (valid("ЗАДАНИЕ 2: Введите id пользователя.", 0, task2Id.value.length)) {
        let user = usersHashMap.getUserById(+task2Id.value);

        let answer = `Ответ: `;
        (usersHashMap.hasOwnProperty(task2Id.value))
            ? answer += `<br> { <br> ${usersHashMap.printUser(user.address)} }`
            : answer += `такого пользователя не существует.`;

        document.getElementById("task-2-answer").innerHTML = answer;
    }
});

document.getElementById("task-3-button").addEventListener("click", () => {
    if (valid("ЗАДАНИЕ 3: Введите компанию.", 0, task3Company.value.length)) {
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
    if (valid("ЗАДАНИЕ 5: Введите правильные значения.", 0, task5Id.value.length, task5Phone.value.length)) {

        const isValidPhone = /^\s*\(\d{3}\) \d{3}-\d{2}-\d{2}\s*$/.test(task5Phone.value);
        let answer = `Ответ: `;

        if (!isValidPhone) {
            answer += `введите валидный номер телефона.`;
        } else {
            usersHashMap.setPhone(+task5Id.value, task5Phone.value)
            answer += `номер телефона успешно изменён.`;
        }

        document.getElementById("task-5-answer").innerHTML = answer;
    }
});
