const CURRENCY = 'UAH';

const CURRENCY_EXCHANGE = {
    USD: 27.96,
    RUB: 0.38,
};

const BASKET = {
    elements: 4,
    price: 4000,
};

const TOP_MENU = {
    catalog: {
        order: 1,
        title: ''

    },
    about_company: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    payment_delivery: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    a: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                title: ""
            }
        ]
    },
    b: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    c: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    d: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                title: ""
            }
        ]
    },
    e: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    g: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    },
    j: {
        order: 1,
        title: 'Каталог',
        submenu: [
            {
                title: ""
            }
        ]
    },
    u: {
        order: 2,
        title: 'О компании',
        submenu: [
            {
                order: 1,
                title: 'VOIP оборудование',
                url: 'voip_equipment.html',
            },
            {
                order: 2,
                title: 'GSM оборудование',
                url: 'gsm_equipment.html',
            }
        ]
    },
    o: {
        order: 3,
        title: 'Payment and delivery',
        url: 'payment_delivery.html',
    }
};

const MENU = [
    {
        order: 1,
        title: '1',
        url: 'voip_equipment.html',
    },
    {
        order: 2,
        title: '2',
        url: 'skype_equipment.html',
    },
    {
        order: 3,
        title: '3',
        url: 'gsm_equipment.html',
    },
    {
        order: 4,
        title: '4',
        url: 'video_equipment.html',
    },
    {
        order: 5,
        title: '5',
        url: 'voip_equipment.html',
    },
    {
        order: 6,
        title: '6',
        url: 'skype_equipment.html',
    },
    {
        order: 7,
        title: '7',
        url: 'gsm_equipment.html',
    },
    {
        order: 8,
        title: '8',
        url: 'video_equipment.html',
    },
    {
        order: 9,
        title: '9',
        url: 'voip_equipment.html',
    },
    {
        order: 10,
        title: '10',
        url: 'skype_equipment.html',
    },
    {
        order: 11,
        title: '11',
        url: 'gsm_equipment.html',
    },
    {
        order: 12,
        title: '12',
        url: 'video_equipment.html',
    }
];

const NEWS = [
    {
        date: '2021/01/01',
        title: '2021/01/01',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
        img: 'https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2020/12/25',
        title: '2020/12/25',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: 'https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/14',
        title: '2021/01/14',
        description: 'Уже скоро в продаже!',
        img: 'https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/01',
        title: '2021/01/01',
        description: 'Предприятие «Элтекс» запустило производство точки доступа WEP-2ac.',
        img: 'https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2020/12/25',
        title: '2!',
        description: 'Скоро в продаже мощный маршрутизатор GWN7000!',
        img: 'https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg',
        url: 'voip_equipment.html',
    },
    {
        date: '2021/01/14',
        title: '3!',
        description: 'Уже скоро в продаже!',
        img: 'https://www.freecodecamp.org/news/content/images/2020/04/w-qjCHPZbeXCQ-unsplash.jpg',
        url: 'voip_equipment.html',
    },
];

const BANNER = [
    {
        order: 1,
        img: 'https://same_url.jpg',
        url: 'voip_equipment.html',
    },
    {
        order: 2,
        img: 'https://same_url2.jpg',
        url: 'voip_equipment.html',
    }
];

// type ['new', 'recommended', 'sale']
const ITEMS = [
    {
        type: 'new',
        description: '2021/01/01',
        img: 'resources/image/block-7-img-4.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/01',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: '300',
        img: 'resources/image/block-7-img-4.png',
        price: '300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'sale',
        description: '150',
        img: 'resources/image/block-7-img-4.png',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'new',
        description: '2021/01/02',
        img: 'resources/image/block-7-img-4.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/01/02',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: '100',
        img: 'resources/image/block-7-img-4.png',
        price: '100',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'sale',
        description: '190',
        img: 'resources/image/block-7-img-4.png',
        price: '190',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'new',
        description: '2021/05/15',
        img: 'resources/image/block-7-img-4.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2021/05/15',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: '3200',
        img: 'resources/image/block-7-img-4.png',
        price: '3200',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'sale',
        description: '15',
        img: 'resources/image/block-7-img-4.png',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    {
        type: 'new',
        description: '2019/05/15',
        img: 'resources/image/block-7-img-4.png',
        price: '1000',
        oldPrice: '1100',
        currency: 'UAH',
        date: '2019/05/15',
        url: 'new_items/item1.html'
    },
    {
        type: 'recommended',
        description: '4',
        img: 'resources/image/block-7-img-4.png',
        price: '300',
        oldPrice: '1100',
        currency: 'RUB',
        date: '2020/12/25',
        url: 'new_items/item.html'
    },
    {
        type: 'sale',
        description: '4',
        img: 'resources/image/block-7-img-4.png',
        price: '150',
        oldPrice: '200',
        currency: 'USD',
        date: '2021/01/13',
        url: 'https://same_url/item.html'
    },
    // {
    //     type: 'new',
    //     description: '5',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // },
    // {
    //     type: 'recommended',
    //     description: '5',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '300',
    //     oldPrice: '1100',
    //     currency: 'RUB',
    //     date: '2020/12/25',
    //     url: 'new_items/item.html'
    // },
    // {
    //     type: 'sale',
    //     description: '5',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '150',
    //     oldPrice: '200',
    //     currency: 'USD',
    //     date: '2021/01/13',
    //     url: 'https://same_url/item.html'
    // },
    // {
    //     type: 'recommended',
    //     description: '6',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '300',
    //     oldPrice: '1100',
    //     currency: 'RUB',
    //     date: '2020/12/25',
    //     url: 'new_items/item.html'
    // },
    // {
    //     type: 'sale',
    //     description: '6',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '150',
    //     oldPrice: '200',
    //     currency: 'USD',
    //     date: '2021/01/13',
    //     url: 'https://same_url/item.html'
    // },
    // {
    //     type: 'new',
    //     description: '7',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '8',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '9',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '10',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '11',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '12',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '13',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '14',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '15',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // }, {
    //     type: 'new',
    //     description: '1',
    //     img: 'resources/image/block-7-img-4.png',
    //     price: '1000',
    //     oldPrice: '1100',
    //     currency: 'UAH',
    //     date: '2021/01/01',
    //     url: 'new_items/item1.html'
    // },

];

// time_action format: "d" - day, "h" - hour, "m" - minute. if doesn't exist = infinity
const PROMOTIONS = [
    {
        title: 'Название акции',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
        time_action: '1d 2h 20m'
    },
    {
        title: 'Название акции 2',
        description: 'IP телефон Siemens Gigaset C530A IP',
        img: 'https://same_url.jpg',
        url: 'https://same_url/item.html',
    }
];

const BUYING_RIGHT_NOW = [
    {
        title: 'Название товара 1',
        img: './resources/image/block-11-img-1.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: './resources/image/block-11-img-1.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара',
        img: './resources/image/block-11-img-1.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: './resources/image/block-11-img-1.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара',
        img: './resources/image/block-11-img-1.png',
        url: 'https://same_url/item.html',
    },
    {
        title: 'Название товара 2',
        img: './resources/image/block-11-img-1.png',
        url: 'https://same_url/item.html',
    },
]
