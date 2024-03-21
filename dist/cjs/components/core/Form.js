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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = exports.Form = exports.ThemeContext = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var react_hook_form_1 = require("react-hook-form");
var yup_1 = require("@hookform/resolvers/yup");
require("../styling/form_bootstrap.css");
require("../styling/core.css");
exports.ThemeContext = (0, react_1.createContext)({ debug: false, inputTemplate: null, buttonTemplate: null, elements: {} });
var Form = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var formID = (0, react_1.useMemo)(function () { var _a; return (_a = props.id) !== null && _a !== void 0 ? _a : "rhf-wc-f-".concat(new Date().getTime()); }, []);
    var methods = (0, react_hook_form_1.useForm)({
        mode: (_a = props.mode) !== null && _a !== void 0 ? _a : "onChange",
        reValidateMode: (_b = props.reValidateMode) !== null && _b !== void 0 ? _b : "onSubmit",
        defaultValues: props.defaultValues,
        resolver: props.yupSchema ? (0, yup_1.yupResolver)(props.yupSchema) : undefined,
        context: props.context,
        criteriaMode: (_c = props.criteriaMode) !== null && _c !== void 0 ? _c : "firstError",
        shouldFocusError: (_d = props.shouldFocusError) !== null && _d !== void 0 ? _d : true,
        shouldUnregister: (_e = props.shouldUnregister) !== null && _e !== void 0 ? _e : true,
        shouldUseNativeValidation: (_f = props.shouldUseNativeValidation) !== null && _f !== void 0 ? _f : false,
        delayError: (_g = props.delayError) !== null && _g !== void 0 ? _g : undefined,
    });
    var inputWrapper = (0, react_1.useMemo)(function () { var _a; return (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : null; }, []);
    var buttonTemplate = (0, react_1.useMemo)(function () { var _a; return (_a = props.buttonWrapper) !== null && _a !== void 0 ? _a : null; }, []);
    var elements = (0, react_1.useMemo)(function () { var _a; return (_a = props.elements) !== null && _a !== void 0 ? _a : {}; }, []);
    return ((0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, __assign({ value: {
            inputTemplate: inputWrapper,
            buttonTemplate: buttonTemplate,
            elements: elements,
            debug: (_h = props.debug) !== null && _h !== void 0 ? _h : false,
        } }, { children: (0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, __assign({}, methods, { children: (0, jsx_runtime_1.jsx)("form", __assign({ onSubmit: methods.handleSubmit(props.onSubmit, props.onInvalid), id: formID }, { children: props.children })) })) })));
};
exports.Form = Form;
var SubmitButton = function (props) {
    var _a, _b, _c;
    var Wrapper = (0, react_1.useContext)(exports.ThemeContext).buttonTemplate;
    return Wrapper === null ? ((0, jsx_runtime_1.jsx)("button", __assign({ type: "submit", className: "".concat((_a = props.buttonClass) !== null && _a !== void 0 ? _a : "") }, { children: (_c = (_b = props.label) !== null && _b !== void 0 ? _b : props.children) !== null && _c !== void 0 ? _c : "" }))) : ((0, jsx_runtime_1.jsx)(Wrapper, __assign({}, props)));
};
exports.SubmitButton = SubmitButton;
//# sourceMappingURL=Form.js.map