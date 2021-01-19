// CAROUSELS -> Blocks 7,8,9
let CAROUSEL_MAX = 1;

//Initialization of carousels
const itemsNewArrayFiltered = ITEMS.filter(item => item.type === 'new')
    .sort(function (a, b) {
        return new Date(b.date) - new Date(a.date);
    });

const itemsRecArrayFiltered = ITEMS.filter(item => item.type === 'recommended')
    .sort(function (a, b) {
        return a.price - b.price;
    });

const itemsSaleArrayFiltered = ITEMS.filter(item => item.type === 'sale')
    .sort(function (a, b) {
        return (a.oldPrice - a.price) - (b.oldPrice - b.price);
    });

const promotionsArraySorted = PROMOTIONS.filter(item => isValidPromotionItem(item));

const itemsNewArray = itemsNewArrayFiltered.length <= CAROUSEL_ALL_MAX
    ? itemsNewArrayFiltered
    : itemsNewArrayFiltered.slice(0, CAROUSEL_ALL_MAX);

const itemsRecArray = itemsRecArrayFiltered.length <= CAROUSEL_ALL_MAX
    ? itemsRecArrayFiltered
    : itemsRecArrayFiltered.slice(0, CAROUSEL_ALL_MAX);

const itemsSaleArray = itemsSaleArrayFiltered.length <= CAROUSEL_ALL_MAX
    ? itemsSaleArrayFiltered
    : itemsSaleArrayFiltered.slice(0, CAROUSEL_ALL_MAX);

const itemsPromotionArray = promotionsArraySorted.length <= CAROUSEL_ALL_MAX
    ? promotionsArraySorted
    : promotionsArraySorted.slice(0, CAROUSEL_ALL_MAX);


const newCarousel = new Carousel('new', itemsNewArray, carouselNew, carouselSlidesNew, newNextButtons, newPrevButtons, TEMPLATE_CAROUSEL_NEW);
const recCarousel = new Carousel('rec', itemsRecArray, carouselRec, carouselSlidesRec, recNextButtons, recPrevButtons, TEMPLATE_CAROUSEL_REC);
const saleCarousel = new Carousel('sale', itemsSaleArray, carouselSale, carouselSlidesSale, saleNextButtons, salePrevButtons, TEMPLATE_CAROUSEL_SALE);
const promotionCarousel = new Carousel('prom', itemsPromotionArray, carouselProm, carouselSlidesProm, promNextButtons, promPrevButtons, TEMPLATE_CAROUSEL_PROM);

newCarousel.initCarousel();
recCarousel.initCarousel();
saleCarousel.initCarousel();
promotionCarousel.initCarousel()

//Media queries
window.addEventListener("resize", function () {
    if (document.documentElement.clientWidth < 750) {
        CAROUSEL_MAX = 1;
    } else if (document.documentElement.clientWidth < 980) {
        CAROUSEL_MAX = 3;
    } else {
        CAROUSEL_MAX = 4
    }
    newCarousel.changeSlides();
    recCarousel.changeSlides();
    saleCarousel.changeSlides();
    promotionCarousel.changeSlides()
});

window.onload = function () {
    if (document.documentElement.clientWidth < 750) {
        CAROUSEL_MAX = 1;
    } else if (document.documentElement.clientWidth < 980) {
        CAROUSEL_MAX = 3;
    } else {
        CAROUSEL_MAX = 4
    }
    newCarousel.changeSlides();
    recCarousel.changeSlides();
    saleCarousel.changeSlides();
    promotionCarousel.changeSlides()
}
