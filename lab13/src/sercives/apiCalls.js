export const fetchData = (query) => {
    return fetch(query)
        .then(res => res.json())
        .then(result => result);
}
