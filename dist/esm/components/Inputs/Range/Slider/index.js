import React from 'react';
import { InputWrapper } from '../../../core';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
const Slider = (props) => {
    var _a;
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'slider' }, props),
        React.createElement(_Slider, Object.assign({}, props))));
};
const _Slider = (props) => {
    return React.createElement(RangeSlider, Object.assign({}, props, props.sliderOptions, { value: props.value, onInput: (a) => props.onChange(a) }));
};
export default Slider;
//# sourceMappingURL=index.js.map