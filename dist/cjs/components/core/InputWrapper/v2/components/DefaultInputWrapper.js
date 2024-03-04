"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const DefaultInputWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    console.log('[DefaultInputWrapper] - Props : ', props);
    return (react_1.default.createElement("div", { style: Object.assign({ position: "relative" }, props.style), className: `form-item-wrapper ${(_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.wrapperClassName) !== null && _b !== void 0 ? _b : ""}` }, props.reversedLabel === true ? (react_1.default.createElement(react_1.default.Fragment, { key: `rhf-wrapper-${props.name}` },
        react_1.default.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? "no-border" : ""}` }, props.children),
        react_1.default.createElement("label", { htmlFor: (_c = props.id) !== null && _c !== void 0 ? _c : props.name, className: (_e = (_d = props === null || props === void 0 ? void 0 : props.customClasses) === null || _d === void 0 ? void 0 : _d.labelClassName) !== null && _e !== void 0 ? _e : "", style: { marginLeft: "5px" } },
            props.noBorder !== false && props.noLabel !== true && react_1.default.createElement("span", null,
                props.label,
                " "),
            react_1.default.createElement("span", { className: 'form-item-helper-text' },
                props.helperText && (props.helperText),
                " ")),
        props.error && react_1.default.createElement("span", { className: "form-item-error-text" }, props.error.message))) : (react_1.default.createElement(react_1.default.Fragment, { key: `rhf-wrapper-${props.name}` },
        react_1.default.createElement("label", { htmlFor: (_f = props.id) !== null && _f !== void 0 ? _f : props.name, className: (_h = (_g = props === null || props === void 0 ? void 0 : props.customClasses) === null || _g === void 0 ? void 0 : _g.labelClassName) !== null && _h !== void 0 ? _h : "", style: { marginRight: "5px" } },
            props.noBorder !== false && props.noLabel !== true && react_1.default.createElement("span", null,
                props.label,
                " "),
            react_1.default.createElement("span", { className: 'form-item-helper-text' },
                props.helperText && (props.helperText),
                " ")),
        react_1.default.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? "no-border" : ""}` }, props.children),
        props.error && react_1.default.createElement("span", { className: "form-item-error-text" }, props.error.message)))));
};
exports.default = react_1.default.memo(DefaultInputWrapper);
//# sourceMappingURL=DefaultInputWrapper.js.map