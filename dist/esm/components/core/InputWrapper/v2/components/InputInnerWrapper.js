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
import React, { useEffect, useMemo, useRef } from "react";
import Logger from "../../../Logger";
import { useWatch } from "react-hook-form";
import DefaultInputWrapper from "./DefaultInputWrapper";
import { useInputValAndError } from "../../../hook/useInputValnError";
const InputInnerWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    const _r = useInputValAndError(props.name), { value, error, formState } = _r, methods = __rest(_r, ["value", "error", "formState"]);
    const { inputWrapper: _propsInputWrapper, name: _propsName, options: _propsOptions, items: _propsItems, label: _propsLabel, noLabel: _propsNoLabel, type: _propsType, helperText: _propsHelperText, } = props;
    const firstUpdate = useRef(true);
    Logger.info(`First Update : ${firstUpdate.current}`, `${_propsName} - InputWrapperv2`);
    const watchCalculated = useWatch({
        name: ((_a = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _a === void 0 ? void 0 : _a.find) !== undefined ? props.calculatedField.find : `#_#_noinputtofind_#_#`,
    });
    Logger.info(`Watching Calculated : ${String(watchCalculated)}`, `${_propsName} - InputWrapperv2`);
    // console.log(`For ${props.name}, error : `,rest.error)
    // On Value change
    useEffect(() => {
        Logger.info(`Default Value : ${String(props.defaultValue)}`, `${_propsName} - InputWrapperv2`);
        if (props.defaultValue !== undefined) {
            // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
            methods.setValue("inputWrapper - DefaultValue", props.defaultValue);
        }
    }, [props.defaultValue]);
    useEffect(() => {
        // // Make sure value isnt undefined
        // if (value === undefined) {methods.setValue(props.name, null)}
        // External Field
        if (props.externalStateSetter) {
            Logger.info(`Setting External State`, `${_propsName} - InputWrapperv2`);
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            Logger.info(`First Time Setting`, `${_propsName} - InputWrapperv2`);
            props.onInputChange(value, _propsName, methods.getValues(), Object.assign({}, props.formMethods));
        }
        firstUpdate.current = false;
    }, [value]);
    useEffect(() => {
        // Calculated Fields
        if (props.calculatedField) {
            Logger.info(`Setting External State`, `${_propsName} - calculatedField`, "start");
            if (props.calculatedField.isPromise === true) {
                Logger.info(`Promise expected`, `${_propsName} - calculatedField`);
                props.calculatedField
                    .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then((data) => {
                    Logger.info(`Calculated Data : ${String(data)}`, `${_propsName} - calculatedField`);
                    Logger.info(null, null, "end");
                    // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
                    methods.setValue(props.name, data);
                });
            }
            else {
                const _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
                Logger.info(`No Promise expected. Value Expected : ${String(_result)}`, `${_propsName} - calculatedField`);
                // console.log(`[Setting] Setting value for ${props.name} by calculation`)
                methods.setValue(props.name, _result);
                Logger.info(null, null, "end");
            }
        }
    }, [watchCalculated]);
    const WrapperMaker = (A, B, children) => {
        if (A) {
            return React.createElement(A, null, children);
        }
        if (B) {
            return React.createElement(B, null, children);
        }
        return React.createElement("div", { style: { display: "flex", flexDirection: "row" } }, children);
    };
    Logger.info(`Setting Left Wrapper`, `${_propsName} - InputWrapperv2`);
    const WrapperElementLeft = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        Logger.info(`useMemo`, `WrapperElementLeft`, "start");
        Logger.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left) ? props.buttons.left(value, props.name, methods.getValues) : null)
            : null;
    }, [(_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.left, (_d = (_c = props === null || props === void 0 ? void 0 : props.buttons) === null || _c === void 0 ? void 0 : _c.wrapper) === null || _d === void 0 ? void 0 : _d.left, (_f = (_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.wrapper) === null || _f === void 0 ? void 0 : _f.all]);
    Logger.info(`Setting Right Wrapper`, `${_propsName} - InputWrapperv2`);
    const WrapperElementRight = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        Logger.info(`useMemo`, `WrapperElementRight`, "start");
        Logger.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.right)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.right, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.right) ? props.buttons.right(value, props.name, methods.getValues) : null)
            : null;
    }, [(_g = props === null || props === void 0 ? void 0 : props.buttons) === null || _g === void 0 ? void 0 : _g.right, (_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.right, (_l = (_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.wrapper) === null || _l === void 0 ? void 0 : _l.all]);
    Logger.info(`Setting Chosen Element`, `${_propsName} - InputWrapperv2`);
    const ChosenElement = props.inputElement;
    const Wrapper = useMemo(() => _propsInputWrapper, [_propsInputWrapper]);
    const ChildComponent = React.createElement(React.Fragment, { key: props.name },
        WrapperElementLeft,
        ChosenElement
            ? ChosenElement(Object.assign(Object.assign(Object.assign({}, (_m = props.children) === null || _m === void 0 ? void 0 : _m.props), methods), { disabled: props.disabled, type: (_o = props === null || props === void 0 ? void 0 : props.type) !== null && _o !== void 0 ? _o : "line", onChange: (a) => { var _a, _b; return methods.setValue(props.name, a, { shouldValidate: (_a = props.shouldValidateOnChange) !== null && _a !== void 0 ? _a : false, shouldDirty: (_b = props.shouldDirtyOnChange) !== null && _b !== void 0 ? _b : false }); }, value: value, error: error, source: "InputWrapper" }))
            : React.cloneElement(props.children, Object.assign(Object.assign(Object.assign({}, (_p = props.children) === null || _p === void 0 ? void 0 : _p.props), methods), { disabled: props.disabled, type: (_q = props === null || props === void 0 ? void 0 : props.type) !== null && _q !== void 0 ? _q : "line", onChange: (a) => { var _a, _b; return methods.setValue(props.name, a, { shouldValidate: (_a = props.shouldValidateOnChange) !== null && _a !== void 0 ? _a : false, shouldDirty: (_b = props.shouldDirtyOnChange) !== null && _b !== void 0 ? _b : false }); }, value: value, error: error, source: "InputWrapper" })),
        WrapperElementRight);
    Logger.info(null, null, "end");
    const injectProps = Object.assign(Object.assign(Object.assign(Object.assign({}, props), { value: value, error: error, theme: null }), methods), { formState });
    return React.createElement(ChosenWrapper, { Wrapper: Wrapper, Default: DefaultInputWrapper, props: Object.assign(Object.assign({}, injectProps), { children: ChildComponent }) });
};
const ChosenWrapper = React.memo(({ Wrapper, Default, props }) => {
    return Wrapper ? React.createElement(Wrapper, Object.assign({}, props)) : React.createElement(Default, Object.assign({}, props));
});
export default InputInnerWrapper;
//# sourceMappingURL=InputInnerWrapper.js.map