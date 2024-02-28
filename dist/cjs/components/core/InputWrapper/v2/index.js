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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const Form_1 = require("../../Form");
const useInputValnError_1 = require("../../hook/useInputValnError");
const Tooltip_1 = __importDefault(require("@mui/material/Tooltip"));
const Error_1 = __importDefault(require("@mui/icons-material/Error"));
const Info_1 = __importDefault(require("@mui/icons-material/Info"));
const react_hook_form_1 = require("react-hook-form");
const Logger_1 = __importDefault(require("../../Logger"));
const InputWrapperv2 = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    Logger_1.default.info(``, `${props.name} - InputWrapperv2`, "start");
    Logger_1.default.info(props, `${props.name} - InputWrapperv2`);
    const theme = (0, react_1.useContext)(Form_1.ThemeContext);
    const { name: _propsName, value: _propsValue, options: _propsOptions, items: _propsItems, label: _propsLabel, noLabel: _propsNoLabel, type: _propsType, helperText: _propsHelperText, } = props;
    const _m = (0, useInputValnError_1.useInputValAndError)(_propsName), { value, error } = _m, rest = __rest(_m, ["value", "error"]);
    // Getting the element needed. This can memoized
    Logger_1.default.info("Generating Element...", `${_propsName} - InputWrapperv2`);
    const Element = (0, react_1.useMemo)(() => { var _a, _b, _c; return (_a = props.element) !== null && _a !== void 0 ? _a : (theme.elements !== null && theme.elements[(_b = props.type) !== null && _b !== void 0 ? _b : "line"] !== undefined ? theme.elements[(_c = props.type) !== null && _c !== void 0 ? _c : "line"] : null); }, [props === null || props === void 0 ? void 0 : props.element, theme.elements]);
    const firstUpdate = (0, react_1.useRef)(true);
    Logger_1.default.info(`First Update : ${firstUpdate.current}`, `${_propsName} - InputWrapperv2`);
    const watchCalculated = ((_a = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _a === void 0 ? void 0 : _a.find) !== undefined ? rest.watch(props.calculatedField.find) : null;
    Logger_1.default.info(`Watching Calculated : ${String(watchCalculated)}`, `${_propsName} - InputWrapperv2`);
    // console.log(`For ${props.name}, error : `,rest.error)
    // On Value change
    (0, react_1.useEffect)(() => {
        Logger_1.default.info(`Default Value : ${String(props.defaultValue)}`, `${_propsName} - InputWrapperv2`);
        if (props.defaultValue !== undefined) {
            // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
            rest.setValue("inputWrapper - DefaultValue", props.defaultValue);
        }
    }, [props.defaultValue]);
    (0, react_1.useEffect)(() => {
        // // Make sure value isnt undefined
        // if (value === undefined) {rest.setValue(props.name, null)}
        // External Field
        if (props.externalStateSetter) {
            Logger_1.default.info(`Setting External State`, `${_propsName} - InputWrapperv2`);
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            Logger_1.default.info(`First Time Setting`, `${_propsName} - InputWrapperv2`);
            props.onInputChange(value, props.name, rest.getValues(), Object.assign({}, rest));
        }
        firstUpdate.current = false;
    }, [value]);
    (0, react_1.useEffect)(() => {
        // Calculated Fields
        if (props.calculatedField) {
            Logger_1.default.info(`Setting External State`, `${_propsName} - calculatedField`, "start");
            if (props.calculatedField.isPromise === true) {
                Logger_1.default.info(`Promise expected`, `${_propsName} - calculatedField`);
                props.calculatedField
                    .calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then((data) => {
                    Logger_1.default.info(`Calculated Data : ${String(data)}`, `${_propsName} - calculatedField`);
                    Logger_1.default.info(null, null, "end");
                    // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
                    rest.setValue(props.name, data);
                });
            }
            else {
                const _result = props.calculatedField.calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues());
                Logger_1.default.info(`No Promise expected. Value Expected : ${String(_result)}`, `${_propsName} - calculatedField`);
                // console.log(`[Setting] Setting value for ${props.name} by calculation`)
                rest.setValue(props.name, _result);
                Logger_1.default.info(null, null, "end");
            }
        }
    }, [watchCalculated]);
    const Wrapper = (A, B, children) => {
        if (A) {
            return react_1.default.createElement(A, null, children);
        }
        if (B) {
            return react_1.default.createElement(B, null, children);
        }
        return react_1.default.createElement("div", { style: { display: "flex", flexDirection: "row" } }, children);
    };
    Logger_1.default.info(`Setting Left Wrapper`, `${_propsName} - InputWrapperv2`);
    const WrapperElementLeft = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f;
        Logger_1.default.info(`useMemo`, `WrapperElementLeft`, "start");
        Logger_1.default.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left)
            ? Wrapper((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left) ? props.buttons.left(value, props.name, rest.getValues) : null)
            : null;
    }, [(_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.left, (_d = (_c = props === null || props === void 0 ? void 0 : props.buttons) === null || _c === void 0 ? void 0 : _c.wrapper) === null || _d === void 0 ? void 0 : _d.left, (_f = (_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.wrapper) === null || _f === void 0 ? void 0 : _f.all]);
    Logger_1.default.info(`Setting Right Wrapper`, `${_propsName} - InputWrapperv2`);
    const WrapperElementRight = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f;
        Logger_1.default.info(`useMemo`, `WrapperElementRight`, "start");
        Logger_1.default.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.right)
            ? Wrapper((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.right, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.right) ? props.buttons.right(value, props.name, rest.getValues) : null)
            : null;
    }, [(_g = props === null || props === void 0 ? void 0 : props.buttons) === null || _g === void 0 ? void 0 : _g.right, (_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.right, (_l = (_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.wrapper) === null || _l === void 0 ? void 0 : _l.all]);
    Logger_1.default.info(`Setting Chosen Element`, `${_propsName} - InputWrapperv2`);
    const ChosenElement = (0, react_1.useMemo)(() => {
        Logger_1.default.info(`useMemo`, `Chosen Element`, "start");
        Logger_1.default.info(null, null, "end");
        return Element !== undefined && Element !== null ? Element : null;
    }, [value, error === null || error === void 0 ? void 0 : error.message, props === null || props === void 0 ? void 0 : props.label, props === null || props === void 0 ? void 0 : props.value, props === null || props === void 0 ? void 0 : props.options, props === null || props === void 0 ? void 0 : props.items]);
    Logger_1.default.info(`Setting InputElemWrapper`, `${_propsName} - InputWrapperv2`);
    const InputElemWrapper = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
        let _props = Object.assign({}, props);
        _props.children = undefined;
        Logger_1.default.info(`Generating New Input`, `${_propsName} - InputElemWrapper`, "start");
        Logger_1.default.info(`Props : ${JSON.stringify(_props)}`, `${_propsName} - InputElemWrapper`);
        // const Element = props.element ??
        //   (theme.elements !== null && theme.elements[props.type] !== undefined ? theme.elements[props.type] : null)
        Logger_1.default.info(`Creating Wrapper`, `${_propsName} - InputElemWrapper`);
        const Wrapper = (_b = (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : theme.inputTemplate) !== null && _b !== void 0 ? _b : null;
        Logger_1.default.info(`Creating ChildComponent`, `${_propsName} - InputElemWrapper`);
        const ChildComponent = (react_1.default.createElement(react_1.default.Fragment, null,
            WrapperElementLeft,
            ((_c = props === null || props === void 0 ? void 0 : props.type) !== null && _c !== void 0 ? _c : "line").toLowerCase().includes("list") ? (ChosenElement ? (ChosenElement(Object.assign(Object.assign(Object.assign({}, (_d = props.children) === null || _d === void 0 ? void 0 : _d.props), rest), { disabled: props.disabled, type: (_e = props === null || props === void 0 ? void 0 : props.type) !== null && _e !== void 0 ? _e : "line", onChange: (a) => rest.setValue(props.name, a), value: value, error: error, 
                // error: formState.errors?.[field.name],
                source: "InputWrapper" }))) : (react_1.default.cloneElement(props.children, Object.assign(Object.assign(Object.assign({}, (_f = props.children) === null || _f === void 0 ? void 0 : _f.props), rest), { disabled: props.disabled, type: (_g = props === null || props === void 0 ? void 0 : props.type) !== null && _g !== void 0 ? _g : "line", onChange: (a) => rest.setValue(props.name, a), value: value, error: error, 
                // error: formState.errors?.[field.name],
                source: "InputWrapper" })))) : (react_1.default.createElement(react_hook_form_1.Controller, { name: props.name, control: rest.control, render: ({ field, formState }) => {
                    var _a, _b, _c, _d;
                    return ChosenElement
                        ? ChosenElement(Object.assign(Object.assign(Object.assign({}, (_a = props.children) === null || _a === void 0 ? void 0 : _a.props), rest), { disabled: props.disabled, type: (_b = props === null || props === void 0 ? void 0 : props.type) !== null && _b !== void 0 ? _b : "line", onChange: (a) => rest.setValue(props.name, a), onBlur: field.onBlur, value: field.value, error: error }))
                        : react_1.default.cloneElement(props.children, Object.assign(Object.assign(Object.assign({}, (_c = props.children) === null || _c === void 0 ? void 0 : _c.props), rest), { disabled: props.disabled, type: (_d = props === null || props === void 0 ? void 0 : props.type) !== null && _d !== void 0 ? _d : "line", onChange: (a) => rest.setValue(props.name, a), onBlur: field.onBlur, value: field.value, error: error }));
                } })),
            WrapperElementRight));
        Logger_1.default.info(`Creating WrapElement`, `${_propsName} - InputElemWrapper`);
        const WrapElem = Wrapper !== null && Wrapper !== undefined ? (react_1.default.createElement(Wrapper, Object.assign({}, props, { value: value }, rest, { children: ChildComponent }))) : (react_1.default.createElement("div", { style: Object.assign({ position: "relative" }, props.style), className: `form-item-wrapper ${(_j = (_h = props === null || props === void 0 ? void 0 : props.customClasses) === null || _h === void 0 ? void 0 : _h.wrapperClassName) !== null && _j !== void 0 ? _j : ""}` }, props.reversedLabel === true ? (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? "no-border" : ""}` }, ChildComponent),
            react_1.default.createElement("label", { htmlFor: (_k = props.id) !== null && _k !== void 0 ? _k : props.name, className: (_m = (_l = props === null || props === void 0 ? void 0 : props.customClasses) === null || _l === void 0 ? void 0 : _l.labelClassName) !== null && _m !== void 0 ? _m : "", style: { marginLeft: "5px" } },
                props.noBorder !== false && props.noLabel !== true && react_1.default.createElement("span", null,
                    props.label,
                    " "),
                react_1.default.createElement("span", null,
                    props.helperText && (react_1.default.createElement(Tooltip_1.default, { title: props.helperText },
                        react_1.default.createElement(Info_1.default, { style: { color: "blue", fontSize: "10px" } }))),
                    " "),
                react_1.default.createElement("span", null,
                    error && (react_1.default.createElement(Tooltip_1.default, { title: error.message },
                        react_1.default.createElement(Error_1.default, { style: { color: "red", fontSize: "10px" } }))),
                    " ")))) : (react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("label", { htmlFor: (_o = props.id) !== null && _o !== void 0 ? _o : props.name, className: (_q = (_p = props === null || props === void 0 ? void 0 : props.customClasses) === null || _p === void 0 ? void 0 : _p.labelClassName) !== null && _q !== void 0 ? _q : "", style: { marginRight: "5px" } },
                props.noBorder !== false && props.noLabel !== true && react_1.default.createElement("span", null,
                    props.label,
                    " "),
                react_1.default.createElement("span", null,
                    props.helperText && (react_1.default.createElement(Tooltip_1.default, { title: props.helperText },
                        react_1.default.createElement(Info_1.default, { style: { color: "blue", fontSize: "10px" } }))),
                    " "),
                react_1.default.createElement("span", null,
                    error && (react_1.default.createElement(Tooltip_1.default, { title: error.message },
                        react_1.default.createElement(Error_1.default, { style: { color: "red", fontSize: "10px" } }))),
                    " ")),
            react_1.default.createElement("div", { className: `form-item-child-wrapper ${props.noBorder ? "no-border" : ""}` }, ChildComponent)))));
        Logger_1.default.info(null, null, "end");
        return WrapElem;
    }, [_propsName, _propsValue, _propsOptions, _propsItems, _propsLabel, _propsNoLabel, _propsType, _propsHelperText]);
    Logger_1.default.info(null, null, "end");
    return InputElemWrapper;
};
exports.default = react_1.default.memo(InputWrapperv2);
//# sourceMappingURL=index.js.map