const usernameValue = document.getElementById('username');
const searchButton = document.getElementById('searchButton');

const infoContainer = document.getElementById('container__user')

const fetchUsers = (username) => {
    return fetchData(`https://api.github.com/users/${username}?`);
}

const fetchUserRepos = (username) => {
    return fetchData(`https://api.github.com/users/${username}/followers?`);
}

const fetchUserFollowers = (username) => {
    return fetchData(`https://api.github.com/users/${username}/repos?`);
}

const fetchData = async (url) => {
    return fetch(url).then(response => {
        if (response.ok) {
            return Promise.resolve(response.json())
        } else {
            let error = new Error(response.statusText || response.status)
            error.response = response
            return Promise.reject(error)
        }
    })
}

const showData = (data) => {
    infoContainer.innerHTML = `<img class="container__user-avatar" src="${data.avatar_url}" alt="avatar">`
}

const showError = (data) => {
    infoContainer.innerHTML = `<p class="error">There is no such user...<p>`;
}

const processData = () => {
    fetchUsers(usernameValue.value)
        .then(response => {
            showData(response);
        })
        .catch(response => {
            showError(response);
        })
}

searchButton.addEventListener('click', () => {
    processData();
})
