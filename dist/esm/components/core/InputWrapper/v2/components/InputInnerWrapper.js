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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, useMemo, useRef } from "react";
import Logger from "../../../Logger/index";
import { useWatch } from "react-hook-form";
import DefaultInputWrapper from "./DefaultInputWrapper";
import { useInputValAndError } from "../../../hook/useInputValnError";
var InputInnerWrapper = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q;
    var _r = useInputValAndError(props.name), value = _r.value, error = _r.error, formState = _r.formState, methods = __rest(_r, ["value", "error", "formState"]);
    var _propsInputWrapper = props.inputWrapper, _propsName = props.name, _propsOptions = props.options, _propsItems = props.items, _propsLabel = props.label, _propsNoLabel = props.noLabel, _propsType = props.type, _propsHelperText = props.helperText;
    var firstUpdate = useRef(true);
    Logger.info("First Update : ".concat(firstUpdate.current), "".concat(_propsName, " - InputWrapperv2"));
    var watchCalculated = useWatch({
        name: ((_a = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _a === void 0 ? void 0 : _a.find) !== undefined ? props.calculatedField.find : "#_#_noinputtofind_#_#",
    });
    Logger.info("Watching Calculated : ".concat(String(watchCalculated)), "".concat(_propsName, " - InputWrapperv2"));
    // console.log(`For ${props.name}, error : `,rest.error)
    // On Value change
    useEffect(function () {
        Logger.info("Default Value : ".concat(String(props.defaultValue)), "".concat(_propsName, " - InputWrapperv2"));
        if (props.defaultValue !== undefined) {
            // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
            methods.setValue("inputWrapper - DefaultValue", props.defaultValue);
        }
    }, [props.defaultValue]);
    useEffect(function () {
        // // Make sure value isnt undefined
        // if (value === undefined) {methods.setValue(props.name, null)}
        // External Field
        if (props.externalStateSetter) {
            Logger.info("Setting External State", "".concat(_propsName, " - InputWrapperv2"));
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            Logger.info("First Time Setting", "".concat(_propsName, " - InputWrapperv2"));
            props.onInputChange(value, _propsName, methods.getValues(), __assign({}, props.formMethods));
        }
        firstUpdate.current = false;
    }, [value]);
    useEffect(function () {
        // Calculated Fields
        if (props.calculatedField) {
            Logger.info("Setting External State", "".concat(_propsName, " - calculatedField"), "start");
            if (props.calculatedField.isPromise === true) {
                Logger.info("Promise expected", "".concat(_propsName, " - calculatedField"));
                props.calculatedField
                    .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then(function (data) {
                    Logger.info("Calculated Data : ".concat(String(data)), "".concat(_propsName, " - calculatedField"));
                    Logger.info(null, null, "end");
                    // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
                    methods.setValue(props.name, data);
                });
            }
            else {
                var _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
                Logger.info("No Promise expected. Value Expected : ".concat(String(_result)), "".concat(_propsName, " - calculatedField"));
                // console.log(`[Setting] Setting value for ${props.name} by calculation`)
                methods.setValue(props.name, _result);
                Logger.info(null, null, "end");
            }
        }
    }, [watchCalculated]);
    var WrapperMaker = function (A, B, children) {
        if (A) {
            return _jsx(A, { children: children });
        }
        if (B) {
            return _jsx(B, { children: children });
        }
        return _jsx("div", __assign({ style: { display: "flex", flexDirection: "row" } }, { children: children }));
    };
    Logger.info("Setting Left Wrapper", "".concat(_propsName, " - InputWrapperv2"));
    var WrapperElementLeft = useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        Logger.info("useMemo", "WrapperElementLeft", "start");
        Logger.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left) ? props.buttons.left(value, props.name, methods.getValues) : null)
            : null;
    }, [(_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.left, (_d = (_c = props === null || props === void 0 ? void 0 : props.buttons) === null || _c === void 0 ? void 0 : _c.wrapper) === null || _d === void 0 ? void 0 : _d.left, (_f = (_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.wrapper) === null || _f === void 0 ? void 0 : _f.all]);
    Logger.info("Setting Right Wrapper", "".concat(_propsName, " - InputWrapperv2"));
    var WrapperElementRight = useMemo(function () {
        var _a, _b, _c, _d, _e, _f;
        Logger.info("useMemo", "WrapperElementRight", "start");
        Logger.info(null, null, "end");
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.right)
            ? WrapperMaker((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.right, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.right) ? props.buttons.right(value, props.name, methods.getValues) : null)
            : null;
    }, [(_g = props === null || props === void 0 ? void 0 : props.buttons) === null || _g === void 0 ? void 0 : _g.right, (_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.right, (_l = (_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.wrapper) === null || _l === void 0 ? void 0 : _l.all]);
    Logger.info("Setting Chosen Element", "".concat(_propsName, " - InputWrapperv2"));
    var ChosenElement = props.inputElement;
    var Wrapper = useMemo(function () { return _propsInputWrapper; }, [_propsInputWrapper]);
    var ChildComponent = (_jsxs(React.Fragment, { children: [WrapperElementLeft, ChosenElement
                ? ChosenElement(__assign(__assign(__assign({}, (_m = props.children) === null || _m === void 0 ? void 0 : _m.props), methods), { disabled: props.disabled, type: (_o = props === null || props === void 0 ? void 0 : props.type) !== null && _o !== void 0 ? _o : "line", onChange: function (a) {
                        var _a, _b;
                        return methods.setValue(props.name, a, {
                            shouldValidate: (_a = props.shouldValidateOnChange) !== null && _a !== void 0 ? _a : false,
                            shouldDirty: (_b = props.shouldDirtyOnChange) !== null && _b !== void 0 ? _b : false,
                        });
                    }, value: value, error: error, source: "InputWrapper/index" }))
                : React.cloneElement(props.children, __assign(__assign(__assign({}, (_p = props.children) === null || _p === void 0 ? void 0 : _p.props), methods), { disabled: props.disabled, type: (_q = props === null || props === void 0 ? void 0 : props.type) !== null && _q !== void 0 ? _q : "line", onChange: function (a) {
                        var _a, _b;
                        return methods.setValue(props.name, a, {
                            shouldValidate: (_a = props.shouldValidateOnChange) !== null && _a !== void 0 ? _a : false,
                            shouldDirty: (_b = props.shouldDirtyOnChange) !== null && _b !== void 0 ? _b : false,
                        });
                    }, value: value, error: error, source: "InputWrapper/index" })), WrapperElementRight] }, props.name));
    Logger.info(null, null, "end");
    var injectProps = __assign(__assign(__assign(__assign({}, props), { value: value, error: error, theme: null }), methods), { formState: formState });
    return _jsx(ChosenWrapper, { Wrapper: Wrapper, Default: DefaultInputWrapper, props: __assign(__assign({}, injectProps), { children: ChildComponent }) });
};
var ChosenWrapper = React.memo(function (_a) {
    var Wrapper = _a.Wrapper, Default = _a.Default, props = _a.props;
    return Wrapper ? _jsx(Wrapper, __assign({}, props)) : _jsx(Default, __assign({}, props));
});
export default InputInnerWrapper;
//# sourceMappingURL=InputInnerWrapper.js.map