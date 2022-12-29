"use strict";
exports.__esModule = true;
new MutationObserver(function () {
    Array.prototype.forEach.call(document.body.querySelectorAll('*[data-mask]'), applyDataMask);
}).observe(document, { subtree: true, childList: true });
// document.onreadystatechange = function () {
//     if (document.readyState === 'complete') {
// Array.prototype.forEach.call(
//     document.body.querySelectorAll('*[data-mask]'),
//     applyDataMask,
// )
//     }
// }
function applyDataMask(field) {
    var mask = field.dataset.mask;
    field.addEventListener('keyup', onKeyup);
    function onKeyup(e) {
        var element = e.target;
        if (element.tagName.toUpperCase() === 'INPUT') {
            var value = e.target.value;
            var val = value.replace(/\D/g, '');
            var pad = mask.replace(/\D/g, '').replace(/0/g, '_');
            var formated = val + pad.substring(0, pad.length - val.length);
            if (['Backspace', 'Delete'].includes(e.key)) {
                return;
            }
            var valueMaskPos = 0;
            val = '';
            for (var i = 0; i < mask.length; i++) {
                if (isNaN(parseInt(mask.charAt(i)))) {
                    val += mask.charAt(i);
                }
                else {
                    val += formated[valueMaskPos++];
                }
            }
            if (val.indexOf('_') > -1) {
                val = val.substr(0, val.indexOf('_'));
            }
            field.value = val;
            field.setAttribute('maxLength', mask.length);
        }
    }
}
