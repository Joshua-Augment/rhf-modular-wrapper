import React, { useMemo } from 'react';
import { InputWrapper } from '../../../core';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useFormContext } from 'react-hook-form';
const Slider = (props) => {
    var _a;
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'slider' }, props),
        React.createElement(RangeSlider, Object.assign({}, props, props.sliderOptions, { value: val, onInput: (a) => setValue(props.name, a) }))));
};
export default Slider;
//# sourceMappingURL=index.js.map