"use strict";
exports.__esModule = true;
exports.useClickOutside = void 0;
var react_1 = require("react");
exports.useClickOutside = function (handler) {
    var domNode = react_1.useRef();
    react_1.useEffect(function () {
        var maybeHandler = function (event) {
            var _a;
            if (!((_a = domNode.current) === null || _a === void 0 ? void 0 : _a.contains(event.target))) {
                handler();
            }
        };
        document.addEventListener('mousedown', maybeHandler);
        return function () {
            document.removeEventListener('mousedown', maybeHandler);
        };
    });
    return domNode;
};
