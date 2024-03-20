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
import { jsx as _jsx } from "react/jsx-runtime";
import { InputWrapper } from "../../../core/index";
// @ts-ignore
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
var Slider = function (props) {
    var _a;
    return (_jsx(InputWrapper, __assign({ empty: 0, type: (_a = props.type) !== null && _a !== void 0 ? _a : "slider" }, props, { children: _jsx(_Slider, __assign({}, props)) })));
};
var _Slider = function (props) {
    return _jsx(RangeSlider, __assign({}, props, props.sliderOptions, { value: props.value, onInput: function (a) { return props.onChange(a); } }));
};
export default Slider;
//# sourceMappingURL=index.js.map