"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const Error_1 = __importDefault(require("@mui/icons-material/Error"));
const Info_1 = __importDefault(require("@mui/icons-material/Info"));
const Form_1 = require("./Form");
const InputElemWrapper = (props) => {
    var _a;
    const Wrapper = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : (0, react_1.useContext)(Form_1.ThemeContext).inputTemplate;
    const WrapElem = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        if (Wrapper !== null && Wrapper !== undefined) {
            return react_1.default.createElement(Wrapper, Object.assign({}, props));
        }
        else {
            return react_1.default.createElement("div", { style: { position: 'relative' }, className: `form-item-wrapper ${(_b = (_a = props === null || props === void 0 ? void 0 : props.customClasses) === null || _a === void 0 ? void 0 : _a.wrapperClassName) !== null && _b !== void 0 ? _b : ''}` }, props.reversedLabel === true ?
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? 'no-border' : ''}` }, props.children),
                    react_1.default.createElement("label", { htmlFor: (_c = props.id) !== null && _c !== void 0 ? _c : props.name, className: (_e = (_d = props === null || props === void 0 ? void 0 : props.customClasses) === null || _d === void 0 ? void 0 : _d.labelClassName) !== null && _e !== void 0 ? _e : '' },
                        props.noBorder !== false && react_1.default.createElement("span", null,
                            props.label,
                            " ",
                            ' '),
                        react_1.default.createElement("span", null,
                            props.helperText && react_1.default.createElement(Tooltip_1.default, { title: props.helperText },
                                react_1.default.createElement(Info_1.default, { style: { color: 'blue' } })),
                            " ",
                            ' '),
                        react_1.default.createElement("span", null,
                            props.errors && react_1.default.createElement(Tooltip_1.default, { title: props.errors.message },
                                react_1.default.createElement(Error_1.default, { style: { color: 'red' } })),
                            " ",
                            ' '))) :
                react_1.default.createElement(react_1.default.Fragment, null,
                    react_1.default.createElement("label", { htmlFor: (_f = props.id) !== null && _f !== void 0 ? _f : props.name, className: (_h = (_g = props === null || props === void 0 ? void 0 : props.customClasses) === null || _g === void 0 ? void 0 : _g.labelClassName) !== null && _h !== void 0 ? _h : '' },
                        props.noBorder !== false && react_1.default.createElement("span", null,
                            props.label,
                            " ",
                            ' '),
                        react_1.default.createElement("span", null,
                            props.helperText && react_1.default.createElement(Tooltip_1.default, { title: props.helperText },
                                react_1.default.createElement(Info_1.default, { style: { color: 'blue' } })),
                            " ",
                            ' '),
                        react_1.default.createElement("span", null,
                            props.errors && react_1.default.createElement(Tooltip_1.default, { title: props.errors.message },
                                react_1.default.createElement(Error_1.default, { style: { color: 'red' } })),
                            " ",
                            ' ')),
                    react_1.default.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? 'no-border' : ''}` }, props.children)));
        }
    }, []);
    return WrapElem;
};
exports.default = InputElemWrapper;
//# sourceMappingURL=InputElemWrapper.js.map