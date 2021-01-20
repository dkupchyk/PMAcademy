const TEMPLATE_TOP_MENU = function (key) {
    return `<a class="nav__link" href="#">
                ${key.title} 
                <img class="arrow-down" src="resources/icon/arrow-down.svg" alt="arrow-down">
            </a>`;
}

const TEMPLATE_CAROUSEL_BANNER = function (item) {
    return `<img onerror="this.src = DEFAULT_IMG" src="${item.img}" alt="banner-slide">
            <div class="slide__text">
                <p>РЕВОЛЮЦИОННОЕ РЕШЕНИЕ</p>
                <p>НА РЫНКЕ СРЕДИ СИСТЕМ ВКС!</p>
                <p>GVS MAINSTREAM 228 ОТ КОМПАНИИ GRANDSTREAM ЭТО:</p>
                <ul>
                    <li>9-ти сторонняя аудио/видео конференция без покупки доп. ПО</li>
                    <li>2 Мпикс камера CMOS с разрешением 1080р@15fps</li>
                    <li>Гигабитный порт, встроенный модуль WIFI и Bluetooth 4.0 Miracast</li>
                </ul>
                <div class="details">
                    <a href="${item.url}">ПОДРОБНЕЕ</a>
                 </div>
            </div>`;
}

const TEMPLATE_NEWS = function (item) {
    return `<div class="item">
                <div class="col img-col">
                    <img onerror="this.src = DEFAULT_IMG" src="${item.img}"alt="background">
                    <div class="day">${item.date.day}</div>
                        <p>${item.date.month}</p>
                    </div>
                    <div class="col text-col">
                        <a href="${item.url}">${item.title}</a>
                        <p>${item.description}</p>
                    </div>
                </div>
                <hr class="dotted">`;
}

const CAROUSEL_NEW_OVERLAY = `<div class="overlay overlay-news">
                                   <p class="new links-details">NEW</p>
                               </div>`;

const CAROUSEL_REC_OVERLAY = `<div class="overlay overlay-rec">
                                  <img class="like-icon" onerror="this.src = DEFAULT_IMG" src="resources/icon/block-8-like.svg" alt="like">
                              </div>`;

const CAROUSEL_SALE_OVERLAY = `<div class="overlay overlay-sale">
                                   <p class="percentage">%</p>
                               </div>`;

const CAROUSEL_BOTTOM_AVAIL = function (price) {
    return `<div class="bottom">
                <button onclick="CartService.addItemToCart(${price})">
                    <img class="cart" onerror="this.src = DEFAULT_IMG" src="resources/icon/cart.svg" alt="cart">
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
        `<img class="item-image" onerror="this.src = DEFAULT_IMG" src="${item.img}" alt="item">
         <a href="${item.url}">${item.description}</a>`
        + (available ? `<p>Цена: <span class="bold">${item.price} <span class="currency">${CURRENCY}</span></span> <span class="crossed"> ${item.oldPrice} <span class="currency">${CURRENCY}</span></span></p>` : ``)
        + (available ? CAROUSEL_BOTTOM_AVAIL(item.price) : CAROUSEL_BOTTOM_NOT_AVAIL) +
        `</div>`;
}

const TEMPLATE_CAROUSEL_PROM_WITH_DATE = function (date) {
    return `<div class="timing__count-down">
                                <div class="timing__clock">
                                    <span class="number-block">${date[0]}</span>
                                    <span class="number-block">${date[1]}</span>
                                    <span class="colon">:</span>
                                    <span class="number-block">${date[2]}</span>
                                    <span class="number-block">${date[3]}</span>
                                    <span class="colon">:</span>
                                    <span class="number-block">${date[4]}</span>
                                    <span class="number-block">${date[5]}</span>
                                </div>
                                <div class="timing__description">
                                    <p>дней</p>
                                    <p>часов</p>
                                    <p>минут</p>
                                </div>
                            </div>`
}

const TEMPLATE_CAROUSEL_PROM_WITHOUT_DATE = `<p class="forever">БЕССРОЧНО</p>`;


const TEMPLATE_CAROUSEL_NEW = function (item, available) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_NEW_OVERLAY, available);
}

const TEMPLATE_CAROUSEL_REC = function (item, available) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_REC_OVERLAY, available);
}

const TEMPLATE_CAROUSEL_SALE = function (item, available) {
    return TEMPLATE_CAROUSEL_ITEM(item, CAROUSEL_SALE_OVERLAY, available);
}

const TEMPLATE_CAROUSEL_PROM = function (item) {

    return `<div class="carousel-block__instance sales-instance">
                <a href="${item.url}">${item.title}</a>
                <img class="item-image" src="${item.img}" onerror="this.src = DEFAULT_IMG" alt="item">
                <p>${item.description}</p>
                <div class="timing">
                    <p>Срок действия:</p>`
        + (item.hasOwnProperty('time_action') && item.time_action
            ? TEMPLATE_CAROUSEL_PROM_WITH_DATE(DateService.convertDateToHTML(item.time_action))
            : TEMPLATE_CAROUSEL_PROM_WITHOUT_DATE) +
        `</div>
                <a class="centered" href="#">Подробнее</a>
             </div>`;
}

const TEMPLATE_CAROUSEL_BRANDS = function (item) {
    return `<img src="${item.src}" onerror="this.src = DEFAULT_IMG" alt="${item.alt}">`;
}

const TEMPLATE_CAROUSEL_NUMBERS = function (item) {
    return `<div>
                <figure>
                    ${item.figure}
                </figure>
                <p>${item.p}</p>
            </div>`;
}

const TEMPLATE_BUYING_NOW = function (item) {
    return `<div>
                <img src="${item.img}" onerror="this.src = DEFAULT_IMG" alt="item-img">
                <a href="${item.url}">${item.title}</a>
            </div>`;
}
