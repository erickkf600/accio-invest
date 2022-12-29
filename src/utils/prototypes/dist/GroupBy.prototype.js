"use strict";
exports.__esModule = true;
Array.prototype.groupBy = function (key) {
    var reduced = this.reduce(function (rv, x) {
        ;
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
    return Object.keys(reduced).map(function (el) {
        return {
            key: el,
            data: reduced[el]
        };
    });
};
