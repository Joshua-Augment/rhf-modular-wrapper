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
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useMemo, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import "../styling/form_bootstrap.css";
import "../styling/core.css";
export var ThemeContext = createContext({ debug: false, inputTemplate: null, buttonTemplate: null, elements: {} });
export var Form = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l;
    var formID = useMemo(function () { var _a; return (_a = props.id) !== null && _a !== void 0 ? _a : "rhf-wc-f-".concat(new Date().getTime()); }, []);
    var methods = useForm({
        mode: (_a = props.mode) !== null && _a !== void 0 ? _a : "onChange",
        reValidateMode: (_b = props.reValidateMode) !== null && _b !== void 0 ? _b : "onSubmit",
        defaultValues: props.defaultValues,
        resolver: props.yupSchema ? yupResolver(props.yupSchema) : undefined,
        context: props.context,
        criteriaMode: (_c = props.criteriaMode) !== null && _c !== void 0 ? _c : "firstError",
        shouldFocusError: (_d = props.shouldFocusError) !== null && _d !== void 0 ? _d : true,
        shouldUnregister: (_e = props.shouldUnregister) !== null && _e !== void 0 ? _e : true,
        shouldUseNativeValidation: (_f = props.shouldUseNativeValidation) !== null && _f !== void 0 ? _f : false,
        delayError: (_g = props.delayError) !== null && _g !== void 0 ? _g : undefined,
    });
    // const inputWrapper = useMemo(() => props.inputWrapper ?? null, []);
    // const buttonTemplate = useMemo(() => props.buttonWrapper ?? null, []);
    // const elements = useMemo(() => props.elements ?? {}, []);
    return (_jsx(ThemeContext.Provider, __assign({ value: {
            inputTemplate: (_h = props.inputWrapper) !== null && _h !== void 0 ? _h : null,
            buttonTemplate: (_j = props.buttonWrapper) !== null && _j !== void 0 ? _j : null,
            elements: (_k = props.elements) !== null && _k !== void 0 ? _k : {},
            debug: (_l = props.debug) !== null && _l !== void 0 ? _l : false,
        } }, { children: _jsx(FormProvider, __assign({}, methods, { children: _jsx("form", __assign({ onSubmit: methods.handleSubmit(props.onSubmit, props.onInvalid), id: formID }, { children: props.children })) })) })));
};
export var SubmitButton = function (props) {
    var _a, _b, _c;
    var Wrapper = useContext(ThemeContext).buttonTemplate;
    return Wrapper === null ? (_jsx("button", __assign({ type: "submit", className: "".concat((_a = props.buttonClass) !== null && _a !== void 0 ? _a : "") }, { children: (_c = (_b = props.label) !== null && _b !== void 0 ? _b : props.children) !== null && _c !== void 0 ? _c : "" }))) : (_jsx(Wrapper, __assign({}, props)));
};
//# sourceMappingURL=Form.js.map