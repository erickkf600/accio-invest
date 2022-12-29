"use strict";
exports.__esModule = true;
new MutationObserver(function () {
    Array.prototype.forEach.call(document.body.querySelectorAll('*[data-uppercase]'), applyUpperCase);
}).observe(document, { subtree: true, childList: true });
function applyUpperCase(field) {
    field.addEventListener('keyup', onInput);
    function onInput(e) {
        var value = e.target.value;
        field.value = value.toLocaleUpperCase();
    }
}
