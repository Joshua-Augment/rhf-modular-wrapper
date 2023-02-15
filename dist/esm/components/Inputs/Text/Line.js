import React from 'react';
import InputWrapper from '../../core/InputWrapper';
const Line = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props), (IWprops) => {
        var _a, _b, _c;
        console.log("[props] - ", props);
        return React.createElement("input", { id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '', name: props.name, value: IWprops.value, onChange: IWprops.onChange, placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : 'text' });
    }));
};
export default Line;
//# sourceMappingURL=Line.js.map