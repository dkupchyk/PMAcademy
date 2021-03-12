export const fetchData = (query, options = {}) => {
    return fetch(query, options)
        .then(res => res.json())
}

export const fetchSixPhotos = (start) => fetchData(`http://jsonplaceholder.typicode.com/photos?_start=${start}&_limit=6`)

export const fetchAlbum = (albumId) => fetchData(`https://jsonplaceholder.typicode.com/photos/${albumId}?_expand=album`)

export const fetchAlbumPhotos = (albumId, start) => fetchData(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}&_start=${start}&_limit=6`)

export const fetchUserInfo = (albumId) => fetchData(`https://jsonplaceholder.typicode.com/albums/${albumId}?_expand=user`)

