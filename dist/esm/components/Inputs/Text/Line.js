import React, { useState } from 'react';
import InputWrapper from '../../core/InputWrapper';
const Line = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props), (IWprops) => React.createElement(LineWrapper, Object.assign({}, IWprops, props))));
};
const LineWrapper = (props) => {
    var _a, _b, _c, _d, _e;
    const [value, setValue] = useState((_b = (_a = props.value) !== null && _a !== void 0 ? _a : props.defaultValue) !== null && _b !== void 0 ? _b : '');
    const onChange = (a) => { props.onChange(a.target.value); setValue(a.target.value); };
    return React.createElement("input", { id: props.name, className: (_d = (_c = props === null || props === void 0 ? void 0 : props.customClasses) === null || _c === void 0 ? void 0 : _c.inputClassName) !== null && _d !== void 0 ? _d : '', name: props.name, value: value, onChange: onChange, placeholder: props.placeholder, type: (_e = props.type) !== null && _e !== void 0 ? _e : 'text' });
};
export default Line;
//# sourceMappingURL=Line.js.map