"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const core_1 = require("../../../core");
const react_range_slider_input_1 = __importDefault(require("react-range-slider-input"));
require("react-range-slider-input/dist/style.css");
const Slider = (props) => {
    var _a;
    return ((0, jsx_runtime_1.jsx)(core_1.InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'slider' }, props, { children: (0, jsx_runtime_1.jsx)(_Slider, Object.assign({}, props)) })));
};
const _Slider = (props) => {
    return (0, jsx_runtime_1.jsx)(react_range_slider_input_1.default, Object.assign({}, props, props.sliderOptions, { value: props.value, onInput: (a) => props.onChange(a) }));
};
exports.default = Slider;
//# sourceMappingURL=index.js.map