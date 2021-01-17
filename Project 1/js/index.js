const order = (array) => {
    return array.sort(function (a, b) {
        return a.order - b.order;
    })
}

let topMenuArray = [];

for (let [key, value] of Object.entries(TOP_MENU)) {
    topMenuArray.push(value);
}

const topMenuArraySorted = order(topMenuArray);

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

const isValidMenu = (menu) => {
    return !(menu.length === 0 || allMenuItemsAreInvalid(menu))
}

const allMenuItemsAreInvalid = (menu) => {
    for (let item of menu) {
        if (isValidMenuItem(item)) return false;
    }
    return true;
}

const isValidMenuItem = (item) => {
    console.log()
    return !(Object.keys(item).length === 0 || !item.hasOwnProperty('title') || !item.title)
}

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


const displayTopMenu = () => {
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

}

const blockExists = (block) => {
    return block !== null && block !== [];
}

displayTopMenu();

