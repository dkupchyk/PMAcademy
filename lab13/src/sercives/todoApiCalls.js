import {fetchData} from "./apiCalls";

export const fetchAllUsers = () => fetchData(`https://jsonplaceholder.typicode.com/users`);

export const fetchUsersToDos = (id) => fetchData(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);


// Селект “User” повинен містити в собі список користувачів (https://jsonplaceholder.typicode.com/users),
// при виборі користувача повинен відображатись список його справ (https://jsonplaceholder.typicode.com/todos?userId={userId}).
// По дефолту повинен бути вибраний перший доступний юзер.
//
//
// Поле Type new todo here призначене для створення нової справи. По кнопці Add повинен відрпавлятись запит POST
// https://jsonplaceholder.typicode.com/todos
// і нова справа повинна бути додана до списку.
//
//
// По кліку на “x” в компоненті справи, справа повинна бути відмічена як виконана і повинен відпрівитись запит на PATCH
// https://jsonplaceholder.typicode.com/todos/{todoId}
// з відповідними змінами.
//
