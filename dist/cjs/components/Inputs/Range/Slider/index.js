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
var index_1 = require("../../../core/index");
// @ts-ignore
var react_range_slider_input_1 = __importDefault(require("react-range-slider-input"));
require("react-range-slider-input/dist/style.css");
var Slider = function (props) {
    var _a;
    return ((0, jsx_runtime_1.jsx)(index_1.InputWrapper, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "slider" }, props, { children: (0, jsx_runtime_1.jsx)(_Slider, __assign({}, props)) })));
};
var _Slider = function (props) {
    return (0, jsx_runtime_1.jsx)(react_range_slider_input_1.default, __assign({}, props, props.sliderOptions, { value: props.value, onInput: function (a) { return props.onChange(a); } }));
};
exports.default = Slider;
//# sourceMappingURL=index.js.map