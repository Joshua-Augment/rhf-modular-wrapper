import React, { useEffect } from 'react';
import InputWrapper from '../../core/InputWrapper';
import { useInputValAndError } from '../../core/hook/useInputValnError';
const Line = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const { value, setValue } = useInputValAndError(props.name);
    // console.log(`Line - ${props.name} - ${value}`)
    useEffect(() => {
        if (props.type === 'number' && value === '') {
            // console.log(`[Setting] Setting value for ${props.name} in line from ${value} to ${props.type === 'number' ? 0 : ''}`)
            setValue(props.name, props.type === 'number' ? 0 : '');
        }
    }, [value]);
    const handleInput = (a) => {
        // console.log(`[Setting] Value changed! for ${props.name} in line from ${value} to ${a.target.value}`)
        setValue(props.name, a.target.value);
    };
    return ((props === null || props === void 0 ? void 0 : props.type) === "hidden" ?
        React.createElement("input", { disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '', name: props.name, value: value !== undefined && value !== null ? value : "", onChange: (a) => handleInput(a), placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : 'text' }) :
        React.createElement(InputWrapper, Object.assign({ type: (_d = props.type) !== null && _d !== void 0 ? _d : 'line' }, props),
            React.createElement("input", { disabled: props.disabled, id: props.name, className: (_f = (_e = props === null || props === void 0 ? void 0 : props.customClasses) === null || _e === void 0 ? void 0 : _e.inputClassName) !== null && _f !== void 0 ? _f : '', name: props.name, value: value !== undefined && value !== null ? value : "", onChange: (a) => handleInput(a), placeholder: props.placeholder, type: (_g = props.type) !== null && _g !== void 0 ? _g : 'text' })));
};
export default Line;
//# sourceMappingURL=Line.js.map