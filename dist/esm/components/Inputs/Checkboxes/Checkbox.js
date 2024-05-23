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
import InputWrapper from "../../core/InputWrapper/index";
var Checkbox = function (props) {
    var _a;
    return (_jsx(InputWrapper, __assign({ empty: null, type: (_a = props.type) !== null && _a !== void 0 ? _a : "checkbox" }, props, { reversedLabel: true, customClasses: { wrapperClassName: "form-check" }, style: { display: "flex", alignItems: "center" } }, { children: _jsx(_Checkbox, __assign({}, props)) })));
};
var _Checkbox = function (props) {
    return _jsx("input", __assign({ id: props.name, type: "checkbox", checked: props.value }, props.register(props.name)));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map