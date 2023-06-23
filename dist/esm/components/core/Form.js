import React, { createContext, useMemo, useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import "../styling/form_bootstrap.css";
import "../styling/core.css";
export const ThemeContext = createContext({ inputTemplate: null, buttonTemplate: null });
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
export const Form = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const formID = useMemo(() => { var _a; return (_a = props.id) !== null && _a !== void 0 ? _a : `rhf-wc-f-${new Date().getTime()}`; }, []);
    const methods = useForm({
        mode: (_a = props.mode) !== null && _a !== void 0 ? _a : "onChange",
        reValidateMode: (_b = props.reValidateMode) !== null && _b !== void 0 ? _b : 'onChange',
        defaultValues: props.defaultValues,
        resolver: props.yupSchema ? yupResolver(props.yupSchema) : undefined,
        context: props.context,
        criteriaMode: (_c = props.criteriaMode) !== null && _c !== void 0 ? _c : "firstError",
        shouldFocusError: (_d = props.shouldFocusError) !== null && _d !== void 0 ? _d : true,
        shouldUnregister: (_e = props.shouldUnregister) !== null && _e !== void 0 ? _e : true,
        shouldUseNativeValidation: (_f = props.shouldUseNativeValidation) !== null && _f !== void 0 ? _f : false,
        delayError: (_g = props.delayError) !== null && _g !== void 0 ? _g : undefined,
    });
    return (React.createElement(ThemeContext.Provider, { value: { inputTemplate: (_h = props.inputWrapper) !== null && _h !== void 0 ? _h : null, buttonTemplate: (_j = props.buttonWrapper) !== null && _j !== void 0 ? _j : null } },
        React.createElement(FormProvider, Object.assign({}, methods),
            React.createElement("form", { onSubmit: methods.handleSubmit(props.onSubmit), id: formID }, props.children))));
};
export const SubmitButton = (props) => {
    var _a, _b, _c;
    const Wrapper = useContext(ThemeContext).buttonTemplate;
    return Wrapper === null ?
        React.createElement("button", { type: "submit", className: `${(_a = props.buttonClass) !== null && _a !== void 0 ? _a : ''}` }, (_c = (_b = props.label) !== null && _b !== void 0 ? _b : props.children) !== null && _c !== void 0 ? _c : '') :
        React.createElement(Wrapper, Object.assign({}, props));
};
//# sourceMappingURL=Form.js.map