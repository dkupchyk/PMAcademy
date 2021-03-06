const isValidMenuItem = (item) => {
    return !(Object.keys(item).length === 0 || !item.hasOwnProperty('title') || !item.title)
}

const isValidNewsItem = (item) => {
   return (Object.keys(item).length !== 0 &&
        item.hasOwnProperty('date') && item.date &&
        item.hasOwnProperty('title') && item.title &&
        item.hasOwnProperty('description') && item.description &&
        item.hasOwnProperty('url') && item.url)
}

const isValidCarouselItem = (item) => {
    return (Object.keys(item).length !== 0 &&
        item.hasOwnProperty('description') && item.description &&
        item.hasOwnProperty('url') && item.url)
}

const isAvailableCarouselItem = (item) => {
    return (item.hasOwnProperty('price') && !(item.price === 0) && !isNaN(item.price))
}

const isValidPromotionItem = (item) => {
    return (Object.keys(item).length !== 0 &&
        item.hasOwnProperty('title') && item.title &&
        item.hasOwnProperty('description') && item.description &&
        item.hasOwnProperty('url') && item.url)
}

const isValidBuyingNowItem = (item) => {
    return (Object.keys(item).length !== 0 &&
        item.hasOwnProperty('title') && item.title &&
        item.hasOwnProperty('url') && item.url);
}

const blockExists = (block) => {
    return block !== null && block !== [];
}
