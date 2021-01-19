let topMenuArray = [];

for (let [key, value] of Object.entries(TOP_MENU)) {
    topMenuArray.push(value);
}

const topMenuArraySorted = order(topMenuArray.filter(item => isValidMenuItem(item)));
const menuArraySorted = order(MENU.filter(item => isValidMenuItem(item)));
const menuAmountElementsMin = menuArraySorted.length < MENU_MAX ? menuArraySorted.length : MENU_MAX;

const newsArraySorted = NEWS.filter(item => isValidNewsItem(item));
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

// MENU -> Block 3
let startIndexMenu = 0;

const initMenu = () => {
    if (!blockExists(menuArraySorted) || !isValidMenu(menuArraySorted)) {
        document.getElementsByClassName('catalog-navigation')[0].style.display = 'none';
        return;
    }

    changeSlidesMenu();
    roundChildMenu(true);

    if (menuAmountElementsMin < MENU_MAX || menuArraySorted.length === 10) {
        menuBtnRight.style.display = 'none';
        roundChildMenu(false);

        // If there is only one element -> first-child == last-child
        if (menuArraySorted.length === 1) {
            menu.querySelector('#menu-list > li:first-child').style.borderRadius = '5px';
        }
    }
};

const roundChildMenu = (firstChild) => {
    if (firstChild) {
        menu.querySelector('#menu-list > li:first-child').style.borderRadius = '5px 0 0 5px';
    } else {
        menu.querySelector('#menu-list > li:last-child').style.borderRadius = '0 5px 5px 0';
    }
}

const changeRoundedChild = () => {
    let menuBtnRightDisplay = menuBtnRight.style.display;
    if (menuBtnRightDisplay === 'none') {
        roundChildMenu(false);
    } else {
        roundChildMenu(true);
    }
}

const changeSlidesMenu = () => {
    menu.innerHTML = "";

    for (let i = startIndexMenu; i < menuArraySorted.length && i < menuAmountElementsMin + startIndexMenu; i++) {
        let item = menuArraySorted[i];
        menu.innerHTML += `<li><a href="${item.url}">${item.title}</a></li>`;
    }

    if (startIndexMenu === 0) {
        menuBtnRight.style.display = 'block';
        menuBtnLeft.style.display = 'none';

    } else if (MENU_MAX + startIndexMenu === menuArraySorted.length) {
        menuBtnLeft.style.display = 'block';
        menuBtnRight.style.display = 'none';
    }
}

menuBtnRight.addEventListener('click', () => {
    startIndexMenu++;
    changeSlidesMenu();
    changeRoundedChild();
});

menuBtnLeft.addEventListener('click', () => {
    startIndexMenu--;
    changeSlidesMenu();
    changeRoundedChild();
});

// NEWS -> Block 4
const parseDate = (date) => {
    let dateConverted = new Date(date);
    let month = MONTHS.find(element => element.value === dateConverted.getMonth()).name;
    return {
        day: dateConverted.getDay(),
        month: month
    }
}

const initNews = () => {
    if (!blockExists(newsArraySorted) || !isValidNews(newsArraySorted)) {
        document.getElementsByClassName('news')[0].style.display = 'none';
        document.querySelector('.important-info .advert').style.width = '100%';
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

// BANNER -> Block 6




// BUYING_RIGHT_NOW -> Block 11
const initBuyingRightNow = () => {
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

const changeCartValues = (amount, price) => {
    cartValues.innerHTML = `<a href="#">${amount}</a> / ${price} <span class="currency">${CURRENCY}</span>`
}

// Changing currency
let cartItemsAmount = BASKET.elements;
let cartItemsPrice = BASKET.price;

changeCartValues(cartItemsAmount, cartItemsPrice);

initTopMenu();
initMenu();
initNews();
// initPromotions();
initBuyingRightNow();

