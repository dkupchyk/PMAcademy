let usersHashMap = {};

USERS.forEach(user => {
    usersHashMap[user.id] = {
        id: user.id,
        name: user.name,
        username: user.username,
        email: user.email,
        registrationDate: user.registrationDate,
        address: {
            street: user.address.street,
            suite: user.address.suite,
            city: user.address.city,
            zipcode: user.address.zipcode,
            geo: {
                lat: user.address.geo.lat,
                lng: user.address.geo.lng
            }
        },
        phone: user.phone,
        website: user.website,
        company: {
            name: user.company.name,
            catchPhrase: user.company.catchPhrase,
            bs: user.company.bs
        }
    };
})


for (let x in usersHashMap) {
    console.log('Key:\n—- ' + x + '\n');
    console.log('Values: ');
    let value = usersHashMap[x];
    for (let y in value) {
        console.log('—- ' + y + ':' + value[y]);
    }
    console.log('\n');
}

const printUser = function (obj, spaces = 1) {
    let string = '';

    let space = `\xa0`.repeat(4 * spaces);

    for (let prop in obj) {
        string += space;

        if (typeof obj[prop] === 'object') {
            string += `<span class="property">${prop}</span>: { </br> ${printUser(obj[prop], spaces + 1)}`;
            string += `${space}} </br>`;
        } else {
            string += `<span class="property">${prop}</span> : ${obj[prop]}; </br>`;
        }
    }

    return string;
}


// TASK 1
// Запросить у пользователя id - вывести данные по пользователю.

let task1Id = document.getElementById("task-1-id");
let task2Id = document.getElementById("task-2-id");

document.getElementById("task-1-button").addEventListener("click", () => {
    if (valid("ЗАДАНИЕ 1: Введите id пользователя.", 0, task1Id.value.length)) {
        let user = usersHashMap[task1Id.value];
        console.log(printUser(user))

        let answer = `Ответ: `;
        (usersHashMap.hasOwnProperty(task1Id.value))
            ? answer += `<br> { <br> ${printUser(user)} }`
            : answer += `такого пользователя не существует.` ;

        document.getElementById("task-1-answer").innerHTML = answer;
    }
});

document.getElementById("task-2-button").addEventListener("click", () => {
    if (valid("ЗАДАНИЕ 2: Введите id пользователя.", 0, task2Id.value.length)) {
        let user = usersHashMap[task2Id.value];

        let answer = `Ответ: `;
        (usersHashMap.hasOwnProperty(task2Id.value))
            ? answer += `<br> { <br> ${printUser(user.address)} }`
            : answer += `такого пользователя не существует.` ;

        document.getElementById("task-2-answer").innerHTML = answer;
    }
});