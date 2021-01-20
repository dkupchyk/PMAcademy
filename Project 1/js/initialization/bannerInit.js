// Banner -> Blocks 6

const itemsBannerArray = order(BANNER);
const bannerCarousel = new Carousel('banner', itemsBannerArray, carouselBanner, carouselSlidesBanner, bannerNextButtons, bannerPrevButtons, TEMPLATE_CAROUSEL_BANNER, 1, true)
bannerCarousel.initCarousel();

for (let i = 0; i < itemsBannerArray.length; i++) {
    let id = "nav-btn-" + i;
    document.getElementById('banner-carousel-nav').innerHTML +=
        `<input class="nav-radio" type="radio" name="nav-btn" id="${id}">
         <label for="${id}"></label>`;
}

for (let i = 0; i < itemsBannerArray.length; i++) {
    let id = "nav-btn-" + i;

    if (i === 0) {
        bannerCarousel.changeFocusNav();
    }

    document.getElementById(id).addEventListener('click', () => {
        bannerCarousel.startIndex = +(id.match(/\d+/g));
        bannerCarousel.changeSlides();
    })
}
