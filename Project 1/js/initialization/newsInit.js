// NEWS -> Block 4

const newsArraySorted = NEWS.filter(item => isValidNewsItem(item));

const parseDate = (date) => {
    let dateConverted = new Date(date);
    let month = MONTHS.find(element => element.value === dateConverted.getMonth()).name;
    return {
        day: dateConverted.getDay(),
        month: month
    }
}

const initNews = () => {
    if (!blockExists(newsArraySorted) || !isValidNews(newsArraySorted)) {
        document.getElementsByClassName('news')[0].style.display = 'none';
        document.querySelector('.important-info .advert').style.width = '100%';
        return;
    }

    let news = document.getElementsByClassName('news__items');

    let chosenNews = newsArraySorted
        .sort(function () {
            return .5 - Math.random()
        })
        .slice(0, 3);

    for (let item of chosenNews) {
        item.date = parseDate(item.date)
        news[0].innerHTML += TEMPLATE_NEWS(item);
    }
};

initNews();
