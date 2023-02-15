import React, { lazy, createContext, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import "../styling/core.css";
export const ThemeContext = createContext(null);
const BSTheme = lazy(() => import('../styling/BootstrapTheme'));
const MUITheme = lazy(() => import('../styling/MUITheme'));
const ChosenTheme = ({ children, style }) => {
    return (React.createElement(React.Fragment, null,
        React.createElement(React.Suspense, { fallback: React.createElement(React.Fragment, null) },
            (style === undefined || style == 'bootstrap') && React.createElement(BSTheme, null),
            (style === 'mui') && React.createElement(MUITheme, null)),
        children));
};
export const Form = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    const formID = useMemo(() => { var _a; return (_a = props.id) !== null && _a !== void 0 ? _a : `rhf-wc-f-${new Date().getTime()}`; }, []);
    const methods = useForm({
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
    return (React.createElement(ChosenTheme, { style: props.style },
        React.createElement(ThemeContext.Provider, { value: (_h = props.inputWrapper) !== null && _h !== void 0 ? _h : null },
            React.createElement(FormProvider, Object.assign({}, methods),
                React.createElement("form", { onSubmit: methods.handleSubmit((data) => props.onSubmit(data).then(() => { if (props.resetOnComplete) {
                        methods.reset();
                    } }), () => { if (props.resetOnComplete) {
                        methods.reset();
                    } }), id: formID }, props.children)))));
};
//# sourceMappingURL=Form.js.map