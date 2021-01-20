//Media queries
const updateMaxSizes = function () {

    if (document.documentElement.clientWidth < 750) {
        newCarousel.maxItemsInRow = recCarousel.maxItemsInRow = saleCarousel.maxItemsInRow = promoCarousel.maxItemsInRow = 1;
        brandsCarousel.maxItemsInRow = 5;
        numbersCarousel.maxItemsInRow = 4;
        screenWidth = 320;

    } else if (document.documentElement.clientWidth < 980) {
        newCarousel.maxItemsInRow = recCarousel.maxItemsInRow = saleCarousel.maxItemsInRow = promoCarousel.maxItemsInRow = 3;
        brandsCarousel.maxItemsInRow = 7;
        numbersCarousel.maxItemsInRow = 4;
        screenWidth = 750;

    } else if (document.documentElement.clientWidth < 1140) {
        newCarousel.maxItemsInRow = recCarousel.maxItemsInRow = saleCarousel.maxItemsInRow = promoCarousel.maxItemsInRow = 4;
        brandsCarousel.maxItemsInRow = 7;
        numbersCarousel.maxItemsInRow = 6;
        screenWidth = 980;

    } else {
        brandsCarousel.maxItemsInRow = 9;
        numbersCarousel.maxItemsInRow = 6;
        screenWidth = 1140;
    }

    bannerCarousel.changeSlides();
    newCarousel.changeSlides();
    recCarousel.changeSlides();
    saleCarousel.changeSlides();
    promoCarousel.changeSlides();
    brandsCarousel.changeSlides();
    numbersCarousel.changeSlides();
};

window.addEventListener("resize", updateMaxSizes);
window.onload = updateMaxSizes;
