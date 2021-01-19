const cartValues = document.getElementById('cart-values');

const menu = document.getElementById('menu-list')
const menuBtnRight = document.getElementById('menu-button-right');
const menuBtnLeft = document.getElementById('menu-button-left')

const carouselNew = document.getElementById('new-carousel')
const carouselSlidesNew = document.getElementById('new-carousel-block')

const carouselRec = document.getElementById('rec-carousel')
const carouselSlidesRec = document.getElementById('rec-carousel-block')

const carouselSale = document.getElementById('sale-carousel')
const carouselSlidesSale = document.getElementById('sale-carousel-block')

const carouselProm = document.getElementById('prom-carousel')
const carouselSlidesProm = document.getElementById('prom-carousel-block')

const carouselBrands = document.getElementById('brands-carousel')
const carouselSlidesBrands = document.getElementById('brands-carousel-block')

const carouselNumbers = document.getElementById('num-carousel')
const carouselSlidesNumbers = document.getElementById('num-carousel-block')

const carouselBanner = document.getElementById('banner-carousel')
const carouselSlidesBanner = document.getElementById('banner-carousel-block')

const newNextButtons = document.getElementsByClassName('new-next-btn');
const newPrevButtons = document.getElementsByClassName('new-prev-btn');

const recNextButtons = document.getElementsByClassName('rec-next-btn');
const recPrevButtons = document.getElementsByClassName('rec-prev-btn');

const saleNextButtons = document.getElementsByClassName('sale-next-btn');
const salePrevButtons = document.getElementsByClassName('sale-prev-btn');

const promNextButtons = document.getElementsByClassName('prom-next-btn');
const promPrevButtons = document.getElementsByClassName('prom-prev-btn');

const brandsNextButtons = document.getElementsByClassName('brands-next-btn');
const brandsPrevButtons = document.getElementsByClassName('brands-prev-btn');

const numbersNextButtons = document.getElementsByClassName('num-next-btn');
const numbersPrevButtons = document.getElementsByClassName('num-prev-btn');

const bannerNextButtons = document.getElementsByClassName('banner-next-btn');
const bannerPrevButtons = document.getElementsByClassName('banner-prev-btn');


const topArrowButtons = document.getElementsByClassName('top-arrow');
const bottomArrowButtons = document.getElementsByClassName('bottom-arrow');


const TOP_MENU_MAX = 9;
const MENU_MAX = 10;
const CAROUSEL_ALL_MAX = 10;
const PROMOTIONS_MAX = 4;

const BRANDS = [
    {
        alt: 'Samsung',
        src: './resources/image/samsung_logo.jpg'
    },
    {
        alt: 'Escene',
        src: './resources/image/escene_logo.jpg'
    },
    {
        alt: 'Fanvil',
        src: './resources/image/fanvil_logo.jpg'
    },
    {
        alt: 'Open Mesh',
        src: './resources/image/open-mesh_logo.png'
    },
    {
        alt: 'Open Vox',
        src: './resources/image/openvox_logo.jpg'
    },
    {
        alt: 'Panasonic',
        src: './resources/image/panasonic_logo.jpg'
    },
    {
        alt: 'Senao',
        src: './resources/image/senao_logo.png'
    },
    {
        alt: 'Siemens',
        src: './resources/image/siemens_logo.jpg'
    },
    {
        alt: 'Yealink',
        src: './resources/image/yealink_logo.png'
    }
];

const WE_IN_NUMBERS = [
    {
        figure: '10',
        p: '10 ЛЕТ НА РЫНКЕ'
    },
    {
        figure: '25/5',
        p: '25 ПРОФИЛЬНЫХ СПЕЦИАЛИСТОВ, 5 МЕНЕДЖЕРОВ ОТДЕЛА ПРОДАЖ'
    },
    {
        figure: '2222<br>x<br>100',
        p: '2222 ТОВАРА В КАТАЛОГЕ СРЕДИ 100 БРЕНДОВ'
    },
    {
        figure: '29',
        p: '29 ТОРГОВЫХ ПАРТНЕРОВ'
    },
    {
        figure: '14',
        p: '14 ОТГРУЗОК В СУТКИ'
    },
    {
        figure: '1',
        p: '1 ИЗ ЛИДЕРОВ РЫНКА'
    }
];

const MONTHS = [
    {value: 0, name: "Январь"},
    {value: 1, name: "Февраль"},
    {value: 2, name: "Март"},
    {value: 3, name: "Апрель"},
    {value: 4, name: "Май"},
    {value: 5, name: "Июнь"},
    {value: 6, name: "Июль"},
    {value: 7, name: "Август"},
    {value: 8, name: "Сентябрь"},
    {value: 9, name: "Ноябрь"},
    {value: 10, name: "Октябрь"},
    {value: 11, name: "Декабрь"}
];
