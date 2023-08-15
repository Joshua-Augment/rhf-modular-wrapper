import React from "react";
import InputWrapper from "../../core/InputWrapper";
import { useInputValAndError } from "../../core/hook/useInputValnError";
const Lines = (props) => {
    var _a, _b, _c, _d;
    // const {watch, setValue} = useFormContext()
    const { value, setValue } = useInputValAndError(props.name);
    // const _val = watch(props.name)
    // const val = useMemo(() => _val ,[_val])
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'lines' }, props),
        React.createElement("textarea", { id: props.name, className: (_c = (_b = props === null || props === void 0 ? void 0 : props.customClasses) === null || _b === void 0 ? void 0 : _b.inputClassName) !== null && _c !== void 0 ? _c : "", name: props.name, value: value !== undefined && value !== null ? value : '', onChange: (a) => setValue(props.name, a.target.value), placeholder: props.placeholder, rows: (_d = props.rows) !== null && _d !== void 0 ? _d : 3, cols: props.cols })));
};
export default Lines;
//# sourceMappingURL=Lines.js.map