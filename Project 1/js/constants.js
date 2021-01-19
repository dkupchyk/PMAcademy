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


const topArrowButtons = document.getElementsByClassName('top-arrow');
const bottomArrowButtons = document.getElementsByClassName('bottom-arrow');

const newNextButtons = document.getElementsByClassName('new-next-btn');
const newPrevButtons = document.getElementsByClassName('new-prev-btn');

const recNextButtons = document.getElementsByClassName('rec-next-btn');
const recPrevButtons = document.getElementsByClassName('rec-prev-btn');

const saleNextButtons = document.getElementsByClassName('sale-next-btn');
const salePrevButtons = document.getElementsByClassName('sale-prev-btn');

const promNextButtons = document.getElementsByClassName('prom-next-btn');
const promPrevButtons = document.getElementsByClassName('prom-prev-btn');


const TOP_MENU_MAX = 9;
const MENU_MAX = 10;
const CAROUSEL_ALL_MAX = 10;
const PROMOTIONS_MAX = 4;

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
