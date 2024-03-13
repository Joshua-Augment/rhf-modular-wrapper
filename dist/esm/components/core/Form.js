import React, { createContext, useMemo, useContext } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import "../styling/form_bootstrap.css";
import "../styling/core.css";
export const ThemeContext = createContext({ debug: false, inputTemplate: null, buttonTemplate: null, elements: {} });
export const Form = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
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
    const inputWrapper = useMemo(() => { var _a; return (_a = props.inputWrapper) !== null && _a !== void 0 ? _a : null; }, []);
    const buttonTemplate = useMemo(() => { var _a; return (_a = props.buttonWrapper) !== null && _a !== void 0 ? _a : null; }, []);
    const elements = useMemo(() => { var _a; return (_a = props.elements) !== null && _a !== void 0 ? _a : {}; }, []);
    const debug = useMemo(() => { var _a; return (_a = props.debug) !== null && _a !== void 0 ? _a : false; }, []);
    return (React.createElement(ThemeContext.Provider, { value: {
            inputTemplate: inputWrapper,
            buttonTemplate: buttonTemplate,
            elements: elements,
            debug: debug
        } },
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