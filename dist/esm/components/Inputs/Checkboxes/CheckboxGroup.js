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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
var CheckboxGroup = function (props) {
    var _a;
    var orientation = (_a = props.orientation) !== null && _a !== void 0 ? _a : "horizontal";
    return (_jsxs("div", { children: [props.title && _jsx("div", __assign({ className: "form-label" }, { children: props.title })), _jsx("div", __assign({ className: "checkbox-group ".concat(orientation === "horizontal" ? "f-row" : "f-col") }, { children: props.children }))] }));
};
export default CheckboxGroup;
//# sourceMappingURL=CheckboxGroup.js.map