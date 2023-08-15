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
exports.SubmitButton = exports.Form = exports.ThemeContext = void 0;
const react_1 = __importStar(require("react"));
const react_hook_form_1 = require("react-hook-form");
const yup_1 = require("@hookform/resolvers/yup");
require("../styling/form_bootstrap.css");
require("../styling/core.css");
exports.ThemeContext = (0, react_1.createContext)({ inputTemplate: null, buttonTemplate: null, elements: null });
// const BSTheme = lazy(()=>import('../styling/BootstrapTheme'))
// const MUITheme = lazy(()=>import('../styling/MUITheme'))
// const ChosenTheme = ({children,style}:{children:any, style?:'bootstrap' | 'mui'}) => {
//   return (
//     <>
//       <React.Suspense fallback={<></>}>
//         {(style === undefined || style == 'bootstrap') && <BSTheme />}
//         {(style === 'mui') && <MUITheme />}
//       </React.Suspense>
//       {children}
//     </>
//   )
// }
const Form = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
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
    return (react_1.default.createElement(exports.ThemeContext.Provider, { value: {
            inputTemplate: (_h = props.inputWrapper) !== null && _h !== void 0 ? _h : null,
            buttonTemplate: (_j = props.buttonWrapper) !== null && _j !== void 0 ? _j : null,
            elements: (_k = props.elements) !== null && _k !== void 0 ? _k : null
        } },
        react_1.default.createElement(react_hook_form_1.FormProvider, Object.assign({}, methods),
            react_1.default.createElement("form", { onSubmit: methods.handleSubmit(props.onSubmit), id: formID }, props.children))));
};
exports.Form = Form;
const SubmitButton = (props) => {
    var _a, _b, _c;
    const Wrapper = (0, react_1.useContext)(exports.ThemeContext).buttonTemplate;
    return Wrapper === null ?
        react_1.default.createElement("button", { type: "submit", className: `${(_a = props.buttonClass) !== null && _a !== void 0 ? _a : ''}` }, (_c = (_b = props.label) !== null && _b !== void 0 ? _b : props.children) !== null && _c !== void 0 ? _c : '') :
        react_1.default.createElement(Wrapper, Object.assign({}, props));
};
exports.SubmitButton = SubmitButton;
//# sourceMappingURL=Form.js.map