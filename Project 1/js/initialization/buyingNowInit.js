// BUYING_RIGHT_NOW -> Block 11
const buyingRightNowArraySorted = order(BUYING_RIGHT_NOW.filter((item => isValidBuyingNowItem(item))));

const initBuyingRightNow = () => {
    if (!blockExists(buyingRightNowArraySorted)) {
        document.getElementsByClassName('buy--now')[0].style.display = 'none';
        return;
    }

    let buyingNow = document.getElementById('buying-now-items');

    for (let item of buyingRightNowArraySorted) {
        buyingNow.innerHTML += TEMPLATE_BUYING_NOW(item);
    }
};

initBuyingRightNow();

