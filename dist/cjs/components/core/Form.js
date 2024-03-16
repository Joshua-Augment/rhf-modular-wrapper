"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubmitButton = exports.Form = exports.ThemeContext = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_hook_form_1 = require("react-hook-form");
const yup_1 = require("@hookform/resolvers/yup");
require("../styling/form_bootstrap.css");
require("../styling/core.css");
exports.ThemeContext = (0, react_1.createContext)({ debug: false, inputTemplate: null, buttonTemplate: null, elements: {} });
const Form = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const formID = (0, react_1.useMemo)(() => { var _a; return (_a = props.id) !== null && _a !== void 0 ? _a : `rhf-wc-f-${new Date().getTime()}`; }, []);
    const methods = (0, react_hook_form_1.useForm)({
        mode: (_a = props.mode) !== null && _a !== void 0 ? _a : "onChange",
        reValidateMode: (_b = props.reValidateMode) !== null && _b !== void 0 ? _b : 'onChange',
        defaultValues: props.defaultValues,
        resolver: props.yupSchema ? (0, yup_1.yupResolver)(props.yupSchema) : undefined,
        context: props.context,
        criteriaMode: (_c = props.criteriaMode) !== null && _c !== void 0 ? _c : "firstError",
        shouldFocusError: (_d = props.shouldFocusError) !== null && _d !== void 0 ? _d : true,
        shouldUnregister: (_e = props.shouldUnregister) !== null && _e !== void 0 ? _e : true,
        shouldUseNativeValidation: (_f = props.shouldUseNativeValidation) !== null && _f !== void 0 ? _f : false,
        delayError: (_g = props.delayError) !== null && _g !== void 0 ? _g : undefined,
    });
    const inputWrapper = (0, react_1.useMemo)(() => { var _a; return (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : null; }, []);
    const buttonTemplate = (0, react_1.useMemo)(() => { var _a; return (_a = props.buttonWrapper) !== null && _a !== void 0 ? _a : null; }, []);
    const elements = (0, react_1.useMemo)(() => { var _a; return (_a = props.elements) !== null && _a !== void 0 ? _a : {}; }, []);
    const debug = (0, react_1.useMemo)(() => { var _a; return (_a = props.debug) !== null && _a !== void 0 ? _a : false; }, []);
    return ((0, jsx_runtime_1.jsx)(exports.ThemeContext.Provider, Object.assign({ value: {
            inputTemplate: inputWrapper,
            buttonTemplate: buttonTemplate,
            elements: elements,
            debug: debug
        } }, { children: (0, jsx_runtime_1.jsx)(react_hook_form_1.FormProvider, Object.assign({}, methods, { children: (0, jsx_runtime_1.jsx)("form", Object.assign({ onSubmit: methods.handleSubmit(props.onSubmit), id: formID }, { children: props.children })) })) })));
};
exports.Form = Form;
const SubmitButton = (props) => {
    var _a, _b, _c;
    const Wrapper = (0, react_1.useContext)(exports.ThemeContext).buttonTemplate;
    return Wrapper === null ?
        (0, jsx_runtime_1.jsx)("button", Object.assign({ type: "submit", className: `${(_a = props.buttonClass) !== null && _a !== void 0 ? _a : ''}` }, { children: (_c = (_b = props.label) !== null && _b !== void 0 ? _b : props.children) !== null && _c !== void 0 ? _c : '' })) :
        (0, jsx_runtime_1.jsx)(Wrapper, Object.assign({}, props));
};
exports.SubmitButton = SubmitButton;
//# sourceMappingURL=Form.js.map