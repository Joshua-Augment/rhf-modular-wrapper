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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Form = exports.ThemeContext = void 0;
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
require("../styling/core.css");
exports.ThemeContext = (0, react_1.createContext)(null);
const BSTheme = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../styling/BootstrapTheme'))));
const MUITheme = (0, react_1.lazy)(() => Promise.resolve().then(() => __importStar(require('../styling/MUITheme'))));
const ChosenTheme = ({ children, style }) => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(react_1.default.Suspense, { fallback: react_1.default.createElement(react_1.default.Fragment, null) },
            (style === undefined || style == 'bootstrap') && react_1.default.createElement(BSTheme, null),
            (style === 'mui') && react_1.default.createElement(MUITheme, null)),
        children));
};
const Form = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const formID = (0, react_1.useMemo)(() => { var _a; return (_a = props.id) !== null && _a !== void 0 ? _a : `rhf-wc-f-${new Date().getTime()}`; }, []);
    const methods = (0, react_hook_form_1.useForm)({
        mode: (_a = props.mode) !== null && _a !== void 0 ? _a : "onChange",
        reValidateMode: (_b = props.reValidateMode) !== null && _b !== void 0 ? _b : 'onChange',
        defaultValues: props.defaultValues,
        resolver: props.resolver,
        context: props.context,
        criteriaMode: (_c = props.criteriaMode) !== null && _c !== void 0 ? _c : "firstError",
        shouldFocusError: (_d = props.shouldFocusError) !== null && _d !== void 0 ? _d : true,
        shouldUnregister: (_e = props.shouldUnregister) !== null && _e !== void 0 ? _e : false,
        shouldUseNativeValidation: (_f = props.shouldUseNativeValidation) !== null && _f !== void 0 ? _f : false,
        delayError: (_g = props.delayError) !== null && _g !== void 0 ? _g : undefined
    });
    return (react_1.default.createElement(ChosenTheme, { style: props.style },
        react_1.default.createElement(exports.ThemeContext.Provider, { value: (_h = props.inputWrapper) !== null && _h !== void 0 ? _h : null },
            react_1.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, methods),
                react_1.default.createElement("form", { onSubmit: methods.handleSubmit((data) => props.onSubmit(data).then(() => { if (props.resetOnComplete) {
                        methods.reset();
                    } }), () => { if (props.resetOnComplete) {
                        methods.reset();
                    } }), id: formID }, props.children)))));
};
exports.Form = Form;
//# sourceMappingURL=Form.js.map