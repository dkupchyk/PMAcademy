class Carousel {

    constructor(itemsArray, carouselElement, carouselSlidesElement, templateHTMLFunc) {
        this.itemsArray = itemsArray;
        this.carouselElement = carouselElement;
        this.carouselSlidesElement = carouselSlidesElement;
        this.templateHTMLFunc = templateHTMLFunc;
        this.startIndex = 0;
        this.activeSlides = this.itemsArray.slice(this.startIndex, this.startIndex + CAROUSEL_MAX);
    }

    initCarousel() {
        if (!blockExists(this.carouselSlidesElement)) {
            this.carouselElement.style.display = 'none';
            return;
        }
        this.changeSlides();
    };

    changeActiveSlides() {
        this.startIndex = mod(this.startIndex, this.itemsArray.length);

        return (CAROUSEL_MAX > this.itemsArray.length - this.startIndex)
            ? [...this.itemsArray.slice(this.startIndex, this.startIndex + (this.itemsArray.length - this.startIndex)),
                ...this.itemsArray.slice(0, CAROUSEL_MAX - (this.itemsArray.length - this.startIndex))]
            : this.itemsArray.slice(this.startIndex, this.startIndex + CAROUSEL_MAX);
    }


    changeSlides() {
        this.carouselSlidesElement.innerHTML = "";
        this.activeSlides = this.changeActiveSlides();

        for (let item of this.activeSlides) {
            this.carouselSlidesElement.innerHTML += this.templateHTMLFunc(item);
        }
    }
}

const mod = (n, m) => {
    return ((n % m) + m) % m;
}
