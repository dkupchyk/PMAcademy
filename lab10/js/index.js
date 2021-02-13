const fetchUsers = (username) => {
    return fetchData(`https://api.github.com/users/${username}?`);
}

const fetchUserRepos = (username) => {
    return fetchData(`https://api.github.com/users/${username}/repos?`);
}

const fetchUserFollowers = (username) => {
    return fetchData(`https://api.github.com/users/${username}/followers?`);
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

const getUsersRepos = () => {
    return fetchUserRepos(usernameValue.value);
}

const getUsersFollowers = () => {
    return fetchUserFollowers(usernameValue.value);
}

const showData = async (data) => {
    const repos = await getUsersRepos();
    const followers = await getUsersFollowers();
    const html = USER_HTML_TEMPLATE(data.avatar_url,
                                    data.html_url,
                                    data.name,
                                    data.bio,
                                    data.location,
                                    repos,
                                    followers);

    return Promise.resolve(html);
}

const showError = () => infoContainer.innerHTML = `<p class="error">There is no such user...<p>`;

const processData = () => {
    fetchUsers(usernameValue.value)
        .then(response => {
            return showData(response);
        })
        .then(html => {
            infoContainer.innerHTML = html;
        })
        .catch(() => {
            showError();
        });
}

searchButton.addEventListener('click', () => {
    processData();
})
