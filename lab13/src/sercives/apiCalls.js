export const fetchData = (query, options={}) => {
    return fetch(query, options)
        .then(res => res.json())
        .then(result => result);
}
