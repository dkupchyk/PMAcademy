const cartValues = document.getElementById('cart-values');

const menu = document.getElementById('menu-list')
const menuBtnRight = document.getElementById('menu-button-right');
const menuBtnLeft = document.getElementById('menu-button-left')

const carouselNew = document.getElementById('new-carousel')
const carouselSlidesNew = document.getElementById('new-carousel-block')

const carouselRec = document.getElementById('rec-carousel')
const carouselSlidesRec = document.getElementById('rec-carousel-block')

const carouselSale = document.getElementById('sale-carousel')
const carouselSlidesSale = document.getElementById('sale-carousel-block')

const newNextButtons = document.getElementsByClassName('new-next-btn');
const newPrevButtons = document.getElementsByClassName('new-prev-btn');

const recNextButtons = document.getElementsByClassName('rec-next-btn');
const recPrevButtons = document.getElementsByClassName('rec-prev-btn');

const saleNextButtons = document.getElementsByClassName('sale-next-btn');
const salePrevButtons = document.getElementsByClassName('sale-prev-btn');


const TOP_MENU_MAX = 9;
const MENU_MAX = 10;
const CAROUSEL_ALL_MAX = 10;

const MONTHS = [
    {value: 0, name: "Январь"},
    {value: 1, name: "Февраль"},
    {value: 2, name: "Март"},
    {value: 3, name: "Апрель"},
    {value: 4, name: "Май"},
    {value: 5, name: "Июнь"},
    {value: 6, name: "Июль"},
    {value: 7, name: "Август"},
    {value: 8, name: "Сентябрь"},
    {value: 9, name: "Ноябрь"},
    {value: 10, name: "Октябрь"},
    {value: 11, name: "Декабрь"}
];

const CAROUSEL_NEW_OVERLAY = `<div class="overlay overlay-news">
                                   <p class="new links-details">NEW</p>
                               </div>`;

const CAROUSEL_REC_OVERLAY = `<div class="overlay overlay-rec">
                                  <img class="like-icon" src="resources/icon/block-8-like.svg" alt="like">
                              </div>`;

const CAROUSEL_SALE_OVERLAY = `<div class="overlay overlay-sale">
                                   <p class="percentage">%</p>
                               </div>`;

const CAROUSEL_BOTTOM_AVAIL = function (price) {
    return `<div class="bottom">
                <button onclick="addItemToCart(${price})">
                    <img class="cart" src="resources/icon/cart.svg" alt="cart">
                    КУПИТЬ
                </button>
                <a href="#" class="links-details">Подробнее</a>
            </div>`;
}

const CAROUSEL_BOTTOM_NOT_AVAIL = `<div class="bottom">
                                       <p class="unavailable">Товар временно не доступен</p>
                                   </div>`;

const TEMPLATE_CAROUSEL_ITEM = function (item, overlayBlock, available) {
    return `<div class="carousel-block__instance">`
        + overlayBlock +
        `<img class="item-image" src="${item.img}" alt="item">
         <a href="${item.url}">${item.description}</a>`
        + (available ? `<p>Цена: <span class="bold">${item.price} <span class="currency">${CURRENCY}</span></span> <span class="crossed"> ${item.oldPrice} <span class="currency">${CURRENCY}</span></span></p>` : ``)
        + (available ? CAROUSEL_BOTTOM_AVAIL(item.price) : CAROUSEL_BOTTOM_NOT_AVAIL) +
        `</div>`;
}

const TEMPLATE_CAROUSEL_NEW = function (item, available) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_NEW_OVERLAY, available)
}

const TEMPLATE_CAROUSEL_REC = function (item, available) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_REC_OVERLAY, available)
}

const TEMPLATE_CAROUSEL_SALE = function (item, available) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_SALE_OVERLAY, available)
}

