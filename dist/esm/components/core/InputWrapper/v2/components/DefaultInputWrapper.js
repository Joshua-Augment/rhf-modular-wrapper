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
import React from "react";
var DefaultInputWrapper = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    return (_jsx("div", __assign({ style: __assign({ position: "relative" }, props.style), className: "form-item-wrapper ".concat((_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.wrapperClassName) !== null && _b !== void 0 ? _b : "") }, { children: props.reversedLabel === true ? (_jsxs(React.Fragment, { children: [_jsx("div", __assign({ className: "form-item-child-wrapper ".concat(props.noBorder ? "no-border" : "") }, { children: props.children })), _jsxs("label", __assign({ htmlFor: (_c = props.id) !== null && _c !== void 0 ? _c : props.name, className: (_e = (_d = props === null || props === void 0 ? void 0 : props.customClasses) === null || _d === void 0 ? void 0 : _d.labelClassName) !== null && _e !== void 0 ? _e : "", style: { marginLeft: "5px" } }, { children: [props.noBorder !== false && props.noLabel !== true && _jsxs("span", { children: [props.label, " "] }), _jsxs("span", __assign({ className: 'form-item-helper-text' }, { children: [props.helperText && (props.helperText), " "] }))] })), props.error && _jsx("span", __assign({ className: "form-item-error-text" }, { children: props.error.message }))] }, "rhf-wrapper-".concat(props.name))) : (_jsxs(React.Fragment, { children: [_jsxs("label", __assign({ htmlFor: (_f = props.id) !== null && _f !== void 0 ? _f : props.name, className: (_h = (_g = props === null || props === void 0 ? void 0 : props.customClasses) === null || _g === void 0 ? void 0 : _g.labelClassName) !== null && _h !== void 0 ? _h : "", style: { marginRight: "5px" } }, { children: [props.noBorder !== false && props.noLabel !== true && _jsxs("span", { children: [props.label, " "] }), _jsxs("span", __assign({ className: 'form-item-helper-text' }, { children: [props.helperText && (props.helperText), " "] }))] })), _jsx("div", __assign({ className: "form-item-child-wrapper ".concat(props.noBorder ? "no-border" : "") }, { children: props.children })), props.error && _jsx("span", __assign({ className: "form-item-error-text" }, { children: props.error.message }))] }, "rhf-wrapper-".concat(props.name))) })));
};
export default React.memo(DefaultInputWrapper);
//# sourceMappingURL=DefaultInputWrapper.js.map