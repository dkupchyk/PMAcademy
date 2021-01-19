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
                <img class="item-image" src="${item.img}" alt="item">
                <p>${item.description}</p>
                <div class="timing">
                    <p>Срок действия:</p>`
                        + (item.hasOwnProperty('time_action') && item.time_action
                            ? TEMPLATE_CAROUSEL_PROM_WITH_DATE(convertDateToHTML(item.time_action))
                            : TEMPLATE_CAROUSEL_PROM_WITHOUT_DATE) +
               `</div>
                <a class="centered" href="#">Подробнее</a>
             </div>`;
}


const convertDateToHTML = (date) => {
    let dateArray = [0,0,0,0,0,0]
    date = date.replace(/\s/g,'')

    date = date.split('d')
    let day = date[0];

    date = date[1].split('h')
    let hours = date[0];

    date = date[1].split('m')
    let min = date[0];

    if (day.length === 1) {
        dateArray[1] = day;
    }else {
        dateArray[0] = day[0];
        dateArray[1] = day[1];
    }

    if (hours.length === 1) {
        dateArray[3] = hours;
    }else {
        dateArray[2] = hours[0];
        dateArray[3] = hours[1];
    }

    if (min.length === 1) {
        dateArray[5] = min;
    }else {
        dateArray[4] = min[0];
        dateArray[5] = min[1];
    }


    return dateArray;
}
