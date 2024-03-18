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
import { useContext } from "react";
import { ThemeContext } from "../../Form.js";
import Logger from "../../Logger/index.js";
import InputInnerWrapper from "./components/InputInnerWrapper.js";
var InputWrapperv2 = function (props) {
    var _a, _b, _c, _d;
    Logger.info("Value - ".concat(typeof props.value === 'object' ? JSON.stringify(props.value) : props.value), "".concat(props.name, " - InputWrapperv2"), "start");
    Logger.info(props, "".concat(props.name, " - InputWrapperv2"));
    var _e = useContext(ThemeContext), inputTemplate = _e.inputTemplate, elements = _e.elements;
    return _jsx(InputInnerWrapper, __assign({}, props, { inputWrapper: (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : inputTemplate) !== null && _b !== void 0 ? _b : undefined, inputElement: (_d = elements === null || elements === void 0 ? void 0 : elements[((_c = props === null || props === void 0 ? void 0 : props.type) !== null && _c !== void 0 ? _c : 'line')]) !== null && _d !== void 0 ? _d : null }, { children: props.children }));
};
export default InputWrapperv2;
//# sourceMappingURL=index.js.map