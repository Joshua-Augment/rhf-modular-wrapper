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
import InputWrapper from "../../core/InputWrapper/index.js";
var Lines = function (props) {
    var _a;
    return (_jsx(InputWrapper, __assign({ empty: '', type: (_a = props.type) !== null && _a !== void 0 ? _a : "lines" }, props, { children: _jsx(_Lines, __assign({}, props)) })));
};
var _Lines = function (props) {
    var _a, _b, _c;
    return (_jsx("textarea", { id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : "", value: props.value, onChange: function (e) { return props.onChange(e.target.value); }, 
        // {...props.register(props.name, {value: props.value})}
        placeholder: props.placeholder, rows: (_c = props.rows) !== null && _c !== void 0 ? _c : 3, cols: props.cols }));
};
export default Lines;
//# sourceMappingURL=Lines.js.map