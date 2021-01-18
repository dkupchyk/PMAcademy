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
                                   <p class="new" class="links-details">NEW</p>
                               </div>`;

const CAROUSEL_REC_OVERLAY = `<div class="overlay overlay-rec">
                                  <img class="like-icon" src="resources/icon/block-8-like.svg" alt="like">
                              </div>`;

const CAROUSEL_SALE_OVERLAY = `<div class="overlay overlay-sale">
                                   <p class="percentage">%</p>
                               </div>`;

const TEMPLATE_CAROUSEL_ITEM = function (item, overlayBlock) {
    return `<div class="carousel-block__instance">`
        + overlayBlock +
        `<img class="item-image" src="${item.img}" alt="item">
                <a href="${item.url}">${item.description}</a>
                <p>Цена: <span class="bold">${item.price} ${item.currency}</span> <span class="crossed"> ${item.oldPrice} ${item.currency}</span></p>
                <div class="bottom">
                    <button>
                        <img class="cart" src="resources/icon/cart.svg" alt="cart">
                        КУПИТЬ
                    </button>
                    <a href="#" class="links-details">Подробнее</a>
                 </div>
            </div>`;
}

const TEMPLATE_CAROUSEL_NEW = function (item) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_NEW_OVERLAY)
}

const TEMPLATE_CAROUSEL_REC = function (item) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_REC_OVERLAY)
}

const TEMPLATE_CAROUSEL_SALE = function (item) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_SALE_OVERLAY)
}

