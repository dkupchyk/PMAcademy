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

const itemsNewArray = itemsNewArrayFiltered.length <= CAROUSEL_ALL_MAX
    ? itemsNewArrayFiltered
    : itemsNewArrayFiltered.slice(0, CAROUSEL_ALL_MAX);

const itemsRecArray = itemsRecArrayFiltered.length <= CAROUSEL_ALL_MAX
    ? itemsRecArrayFiltered
    : itemsRecArrayFiltered.slice(0, CAROUSEL_ALL_MAX);

const itemsSaleArray = itemsSaleArrayFiltered.length <= CAROUSEL_ALL_MAX
    ? itemsSaleArrayFiltered
    : itemsSaleArrayFiltered.slice(0, CAROUSEL_ALL_MAX);

const newCarousel = new Carousel(itemsNewArray, carouselNew, carouselSlidesNew, newNextButtons, newPrevButtons, TEMPLATE_CAROUSEL_NEW);
const recCarousel = new Carousel(itemsRecArray, carouselRec, carouselSlidesRec, recNextButtons, recPrevButtons, TEMPLATE_CAROUSEL_REC);
const saleCarousel = new Carousel(itemsSaleArray, carouselSale, carouselSlidesSale, saleNextButtons, salePrevButtons, TEMPLATE_CAROUSEL_SALE);

newCarousel.initCarousel();
recCarousel.initCarousel();
saleCarousel.initCarousel();

//Media queries
const mediaQueries = [
    window.matchMedia("(max-width: 750px)"),
    window.matchMedia("(max-width: 980px)"),
    window.matchMedia("(max-height: 1140px)")
]

function mediaQueryResponse(mql) {
    if (mediaQueries[0].matches) {
        CAROUSEL_MAX = 1;
    } else if (mediaQueries[1].matches) {
        CAROUSEL_MAX = 3;
    } else {
        CAROUSEL_MAX = 4
    }
    newCarousel.changeSlides();
    recCarousel.changeSlides();
    saleCarousel.changeSlides();
}

mediaQueries[0].addListener(mediaQueryResponse)
mediaQueries[1].addListener(mediaQueryResponse)
mediaQueries[2].addListener(mediaQueryResponse)

window.onload = mediaQueryResponse;
