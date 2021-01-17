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
        if (isValidSubmenuItem(item)) {
            submenuHTML += `<a href="${item.url}">${item.title}</a>`;
        }
    }
    submenuHTML += '</div>';
    return submenuHTML;
}

const isValidSubmenu = (submenu) => {
    if (submenu.length === 0 || allSubmenuItemsAreInvalid(submenu)) return false;
    return true;
}

const allSubmenuItemsAreInvalid = (submenu) => {
    for (let item of submenu) {
        if (isValidSubmenuItem(item)) return false;
    }
    return true;
}

const isValidSubmenuItem = (item) => {
    if (Object.keys(item).length === 0 || !item.hasOwnProperty('title') || !item.title) return false;
    return true;
}

const displayTopMenu = () => {
    let nav = document.getElementsByClassName('nav__nav-body_wide');

    if (blockExists(topMenuArraySorted)) {
        for (let index in topMenuArraySorted) {

            if (+index === TOP_MENU_MAX) break;

            let key = topMenuArraySorted[index];

                if (key.hasOwnProperty('submenu') && isValidSubmenu(key.submenu)) {

                    let item = document.createElement('div');
                    item.classList.add('nav__dropdown', 'dropdown');
                    item.innerHTML += "<a class=\"nav__link\" href=\"#\">" +
                        `${key.title}` +
                        "<img class=\"arrow-down\" src=\"resources/icon/arrow-down.svg\" alt=\"arrow-down\">" +
                        "</a>";
                    item.innerHTML += createDropdown(order(key.submenu));

                    nav[0].appendChild(item);
                } else {
                    nav[0].innerHTML += `<a class=\"nav__link\" href=\"https://homy.ru/support/\">${key.title}</a>`
                }

                nav[0].innerHTML += "<div class=\"nav__vertical-line\"></div>"
        }
    }
}

const blockExists = (block) => {
    return block !== null && block !== [];
}

displayTopMenu();

console.log(document.getElementsByClassName('nav__nav-body_wide'))

