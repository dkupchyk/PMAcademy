// MENU -> Block 3

let startIndexMenu = 0;

const menuArraySorted = order(MENU.filter(item => isValidMenuItem(item)));
const menuAmountElementsMin = menuArraySorted.length < MENU_MAX ? menuArraySorted.length : MENU_MAX;

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

initMenu();
