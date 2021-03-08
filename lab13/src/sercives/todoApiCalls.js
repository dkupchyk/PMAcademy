import {fetchData} from "./apiCalls";

export const fetchAllUsers = () => fetchData(`https://jsonplaceholder.typicode.com/users`);

export const fetchUsersToDos = (id) => fetchData(`https://jsonplaceholder.typicode.com/todos?userId=${id}`);

export const postToDo = (userId, text) => fetch('https://jsonplaceholder.typicode.com/todos', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({userId: userId, title: text, completed: false})
});

export const patchToDo = (todoId, isComplete) => fetchData(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
    method: 'PATCH',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({completed: isComplete})
});
