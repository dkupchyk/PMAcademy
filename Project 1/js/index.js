let topMenuArray = [];

for (let [key, value] of Object.entries(TOP_MENU)) {
    topMenuArray.push(value);
}

const order = (array) => {
    return array.sort(function (a, b) {
        return a.order - b.order;
    })
}

const topMenuArraySorted = order(topMenuArray);
const menuArraySorted = order(MENU);
const newsArraySorted = order(NEWS);
const buyingRightNowArraySorted = order(BUYING_RIGHT_NOW);


// TOP MENU -> Block 1
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

// MENU -> Block 3
const menu = document.getElementById('menu-list')
const menuBtnRight = document.getElementById('menu-button-right');
const menuBtnLeft = document.getElementById('menu-button-left')

menuBtnLeft.style.display = 'none';
// menu.style.border = '5px 0 0 5px';

/*#menu-list > li:first-child {*/
/*    border-radius: 5px 0 0 5px;*/
/*}*/
//
// const displayMenu = () => {
//     if (!blockExists(menuArraySorted) || !isValidMenu(menuArraySorted)) {
//         document.getElementsByClassName('catalog-navigation')[0].style.display = 'none';
//         return;
//     }
//
//     let menu = document.getElementsByClassName('catalog-navigation');
//
//     for (let index in menuArraySorted) {
//         if (+index === MENU_MAX) break;
//
//         let key = menuArraySorted[index];
//         if (key.hasOwnProperty('submenu') && isValidMenu(key.submenu)) {
//             menu[0].appendChild(createNavElement(key));
//         } else {
//             menu[0].innerHTML += `<a class=\"nav__link\" href=\"https://homy.ru/support/\">${key.title}</a>`
//         }
//
//         menu[0].innerHTML += "<div class=\"nav__vertical-line\"></div>"
//     }
//
// };
//
// document.getElementById('menu-button-right').addEventListener('click', () => {});

// NEWS -> Block 4
const parseDate = (date) => {
    let dateConverted = new Date(date);
    let month = MONTHS.find(element => element.value === dateConverted.getMonth()).name;
    return {
        day: dateConverted.getDay(),
        month: month
    }
}

const displayNews = () => {
    if (!blockExists(newsArraySorted) || !isValidNews(newsArraySorted)) {
        document.getElementsByClassName('news')[0].style.display = 'none';
        return;
    }

    let news = document.getElementsByClassName('news__items');

    let chosenNews = newsArraySorted
        .sort(function () {
            return .5 - Math.random()
        })
        .slice(0, 3);

    for (let item of chosenNews) {
        let date = parseDate(item.date);

        news[0].innerHTML += '<div class="item">' +
            '<div class="col img-col">' +
            `<img src="${item.img}" alt="background">` +
            `<div class="day">${date.day}</div>` +
            `<p>${date.month}</p>` +
            '</div>' +
            '<div class="col text-col">' +
            `<a href="${item.url}">${item.title}</a>` +
            `<p>${item.description}</p>` +
            '</div>' +
            '</div>';
        news[0].innerHTML += "<hr class=\"dotted\">"
    }
};


// BUYING_RIGHT_NOW -> Block 11
const displayBuyingRightNow  = () => {
    if (!blockExists(buyingRightNowArraySorted) || !isValidBuyingNow(buyingRightNowArraySorted)) {
        document.getElementsByClassName('buy--now')[0].style.display = 'none';
        return;
    }

    let buyingNow = document.getElementById('buying-now-items');

    for (let item of buyingRightNowArraySorted) {
        buyingNow.innerHTML += "<div>" +
                `<img src=\"${item.img}\" alt=\"item-img\">` +
                `<a href=\"${item.url}\">${item.title}</a>` +
            "</div>";
    }
};


const blockExists = (block) => {
    return block !== null && block !== [];
}


displayTopMenu();
// displayMenu();
displayNews();
displayBuyingRightNow();
