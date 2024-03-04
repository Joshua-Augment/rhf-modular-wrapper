import React from "react";
import { Tooltip } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
const DefaultInputWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log(`value for ${props.name}  - ${typeof props.value} - `, props.value);
    return (React.createElement("div", { style: Object.assign({ position: "relative" }, props.style), className: `form-item-wrapper ${(_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.wrapperClassName) !== null && _b !== void 0 ? _b : ""}` }, props.reversedLabel === true ? (React.createElement(React.Fragment, { key: `rhf-wrapper-${props.name}` },
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
                props.error && (React.createElement(Tooltip, { title: props.error.message },
                    React.createElement(ErrorIcon, { style: { color: "red", fontSize: "10px" } }))),
                " ")))) : (React.createElement(React.Fragment, { key: `rhf-wrapper-${props.name}` },
        React.createElement("label", { htmlFor: (_f = props.id) !== null && _f !== void 0 ? _f : props.name, className: (_h = (_g = props === null || props === void 0 ? void 0 : props.customClasses) === null || _g === void 0 ? void 0 : _g.labelClassName) !== null && _h !== void 0 ? _h : "", style: { marginRight: "5px" } },
            props.noBorder !== false && props.noLabel !== true && React.createElement("span", null,
                props.label,
                " "),
            React.createElement("span", null,
                props.helperText && (React.createElement(Tooltip, { title: props.helperText },
                    React.createElement(InfoIcon, { style: { color: "blue", fontSize: "10px" } }))),
                " "),
            React.createElement("span", null,
                props.error && (React.createElement(Tooltip, { title: props.error.message },
                    React.createElement(ErrorIcon, { style: { color: "red", fontSize: "10px" } }))),
                " ")),
        React.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? "no-border" : ""}` }, props.children)))));
};
export default React.memo(DefaultInputWrapper);
//# sourceMappingURL=DefaultInputWrapper.js.map