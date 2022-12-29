"use strict";
exports.__esModule = true;
Number.prototype.currency = function (type) {
    if (type === void 0) { type = 'brl'; }
    var currencyFormat = new Intl.NumberFormat('id', {
        style: 'currency',
        currency: type.toUpperCase()
    }).format(+this);
    return currencyFormat;
};
