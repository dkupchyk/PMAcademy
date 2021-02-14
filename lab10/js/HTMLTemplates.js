const LOADING_HTML_TEMPLATE = `<p class="loading">Loading...</p>`;

const ERROR_HTML_TEMPLATE = `<p class="error">There is no such user...</p>`;

const USER_HTML_TEMPLATE = function (avatar_url, link, name, bio, location, repos, followers) {
    const validatedName = validate(name);
    const validatedBio = validate(bio);
    const validatedLocation = validate(location);

    const reposHTML = generateListHTML(repos, 'html_url', 'name');
    const followersHTML = generateListHTML(followers, 'html_url', 'login');

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

const generateListHTML = (list, urlProp, nameProp) => {
    let html = '';
    list.forEach(item => {
        html += `<a href="${item[urlProp]}">${item[nameProp]}</a><br>`;
    })
    return html;
}
