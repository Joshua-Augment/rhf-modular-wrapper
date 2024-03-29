"use strict";
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
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = __importStar(require("react"));
var index_1 = __importDefault(require("../../../Logger/index"));
var react_hook_form_1 = require("react-hook-form");
var DefaultInputWrapper_1 = __importDefault(require("./DefaultInputWrapper"));
var useInputValnError_1 = require("../../../hook/useInputValnError");
var Form_1 = require("../../../Form");
var InputInnerWrapper = function (props) {
    return props.disableController ? (0, jsx_runtime_1.jsx)(InputInnerWrapperNoController, __assign({}, props)) : (0, jsx_runtime_1.jsx)(InputInnerWrapperWithController, __assign({}, props));
};
var InputInnerWrapperNoController = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    var debug = (0, react_1.useContext)(Form_1.ThemeContext).debug;
    var value = (_a = props.value) !== null && _a !== void 0 ? _a : null;
    var error = null;
    var fieldState = {};
    var onChange = function (a) { };
    var onBlur = function () { };
    var methods = {
        getValues: function (a) { return a; }
    };
    var _propsInputWrapper = props.inputWrapper, _propsName = props.name, _propsOptions = props.options, _propsItems = props.items, _propsLabel = props.label, _propsNoLabel = props.noLabel, _propsType = props.type, _propsHelperText = props.helperText;
    var firstUpdate = (0, react_1.useRef)(true);
    index_1.default.info(debug, "First Update : ".concat(firstUpdate.current), "".concat(_propsName, " - InputWrapperv2"));
    var watchCalculated = (0, react_hook_form_1.useWatch)({
        name: ((_b = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _b === void 0 ? void 0 : _b.find) !== undefined ? props.calculatedField.find : "#_#_noinputtofind_#_#",
    });
    index_1.default.info(debug, "Watching Calculated : ".concat(String(watchCalculated)), "".concat(_propsName, " - InputWrapperv2"));
    (0, react_1.useEffect)(function () {
        // External Field
        if (props.externalStateSetter) {
            index_1.default.info(debug, "Setting External State", "".concat(_propsName, " - InputWrapperv2"));
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            index_1.default.info(debug, "First Time Setting", "".concat(_propsName, " - InputWrapperv2"));
            props.onInputChange(value, _propsName, methods.getValues(), __assign({}, props.formMethods));
        }
        firstUpdate.current = false;
    }, [value]);
    (0, react_1.useEffect)(function () {
        // Calculated Fields
        if (props.calculatedField) {
            index_1.default.info(debug, "Calculating Field...", "".concat(_propsName, " - calculatedField"), "start");
            if (props.calculatedField.isPromise === true) {
                index_1.default.info(debug, "Promise expected", "".concat(_propsName, " - calculatedField"));
                props.calculatedField
                    .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then(function (data) {
                    index_1.default.info(debug, "Setting Value! Calculated Data : ".concat(String(data)), "".concat(_propsName, " - calculatedField"));
                    index_1.default.info(debug, null, null, "end");
                    console.log("[Setting] Setting value for ".concat(props.name, " by calculation (async)"));
                    // methods.setValue(props.name, data);
                    onChange(data);
                });
            }
            else {
                var _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
                index_1.default.info(debug, "Setting Value! No Promise expected. Value Expected : ".concat(String(_result)), "".concat(_propsName, " - calculatedField"));
                // methods.setValue(props.name, _result);
                onChange(_result);
                index_1.default.info(debug, null, null, "end");
            }
        }
    }, [watchCalculated]);
    var WrapperMaker = function (A, B, children) {
        if (A) {
            return (0, jsx_runtime_1.jsx)(A, { children: children });
        }
        if (B) {
            return (0, jsx_runtime_1.jsx)(B, { children: children });
        }
        return (0, jsx_runtime_1.jsx)("div", __assign({ style: { display: "flex", flexDirection: "row" } }, { children: children }));
    };
    index_1.default.info(debug, "Setting Left Wrapper", "".concat(_propsName, " - InputWrapperv2"));
    var WrapperElementLeft = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f;
        index_1.default.info(debug, "useMemo", "WrapperElementLeft", "start");
        index_1.default.info(debug, null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left) ? props.buttons.left(value, props.name, methods.getValues) : null)
            : null;
    }, [(_c = props === null || props === void 0 ? void 0 : props.buttons) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.left, (_g = (_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.wrapper) === null || _g === void 0 ? void 0 : _g.all]);
    index_1.default.info(debug, "Setting Right Wrapper", "".concat(_propsName, " - InputWrapperv2"));
    var WrapperElementRight = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f;
        index_1.default.info(debug, "useMemo", "WrapperElementRight", "start");
        index_1.default.info(debug, null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.right)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.right, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.right) ? props.buttons.right(value, props.name, methods.getValues) : null)
            : null;
    }, [(_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.right, (_k = (_j = props === null || props === void 0 ? void 0 : props.buttons) === null || _j === void 0 ? void 0 : _j.wrapper) === null || _k === void 0 ? void 0 : _k.right, (_m = (_l = props === null || props === void 0 ? void 0 : props.buttons) === null || _l === void 0 ? void 0 : _l.wrapper) === null || _m === void 0 ? void 0 : _m.all]);
    index_1.default.info(debug, "Setting Chosen Element", "".concat(_propsName, " - InputWrapperv2"));
    var ChosenElement = props.inputElement;
    var Wrapper = (0, react_1.useMemo)(function () { return _propsInputWrapper; }, [_propsInputWrapper]);
    var ChildComponent = ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [WrapperElementLeft, ChosenElement
                ? ChosenElement(__assign(__assign(__assign({}, (_o = props.children) === null || _o === void 0 ? void 0 : _o.props), methods), { disabled: props.disabled, type: (_p = props === null || props === void 0 ? void 0 : props.type) !== null && _p !== void 0 ? _p : "line", onBlur: onBlur, onChange: onChange, value: value, error: error, fieldState: fieldState, 
                    // formState,
                    source: "InputWrapper/index" }))
                : react_1.default.cloneElement(props.children, __assign(__assign(__assign({}, (_q = props.children) === null || _q === void 0 ? void 0 : _q.props), methods), { 
                    // formState,
                    disabled: props.disabled, type: (_r = props === null || props === void 0 ? void 0 : props.type) !== null && _r !== void 0 ? _r : "line", onBlur: onBlur, onChange: onChange, value: value, error: error, fieldState: fieldState, source: "InputWrapper/index" })), WrapperElementRight] }, props.name));
    index_1.default.info(debug, null, null, "end");
    var injectProps = __assign(__assign(__assign({}, props), { value: value, error: error, theme: null, fieldState: fieldState, onChange: onChange, onBlur: onBlur }), methods);
    return (0, jsx_runtime_1.jsx)(ChosenWrapper, { Wrapper: Wrapper, Default: DefaultInputWrapper_1.default, props: __assign(__assign({}, injectProps), { children: ChildComponent }) });
};
var InputInnerWrapperWithController = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    var debug = (0, react_1.useContext)(Form_1.ThemeContext).debug;
    var _u = (0, useInputValnError_1.useInputValAndError)(props.name, (_b = (_a = props.defaultValue) !== null && _a !== void 0 ? _a : props.empty) !== null && _b !== void 0 ? _b : null, (_c = props.disableController) !== null && _c !== void 0 ? _c : false), value = _u.value, error = _u.error, fieldState = _u.fieldState, onChange = _u.onChange, onBlur = _u.onBlur, methods = __rest(_u, ["value", "error", "fieldState", "onChange", "onBlur"]);
    var _propsInputWrapper = props.inputWrapper, _propsName = props.name, _propsOptions = props.options, _propsItems = props.items, _propsLabel = props.label, _propsNoLabel = props.noLabel, _propsType = props.type, _propsHelperText = props.helperText;
    var firstUpdate = (0, react_1.useRef)(true);
    index_1.default.info(debug, "First Update : ".concat(firstUpdate.current), "".concat(_propsName, " - InputWrapperv2"));
    var watchCalculated = (0, react_hook_form_1.useWatch)({
        name: ((_d = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _d === void 0 ? void 0 : _d.find) !== undefined ? props.calculatedField.find : "#_#_noinputtofind_#_#",
    });
    index_1.default.info(debug, "Watching Calculated : ".concat(String(watchCalculated)), "".concat(_propsName, " - InputWrapperv2"));
    (0, react_1.useEffect)(function () {
        // External Field
        if (props.externalStateSetter) {
            index_1.default.info(debug, "Setting External State", "".concat(_propsName, " - InputWrapperv2"));
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            index_1.default.info(debug, "First Time Setting", "".concat(_propsName, " - InputWrapperv2"));
            props.onInputChange(value, _propsName, methods.getValues(), __assign({}, props.formMethods));
        }
        firstUpdate.current = false;
    }, [value]);
    (0, react_1.useEffect)(function () {
        // Calculated Fields
        if (props.calculatedField) {
            index_1.default.info(debug, "Calculating Field...", "".concat(_propsName, " - calculatedField"), "start");
            if (props.calculatedField.isPromise === true) {
                index_1.default.info(debug, "Promise expected", "".concat(_propsName, " - calculatedField"));
                props.calculatedField
                    .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then(function (data) {
                    index_1.default.info(debug, "Setting Value! Calculated Data : ".concat(String(data)), "".concat(_propsName, " - calculatedField"));
                    index_1.default.info(debug, null, null, "end");
                    console.log("[Setting] Setting value for ".concat(props.name, " by calculation (async)"));
                    // methods.setValue(props.name, data);
                    onChange(data);
                });
            }
            else {
                var _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
                index_1.default.info(debug, "Setting Value! No Promise expected. Value Expected : ".concat(String(_result)), "".concat(_propsName, " - calculatedField"));
                // methods.setValue(props.name, _result);
                onChange(_result);
                index_1.default.info(debug, null, null, "end");
            }
        }
    }, [watchCalculated]);
    var WrapperMaker = function (A, B, children) {
        if (A) {
            return (0, jsx_runtime_1.jsx)(A, { children: children });
        }
        if (B) {
            return (0, jsx_runtime_1.jsx)(B, { children: children });
        }
        return (0, jsx_runtime_1.jsx)("div", __assign({ style: { display: "flex", flexDirection: "row" } }, { children: children }));
    };
    index_1.default.info(debug, "Setting Left Wrapper", "".concat(_propsName, " - InputWrapperv2"));
    var WrapperElementLeft = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f;
        index_1.default.info(debug, "useMemo", "WrapperElementLeft", "start");
        index_1.default.info(debug, null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left) ? props.buttons.left(value, props.name, methods.getValues) : null)
            : null;
    }, [(_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.left, (_g = (_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.wrapper) === null || _g === void 0 ? void 0 : _g.left, (_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.all]);
    index_1.default.info(debug, "Setting Right Wrapper", "".concat(_propsName, " - InputWrapperv2"));
    var WrapperElementRight = (0, react_1.useMemo)(function () {
        var _a, _b, _c, _d, _e, _f;
        index_1.default.info(debug, "useMemo", "WrapperElementRight", "start");
        index_1.default.info(debug, null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.right)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.right, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.right) ? props.buttons.right(value, props.name, methods.getValues) : null)
            : null;
    }, [(_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.right, (_m = (_l = props === null || props === void 0 ? void 0 : props.buttons) === null || _l === void 0 ? void 0 : _l.wrapper) === null || _m === void 0 ? void 0 : _m.right, (_p = (_o = props === null || props === void 0 ? void 0 : props.buttons) === null || _o === void 0 ? void 0 : _o.wrapper) === null || _p === void 0 ? void 0 : _p.all]);
    index_1.default.info(debug, "Setting Chosen Element", "".concat(_propsName, " - InputWrapperv2"));
    var ChosenElement = props.inputElement;
    var Wrapper = (0, react_1.useMemo)(function () { return _propsInputWrapper; }, [_propsInputWrapper]);
    var ChildComponent = ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [WrapperElementLeft, ChosenElement
                ? ChosenElement(__assign(__assign(__assign({}, (_q = props.children) === null || _q === void 0 ? void 0 : _q.props), methods), { disabled: props.disabled, type: (_r = props === null || props === void 0 ? void 0 : props.type) !== null && _r !== void 0 ? _r : "line", onBlur: onBlur, onChange: onChange, value: value, error: error, fieldState: fieldState, 
                    // formState,
                    source: "InputWrapper/index" }))
                : react_1.default.cloneElement(props.children, __assign(__assign(__assign({}, (_s = props.children) === null || _s === void 0 ? void 0 : _s.props), methods), { 
                    // formState,
                    disabled: props.disabled, type: (_t = props === null || props === void 0 ? void 0 : props.type) !== null && _t !== void 0 ? _t : "line", onBlur: onBlur, onChange: onChange, value: value, error: error, fieldState: fieldState, source: "InputWrapper/index" })), WrapperElementRight] }, props.name));
    index_1.default.info(debug, null, null, "end");
    var injectProps = __assign(__assign(__assign({}, props), { value: value, error: error, theme: null, fieldState: fieldState, onChange: onChange, onBlur: onBlur }), methods);
    return (0, jsx_runtime_1.jsx)(ChosenWrapper, { Wrapper: Wrapper, Default: DefaultInputWrapper_1.default, props: __assign(__assign({}, injectProps), { children: ChildComponent }) });
};
var ChosenWrapper = react_1.default.memo(function (_a) {
    var Wrapper = _a.Wrapper, Default = _a.Default, props = _a.props;
    return Wrapper ? (0, jsx_runtime_1.jsx)(Wrapper, __assign({}, props)) : (0, jsx_runtime_1.jsx)(Default, __assign({}, props));
});
exports.default = InputInnerWrapper;
//# sourceMappingURL=InputInnerWrapper.js.map