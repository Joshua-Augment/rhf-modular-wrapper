import React from "react";
import InputWrapper from "../../core/InputWrapper";
const Lines = (props) => {
    var _a;
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "lines" }, props),
        React.createElement(_Lines, Object.assign({}, props))));
};
const _Lines = (props) => {
    var _a, _b, _c;
    return (React.createElement("textarea", Object.assign({ id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : "" }, props.register(props.name), { placeholder: props.placeholder, rows: (_c = props.rows) !== null && _c !== void 0 ? _c : 3, cols: props.cols })));
};
export default Lines;
//# sourceMappingURL=Lines.js.map