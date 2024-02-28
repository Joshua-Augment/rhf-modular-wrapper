var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React, { useContext, useMemo } from "react";
import Tooltip from "@mui/material/Tooltip";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import { ThemeContext } from "./Form";
import { useInputValAndError } from "./hook/useInputValnError";
const InputElemWrapper = (props) => {
    console.log(`[InputElementWrapper] - props `, props);
    let _props = Object.assign({}, props);
    _props.children = undefined;
    const _a = useInputValAndError(props.name), { value, error } = _a, rest = __rest(_a, ["value", "error"]);
    const theme = useContext(ThemeContext);
    // const Element = props.element ??
    //   (theme.elements !== null && theme.elements[props.type] !== undefined ? theme.elements[props.type] : null)
    const Wrapper = useMemo(() => { var _a, _b; return (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : theme.inputTemplate) !== null && _b !== void 0 ? _b : null; }, [props.helperText, props.label, props.noLabel, props.placeholder, value, error === null || error === void 0 ? void 0 : error.message, props === null || props === void 0 ? void 0 : props.inputWrapper, theme === null || theme === void 0 ? void 0 : theme.inputTemplate]);
    const WrapElem = useMemo(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return Wrapper !== null && Wrapper !== undefined ? (React.createElement(Wrapper, Object.assign({}, props, { value: value }, rest))) : (React.createElement("div", { style: Object.assign({ position: "relative" }, props.style), className: `form-item-wrapper ${(_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.wrapperClassName) !== null && _b !== void 0 ? _b : ""}` }, props.reversedLabel === true ? (React.createElement(React.Fragment, null,
            React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? "no-border" : ""}` }, props.children),
            React.createElement("label", { htmlFor: (_c = props.id) !== null && _c !== void 0 ? _c : props.name, className: (_e = (_d = props === null || props === void 0 ? void 0 : props.customClasses) === null || _d === void 0 ? void 0 : _d.labelClassName) !== null && _e !== void 0 ? _e : "", style: { marginLeft: "5px" } },
                props.noBorder !== false && props.noLabel !== true && React.createElement("span", null,
                    props.label,
                    " "),
                React.createElement("span", null,
                    props.helperText && (React.createElement(Tooltip, { title: props.helperText },
                        React.createElement(InfoIcon, { style: { color: "blue", fontSize: "10px" } }))),
                    " "),
                React.createElement("span", null,
                    error && (React.createElement(Tooltip, { title: error.message },
                        React.createElement(ErrorIcon, { style: { color: "red", fontSize: "10px" } }))),
                    " ")))) : (React.createElement(React.Fragment, null,
            React.createElement("label", { htmlFor: (_f = props.id) !== null && _f !== void 0 ? _f : props.name, className: (_h = (_g = props === null || props === void 0 ? void 0 : props.customClasses) === null || _g === void 0 ? void 0 : _g.labelClassName) !== null && _h !== void 0 ? _h : "", style: { marginRight: "5px" } },
                props.noBorder !== false && props.noLabel !== true && React.createElement("span", null,
                    props.label,
                    " "),
                React.createElement("span", null,
                    props.helperText && (React.createElement(Tooltip, { title: props.helperText },
                        React.createElement(InfoIcon, { style: { color: "blue", fontSize: "10px" } }))),
                    " "),
                React.createElement("span", null,
                    error && (React.createElement(Tooltip, { title: error.message },
                        React.createElement(ErrorIcon, { style: { color: "red", fontSize: "10px" } }))),
                    " ")),
            React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? "no-border" : ""}` }, props.children)))));
    }, [value, error === null || error === void 0 ? void 0 : error.message, props.element, JSON.stringify(_props)]);
    return WrapElem;
};
export default React.memo(InputElemWrapper);
//# sourceMappingURL=InputElemWrapper.js.map