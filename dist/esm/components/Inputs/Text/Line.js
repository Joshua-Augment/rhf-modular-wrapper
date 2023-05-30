import React, { useMemo } from 'react';
import { useFormContext } from "react-hook-form";
import InputWrapper from '../../core/InputWrapper';
const Line = (props) => {
    var _a, _b, _c;
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    return (React.createElement(InputWrapper, Object.assign({}, props),
        React.createElement("input", { id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : '', name: props.name, value: val, onChange: (a) => setValue(props.name, a.target.value), placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : 'text' })));
};
export default Line;
//# sourceMappingURL=Line.js.map