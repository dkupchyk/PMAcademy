export const fetchData = (query, options={}) => {
    return fetch(query, options)
        .then(res => res.json())
}

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

export const fetchPhotos = (offset) => fetchData(`https://jsonplaceholder.typicode.com/photos?_offset=${offset}&_limit=6`)
