"use strict";
exports.__esModule = true;
String.prototype.firstName = function () {
    var value = this.toString();
    var first = value.split(' ');
    return first[0];
};
