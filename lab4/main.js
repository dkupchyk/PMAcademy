// --- Задание 1 --------------------------------------------------
// Укажи с объяснением в комментариях что выведет каждое выражение.

console.log(2 + "2" == "2" + 2);
console.log(2 + "3" == "3" + 2);
console.log("3" + "2" == 3 + 2);
console.log("3" + "2" == "3" + 2);
console.log("3" + "2" == 2 + "3");
console.log(2 + Number("3") == Number("3") + 2);

console.log(12 / "6");
console.log("number" + 15 + 3);
console.log(15 + 3 + "number");
console.log([1] > null);
console.log("foo" + + "bar");
console.log('true' == true);
console.log(false == 'false');
console.log(null == '');
console.log(!!"false" == !!"true");
console.log(['x' == 'x']);

// --- Задание 2 ----------------------------------------------------
// Укажи с объяснением в комментариях что выведет каждое выражение.

const enemy = {
    name: "Bob"
}

const friend = {
    name: "Alex"
}

const me = friend

me.name = "Bob"

console.log(friend.name)
console.log(me == friend)
console.log(me == enemy)

// --- Задание 3 ----------------------------------------------------
// Запросить у пользователя номер месяца через prompt.
// Проверить тип, если пользователь ввел строку, то принимать значения “January, February etc.”
// Выводить  alert с номер этого месяца (January = 1);
// Если же введено было число - кидать в alert наименование месяца (введено 1 - вывести January);
// По желанию  - сделать задачу с минимальным использованием switch/case.

