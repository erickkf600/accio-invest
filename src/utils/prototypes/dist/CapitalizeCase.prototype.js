"use strict";
exports.__esModule = true;
String.prototype.captalizeCase = function () {
    var value = this === null || this === void 0 ? void 0 : this.toString();
    if (!value)
        return '';
    var words = /\b(?!de|da|do|dos|das|of)[A-zÀ-ú]+/g;
    var newVal = value.replace(words, function (match) {
        return match.replace(/^\w/, function (word) { return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); });
    });
    return newVal.charAt(0).toUpperCase() + newVal.substr(1);
};
