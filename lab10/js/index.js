let oldUsernameValue = infoContainer.value;

const getUsersRepos = () => fetchUserRepos(usernameInput.value);

const getUsersFollowers = () => fetchUserFollowers(usernameInput.value);

const showLoading = () => infoContainer.innerHTML = LOADING_HTML_TEMPLATE;

const showError = () => infoContainer.innerHTML = ERROR_HTML_TEMPLATE;

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

const debounce = (func, wait) => {
    let timeout;

    return function execute() {
        const later = () => {
            clearTimeout(timeout);
            func();
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

const processData = () => {
    if (usernameInput.value !== oldUsernameValue) {
        fetchUsers(usernameInput.value)
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
}

const debounceInvoked = debounce(processData, 1000);

searchButton.addEventListener('click', processData);
usernameInput.addEventListener('input', debounceInvoked);
