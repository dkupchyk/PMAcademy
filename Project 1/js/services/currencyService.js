const CurrencyService = (function () {
    return {
        changeCurrency: function (price, pricesCurrency) {
            if (CURRENCY_EXCHANGE.hasOwnProperty(pricesCurrency)) {
                return Math.floor(price * CURRENCY_EXCHANGE[pricesCurrency]);
            }
            return Math.floor(price);
        }
    };
})();
