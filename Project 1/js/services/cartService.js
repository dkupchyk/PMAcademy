let cartItemsAmount = BASKET.elements;
let cartItemsPrice = BASKET.price;

const CartService = (function () {
    return {
        addItemToCart: function (price) {
            cartItemsAmount++;
            cartItemsPrice += price
            CartService.changeCartValues(cartItemsAmount, cartItemsPrice)
        },

        initCartValues: function () {
            cartValues.innerHTML = `<a href="#">${BASKET.elements}</a> / ${BASKET.price} <span class="currency">${CURRENCY}</span>`
        },

        changeCartValues: function (amount, price) {
            cartValues.innerHTML = `<a href="#">${amount}</a> / ${price} <span class="currency">${CURRENCY}</span>`
        }
    };
})();

