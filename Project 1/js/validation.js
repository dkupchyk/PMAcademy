
const isValidMenu = (menu) => {
    return !(menu.length === 0 || allMenuItemsAreInvalid(menu))
}

const allMenuItemsAreInvalid = (menu) => {
    for (let item of menu) {
        if (isValidMenuItem(item)) return false;
    }
    return true;
}

const isValidMenuItem = (item) => {
    console.log()
    return !(Object.keys(item).length === 0 || !item.hasOwnProperty('title') || !item.title)
}


const isValidNews = (news) => {
    return !(news.length === 0 || allNewsItemsAreInvalid(news))
}

const allNewsItemsAreInvalid = (news) => {
    for (let item of news) {
        if (!(Object.keys(item).length === 0 ||
            !item.hasOwnProperty('date') || !item.date ||
            !item.hasOwnProperty('title') || !item.title ||
            !item.hasOwnProperty('description') || !item.description ||
            !item.hasOwnProperty('img') || !item.img ||
            !item.hasOwnProperty('url') || !item.url))
            return false;
    }
    return true;
}

const isValidBuyingNow = (items) => {
    return !(items.length === 0 || allBuyingNowItemsAreInvalid(items))
}

const allBuyingNowItemsAreInvalid = (items) => {
    for (let item of items) {
        if (!(Object.keys(item).length === 0 ||
            !item.hasOwnProperty('title') || !item.title ||
            !item.hasOwnProperty('img') || !item.img ||
            !item.hasOwnProperty('url') || !item.url))
            return false;
    }
    return true;
}
