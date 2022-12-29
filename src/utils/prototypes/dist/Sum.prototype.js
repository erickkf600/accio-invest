"use strict";
exports.__esModule = true;
Array.prototype.sum = function (key) {
    return this.reduce(function (acc, el) {
        return acc + el[key];
    }, 0);
};
