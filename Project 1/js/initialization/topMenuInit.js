// TOP MENU -> Block 1

let topMenuArray = [];

for (let [key, value] of Object.entries(TOP_MENU)) {
    topMenuArray.push(value);
}

const topMenuArraySorted = order(topMenuArray.filter(item => isValidMenuItem(item)));

const createNavElement = (key) => {
    let item = document.createElement('div');

    item.classList.add('nav__dropdown', 'dropdown');
    item.innerHTML += "<a class=\"nav__link\" href=\"#\">" +
        `${key.title}` +
        "<img class=\"arrow-down\" src=\"resources/icon/arrow-down.svg\" alt=\"arrow-down\">" +
        "</a>";
    item.innerHTML += createDropdown(order(key.submenu));

    return item;
}

const createDropdown = (submenuArray) => {
    let submenuHTML = '<div class="dropdown__content">';
    for (let item of submenuArray) {
        if (isValidMenuItem(item)) {
            submenuHTML += `<a href="${item.url}">${item.title}</a>`;
        }
    }
    submenuHTML += '</div>';
    return submenuHTML;
}

const initTopMenu = () => {
    if (!blockExists(topMenuArraySorted) || !isValidMenu(topMenuArraySorted)) {
        document.getElementsByClassName('nav')[0].style.display = 'none';
        return;
    }

    let nav = document.getElementsByClassName('nav__nav-body_wide');

    for (let index in topMenuArraySorted) {
        if (+index === TOP_MENU_MAX) break;

        let key = topMenuArraySorted[index];
        if (key.hasOwnProperty('submenu') && isValidMenu(key.submenu)) {
            nav[0].appendChild(createNavElement(key));
        } else {
            nav[0].innerHTML += `<a class=\"nav__link\" href=\"https://homy.ru/support/\">${key.title}</a>`
        }

        nav[0].innerHTML += "<div class=\"nav__vertical-line\"></div>"
    }
    nav[0].querySelector('.nav__vertical-line:last-child').style.display = 'none';
}

initTopMenu();
