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
import React, { useContext, useEffect, useMemo, useRef } from "react";
import InputElemWrapper from "../../InputElemWrapper";
import { useInputValAndError } from "../../hook/useInputValnError";
import { Controller } from "react-hook-form";
import { ThemeContext } from "../../Form";
const InputWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
    const theme = useContext(ThemeContext);
    const Element = useMemo(() => {
        var _a, _b, _c;
        return (_a = props.element) !== null && _a !== void 0 ? _a : (theme.elements !== null &&
            theme.elements[(_b = props.type) !== null && _b !== void 0 ? _b : "line"] !== undefined
            ? theme.elements[(_c = props.type) !== null && _c !== void 0 ? _c : "line"]
            : null);
    }, [props === null || props === void 0 ? void 0 : props.element, theme.elements]);
    const firstUpdate = useRef(true);
    const _s = useInputValAndError(props.name), { value, error } = _s, rest = __rest(_s, ["value", "error"]);
    const watchCalculated = ((_a = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _a === void 0 ? void 0 : _a.find) !== undefined
        ? rest.watch(props.calculatedField.find)
        : null;
    // console.log(`For ${props.name}, error : `,rest.error)
    // On Value change
    useEffect(() => {
        if (props.defaultValue !== undefined) {
            // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
            rest.setValue("inputWrapper - DefaultValue", props.defaultValue);
        }
    }, [props.defaultValue]);
    useEffect(() => {
        // // Make sure value isnt undefined
        // if (value === undefined) {rest.setValue(props.name, null)}
        // External Field
        if (props.externalStateSetter) {
            props.externalStateSetter(value);
        }
        // On Input Change
        if (props.onInputChange && !firstUpdate.current) {
            props.onInputChange(value, props.name, rest.getValues(), Object.assign({}, rest));
        }
        firstUpdate.current = false;
    }, [value]);
    useEffect(() => {
        // Calculated Fields
        if (props.calculatedField) {
            if (props.calculatedField.isPromise === true) {
                props.calculatedField
                    .calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then((data) => {
                    // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
                    rest.setValue(props.name, data);
                });
            }
            else {
                // console.log(`[Setting] Setting value for ${props.name} by calculation`)
                rest.setValue(props.name, props.calculatedField.calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues()));
            }
        }
    }, [watchCalculated]);
    const Wrapper = (A, B, children) => {
        if (A) {
            return React.createElement(A, null, children);
        }
        if (B) {
            return React.createElement(B, null, children);
        }
        return (React.createElement("div", { style: { display: "flex", flexDirection: "row" } }, children));
    };
    const WrapperElementLeft = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.left)
            ? Wrapper((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.left, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.left)
                ? props.buttons.left(value, props.name, rest.getValues)
                : null)
            : null;
    }, [(_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.left, (_d = (_c = props === null || props === void 0 ? void 0 : props.buttons) === null || _c === void 0 ? void 0 : _c.wrapper) === null || _d === void 0 ? void 0 : _d.left, (_f = (_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.wrapper) === null || _f === void 0 ? void 0 : _f.all]);
    const WrapperElementRight = useMemo(() => {
        var _a, _b, _c, _d, _e, _f;
        return ((_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.right)
            ? Wrapper((_c = (_b = props === null || props === void 0 ? void 0 : props.buttons) === null || _b === void 0 ? void 0 : _b.wrapper) === null || _c === void 0 ? void 0 : _c.right, (_e = (_d = props === null || props === void 0 ? void 0 : props.buttons) === null || _d === void 0 ? void 0 : _d.wrapper) === null || _e === void 0 ? void 0 : _e.all, ((_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.right)
                ? props.buttons.right(value, props.name, rest.getValues)
                : null)
            : null;
    }, [(_g = props === null || props === void 0 ? void 0 : props.buttons) === null || _g === void 0 ? void 0 : _g.right, (_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.right, (_l = (_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.wrapper) === null || _l === void 0 ? void 0 : _l.all]);
    const ChosenElement = useMemo(() => Element !== undefined && Element !== null ? Element : null, [Element, value, error === null || error === void 0 ? void 0 : error.message, props === null || props === void 0 ? void 0 : props.label, props === null || props === void 0 ? void 0 : props.value, props === null || props === void 0 ? void 0 : props.options, props === null || props === void 0 ? void 0 : props.items]);
    return (React.createElement(InputElemWrapper, Object.assign({}, props, { disabled: props.disabled, value: value }),
        React.createElement(React.Fragment, null,
            WrapperElementLeft,
            ((_m = props === null || props === void 0 ? void 0 : props.type) !== null && _m !== void 0 ? _m : "line").toLowerCase().includes("list") ? (ChosenElement ? (ChosenElement(Object.assign(Object.assign(Object.assign({}, (_o = props.children) === null || _o === void 0 ? void 0 : _o.props), rest), { disabled: props.disabled, type: (_p = props === null || props === void 0 ? void 0 : props.type) !== null && _p !== void 0 ? _p : "line", onChange: (a) => rest.setValue(props.name, a), value: value, error: error, 
                // error: formState.errors?.[field.name],
                source: "InputWrapper" }))) : (React.cloneElement(props.children, Object.assign(Object.assign(Object.assign({}, (_q = props.children) === null || _q === void 0 ? void 0 : _q.props), rest), { disabled: props.disabled, type: (_r = props === null || props === void 0 ? void 0 : props.type) !== null && _r !== void 0 ? _r : "line", onChange: (a) => rest.setValue(props.name, a), value: value, error: error, 
                // error: formState.errors?.[field.name],
                source: "InputWrapper" })))) : (React.createElement(Controller, { name: props.name, control: rest.control, render: ({ field, formState }) => {
                    var _a, _b, _c, _d;
                    return ChosenElement
                        ? ChosenElement(Object.assign(Object.assign(Object.assign({}, (_a = props.children) === null || _a === void 0 ? void 0 : _a.props), rest), { disabled: props.disabled, type: (_b = props === null || props === void 0 ? void 0 : props.type) !== null && _b !== void 0 ? _b : "line", onChange: (a) => rest.setValue(props.name, a), onBlur: field.onBlur, value: field.value, error: error }))
                        : React.cloneElement(props.children, Object.assign(Object.assign(Object.assign({}, (_c = props.children) === null || _c === void 0 ? void 0 : _c.props), rest), { disabled: props.disabled, type: (_d = props === null || props === void 0 ? void 0 : props.type) !== null && _d !== void 0 ? _d : "line", onChange: (a) => rest.setValue(props.name, a), onBlur: field.onBlur, value: field.value, error: error }));
                } })),
            WrapperElementRight)));
};
export default React.memo(InputWrapper);
//# sourceMappingURL=index.js.map