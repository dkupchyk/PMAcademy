class Carousel {

    constructor(type, itemsArray, carouselElement, carouselSlidesElement, nextButtons, prevButtons, templateHTMLFunc, maxItemsInRow = 4) {
        this.type = type;
        this.itemsArray = itemsArray;
        this.carouselElement = carouselElement;
        this.carouselSlidesElement = carouselSlidesElement;
        this.templateHTMLFunc = templateHTMLFunc;
        this.maxItemsInRow = maxItemsInRow;
        this.nextButtons = nextButtons;
        this.prevButtons = prevButtons;
        this.startIndex = 0;
        this.activeSlides = this.itemsArray.slice(this.startIndex, this.startIndex + maxItemsInRow);

        this.addNextSlideClick();
        this.addPrevSlideClick();
    }

    initCarousel() {
        if (!blockExists(this.carouselSlidesElement) && allCarouselItemAreInvalid(this.carouselSlidesElement)) {
            this.carouselElement.style.display = 'none';
            return;
        }
        this.changeSlides();
    };

    changeActiveSlides() {
        this.startIndex = mod(this.startIndex, this.itemsArray.length);

        if (this.maxItemsInRow >= this.itemsArray.length) return this.itemsArray;

        return (this.maxItemsInRow > this.itemsArray.length - this.startIndex)
            ? [...this.itemsArray.slice(this.startIndex, this.startIndex + (this.itemsArray.length - this.startIndex)),
                ...this.itemsArray.slice(0, this.maxItemsInRow - (this.itemsArray.length - this.startIndex))]
            : this.itemsArray.slice(this.startIndex, this.startIndex + this.maxItemsInRow);
    }

    changeSlides() {
        this.carouselSlidesElement.innerHTML = "";
        this.activeSlides = this.changeActiveSlides();

        changeButtonsVisability(this);

        for (let item of this.activeSlides) {

            if (this.type === 'new' || this.type === 'rec' || this.type === 'sales'){
                item.price = changeCurrency(item.price, item.currency);
                item.oldPrice = changeCurrency(item.oldPrice, item.currency);
                item.currency = CURRENCY;
            }

            this.carouselSlidesElement.innerHTML += this.templateHTMLFunc(item, isAvailableCarouselItem(item));
        }
    }

    addNextSlideClick() {
        Array.from(this.nextButtons).forEach(function (element) {
            element.addEventListener('click', () => {
                this.startIndex++;
                this.changeSlides();
            });
        }, this);
    }

    addPrevSlideClick() {
        Array.from(this.prevButtons).forEach(function (element) {
            element.addEventListener('click', () => {
                this.startIndex--;
                this.changeSlides();
            });
        }, this);
    }
}

const changeButtonsVisability = (carousel) => {
    if (screenWidth < 1140) {
        changeVisabilityTopButtons('inline');
        changeVisabilityBottomButtons('none');
    } else {
        changeVisabilityTopButtons('none');
        changeVisabilityBottomButtons('inline');
    }

    if (carousel.itemsArray.length <= carousel.maxItemsInRow) {
        changeVisabilityTopButtons('none');
        changeVisabilityBottomButtons('none');
    }
}

const changeVisabilityTopButtons = (displayValue) => {
    Array.from(topArrowButtons).forEach(function (element) {
        element.style.display = displayValue;
    });
}

const changeVisabilityBottomButtons = (displayValue) => {
    Array.from(bottomArrowButtons).forEach(function (element) {
        element.style.display = displayValue;
    });
}

const changeCurrency = (price, pricesCurrency) => {
    if (CURRENCY_EXCHANGE.hasOwnProperty(pricesCurrency)) {
        return Math.floor(price * CURRENCY_EXCHANGE[pricesCurrency]);
    }
    return Math.floor(price);
}

const addItemToCart = (price) => {
    cartItemsAmount++;
    cartItemsPrice += price
    changeCartValues(cartItemsAmount, cartItemsPrice)
}

const mod = (n, m) => {
    return ((n % m) + m) % m;
}

const order = (array) => {
    return array.sort(function (a, b) {
        return a.order - b.order;
    })
}
