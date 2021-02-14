const fetchUsers = (username) => fetchData(`https://api.github.com/users/${username}?`);

const fetchUserRepos = (username) => fetchData(`https://api.github.com/users/${username}/repos?`);

const fetchUserFollowers = (username) => fetchData(`https://api.github.com/users/${username}/followers?`);

const fetchData = async (url) => {
    showLoading();

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
