// CAROUSELS -> Blocks 7,8,9
let screenWidth = 1140;

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

const itemsBrandsArray = BRANDS;
const itemsNumbersArray = WE_IN_NUMBERS;
const itemsBannerArray = order(BANNER)

const bannerCarousel = new Carousel('banner', itemsBannerArray, carouselBanner, carouselSlidesBanner, bannerNextButtons, bannerPrevButtons, TEMPLATE_CAROUSEL_BANNER, 1)
const newCarousel = new Carousel('new', itemsNewArray, carouselNew, carouselSlidesNew, newNextButtons, newPrevButtons, TEMPLATE_CAROUSEL_NEW);
const recCarousel = new Carousel('rec', itemsRecArray, carouselRec, carouselSlidesRec, recNextButtons, recPrevButtons, TEMPLATE_CAROUSEL_REC);
const saleCarousel = new Carousel('sale', itemsSaleArray, carouselSale, carouselSlidesSale, saleNextButtons, salePrevButtons, TEMPLATE_CAROUSEL_SALE);
const promoCarousel = new Carousel('prom', itemsPromotionArray, carouselProm, carouselSlidesProm, promNextButtons, promPrevButtons, TEMPLATE_CAROUSEL_PROM);
const brandsCarousel = new Carousel('brands', itemsBrandsArray, carouselBrands, carouselSlidesBrands, brandsNextButtons, brandsPrevButtons, TEMPLATE_CAROUSEL_BRANDS);
const numbersCarousel = new Carousel('numbers', itemsNumbersArray, carouselNumbers, carouselSlidesNumbers, numbersNextButtons, numbersPrevButtons, TEMPLATE_CAROUSEL_NUMBERS);

bannerCarousel.initCarousel();
newCarousel.initCarousel();
recCarousel.initCarousel();
saleCarousel.initCarousel();
promoCarousel.initCarousel();
brandsCarousel.initCarousel();
numbersCarousel.initCarousel();

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
        newCarousel.maxItemsInRow = recCarousel.maxItemsInRow = saleCarousel.maxItemsInRow =  promoCarousel.maxItemsInRow = 4;
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
