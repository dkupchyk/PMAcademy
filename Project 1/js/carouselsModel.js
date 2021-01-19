class Carousel {

    constructor(type, itemsArray, carouselElement, carouselSlidesElement, nextButtons, prevButtons, templateHTMLFunc) {
        this.type = type;
        this.itemsArray = itemsArray;
        this.carouselElement = carouselElement;
        this.carouselSlidesElement = carouselSlidesElement;
        this.templateHTMLFunc = templateHTMLFunc;
        this.nextButtons = nextButtons;
        this.prevButtons = prevButtons;
        this.startIndex = 0;
        this.activeSlides = this.itemsArray.slice(this.startIndex, this.startIndex + CAROUSEL_MAX);

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

        if (CAROUSEL_MAX >= this.itemsArray.length) return this.itemsArray;

        return (CAROUSEL_MAX > this.itemsArray.length - this.startIndex)
            ? [...this.itemsArray.slice(this.startIndex, this.startIndex + (this.itemsArray.length - this.startIndex)),
                ...this.itemsArray.slice(0, CAROUSEL_MAX - (this.itemsArray.length - this.startIndex))]
            : this.itemsArray.slice(this.startIndex, this.startIndex + CAROUSEL_MAX);
    }

    changeSlides() {
        this.carouselSlidesElement.innerHTML = "";
        this.activeSlides = this.changeActiveSlides()

        // if (this.itemsArray.length <= CAROUSEL_MAX) {
        //     this.hideButtons()
        // } else {
        //     this.showButtons()
        // }

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

    hideButtons() {
        Array.from(this.nextButtons).forEach(function (element) {
            element.style.display = 'none';
        });

        Array.from(this.prevButtons).forEach(function (element) {
            element.style.display = 'none';
        });
    }

    showButtons() {
        Array.from(this.nextButtons).forEach(function (element) {
            element.style.display = 'inline';
        });

        Array.from(this.prevButtons).forEach(function (element) {
            element.style.display = 'inline';
        });
    }
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
