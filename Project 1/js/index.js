const mod = function(n, m) {
    return ((n % m) + m) % m;
}

const order = function(array) {
    return array.sort(function (a, b) {
        return a.order - b.order;
    })
}

CartService.initCartValues();

