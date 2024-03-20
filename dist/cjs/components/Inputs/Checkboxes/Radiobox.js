"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importDefault(require("react"));
var index_1 = __importDefault(require("../../core/InputWrapper/index"));
require("../../styling/Radiobox.css");
var Radiobox = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.default, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "radiobox" }, props, { id: "".concat(props.name), noBorder: true }, { children: (0, jsx_runtime_1.jsx)(_Radiobox, __assign({}, props)) })));
};
var _Radiobox = function (props) {
    console.log("Radiobox value : ", props.value);
    return ((0, jsx_runtime_1.jsx)("div", __assign({ className: "radio-button-group" }, { children: props.options.map(function (option, i) {
            return option.reversed ? ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("input", __assign({}, props.register(props.name), { type: "radio", id: "".concat(props.name, "-").concat(option.value), value: option.value })), (0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "".concat(props.name, "-").concat(option.value) }, { children: option.label }))] }, "rhf-".concat(props.name, "-rb-").concat(option.value))) : ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)("label", __assign({ htmlFor: "".concat(props.name, "-").concat(option.value) }, { children: option.label })), (0, jsx_runtime_1.jsx)("input", __assign({}, props.register(props.name), { type: "radio", id: "".concat(props.name, "-").concat(option.value), value: option.value }))] }, "rhf-".concat(props.name, "-rb-").concat(option.value)));
        }) })));
};
exports.default = Radiobox;
//# sourceMappingURL=Radiobox.js.map