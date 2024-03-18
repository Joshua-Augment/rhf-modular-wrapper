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
import React, { useEffect } from "react";
import InputWrapper from "../../core/InputWrapper/index.js";
import "../../styling/Radiobox.css";
var Radiobox = function (props) {
    var _a;
    return (_jsx(InputWrapper, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "radiobox" }, props, { id: "".concat(props.name), noBorder: true }, { children: _jsx(_Radiobox, __assign({}, props)) })));
};
var _Radiobox = function (props) {
    useEffect(function () {
        if (props.value === undefined || props.value === "" || props.value === null) {
            props.onChange(props.options[0].value);
        }
    }, [props.value]);
    return (_jsx("div", __assign({ className: "radio-button-group" }, { children: props.options.map(function (option, i) {
            return option.reversed ? (_jsxs(React.Fragment, { children: [_jsx("input", { type: "radio", id: "".concat(props.name, "-").concat(option.value), name: props.name, value: option.value }), _jsx("br", {}), _jsx("label", __assign({ htmlFor: "".concat(props.name, "-").concat(option.value) }, { children: option.label }))] }, "rhf-".concat(props.name, "-rb-").concat(option.value))) : (_jsxs(React.Fragment, { children: [_jsx("label", __assign({ htmlFor: "".concat(props.name, "-").concat(option.value) }, { children: option.label })), _jsx("br", {}), _jsx("input", { type: "radio", id: "".concat(props.name, "-").concat(option.value), name: props.name, value: option.value })] }, "rhf-".concat(props.name, "-rb-").concat(option.value)));
        }) })));
};
export default Radiobox;
//# sourceMappingURL=Radiobox.js.map