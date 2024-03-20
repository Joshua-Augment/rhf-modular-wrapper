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
import Logger from "../../core/Logger/index";
// import { useInputValAndError } from '../../core/hook/useInputValnError'
var Line = function (props) {
    var _a;
    return (_jsx(InputWrapper, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "line" }, props, { children: _jsx(_Line, __assign({}, props)) })));
};
var _Line = function (props) {
    var _a, _b, _c;
    Logger.info(props, "Line", "start");
    Logger.info(null, null, "end");
    return (_jsx("input", __assign({ disabled: props.disabled, id: props.name, className: (_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.inputClassName) !== null && _b !== void 0 ? _b : "" }, props.register(props.name), { placeholder: props.placeholder, type: (_c = props.type) !== null && _c !== void 0 ? _c : "text" })));
};
export default Line;
//# sourceMappingURL=Line.js.map