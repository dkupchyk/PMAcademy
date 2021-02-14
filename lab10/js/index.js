let oldUsernameValue = infoContainer.value;

const getUsersRepos = () => fetchUserRepos(usernameValue.value);

const getUsersFollowers = () => fetchUserFollowers(usernameValue.value);

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
    if (usernameValue.value !== oldUsernameValue) {
        fetchUsers(usernameValue.value)
            .then(response => {
                oldUsernameValue = usernameValue.value;
                return showData(response);
            })
            .then(html => {
                infoContainer.innerHTML = html;
            })
            .catch(() => {
                showError();
            });
    }
}

searchButton.addEventListener('click', processData);
