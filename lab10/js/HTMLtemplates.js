const USER_HTML_TEMPLATE = function (avatar_url, name, bio, location, repos, followers) {
    const reposHTML = generateReposHTML(repos);
    const followersHTML = generateFollowersHTML(followers);

    return `<div class="container__user-avatar">
                <img src="${avatar_url}" alt="avatar">
                <h2>${name}</h2>
                <p>${location}</p>
                <p>${bio}</p>
            </div>
            <div class="container__user-repos">
                <h2>Repositories</h2>
                ${reposHTML}
            </div>
            <div class="container__user-followers">
                <h2>Followers</h2>
                ${followersHTML}
            </div>`;
}

const generateReposHTML = (repos) => {
    let html = '';
    repos.forEach(repo => {
        html += `<a href="${repo.html_url}">${repo.name}</a> <br>`;
    })
    return html;
}

const generateFollowersHTML = (followers) => {
    let html = '';
    followers.forEach(follower => {
        html += `<a href="${follower.html_url}">${follower.login}</a> <br>`;
    })
    return html;
}


