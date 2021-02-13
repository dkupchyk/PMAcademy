const USER_HTML_TEMPLATE = function (avatar_url, link, name, bio, location, repos, followers) {
    const validatedName = validate(name);
    const validatedBio = validate(bio);
    const validatedLocation = validate(location);

    const reposHTML = generateReposHTML(repos);
    const followersHTML = generateFollowersHTML(followers);

    return `<div class="container__user-avatar">
                <a href="${link}"><img src="${avatar_url}" alt="avatar"></a>
                <a href="${link}" class="heading">${validatedName}</a>
                <p>${validatedLocation}</p>
                <p>${validatedBio}</p>
            </div>
            
            <div class="container__user-repos">
                <h2>Repositories</h2>
                  <div class="scrollbar">${reposHTML}</div>
            </div>
            
            <div class="container__user-followers">
                <h2>Followers</h2>
                 <div class="scrollbar">${followersHTML}</div>
            </div>`;
}

const validate = (value) => {
    return value ? value : "";
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


