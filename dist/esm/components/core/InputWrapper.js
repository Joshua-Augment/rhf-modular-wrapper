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
import React, { useContext, useEffect, /* useMemo, */ useRef } from "react";
import InputElemWrapper from "./InputElemWrapper";
import { useInputValAndError } from "./hook/useInputValnError";
import { Controller } from "react-hook-form";
import { ThemeContext } from "./Form";
const InputWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u;
    const theme = useContext(ThemeContext);
    const Element = (_a = props.element) !== null && _a !== void 0 ? _a : (theme.elements !== null && theme.elements[(_b = props.type) !== null && _b !== void 0 ? _b : 'line'] !== undefined ? theme.elements[(_c = props.type) !== null && _c !== void 0 ? _c : 'line'] : null);
    const firstUpdate = useRef(true);
    const _v = useInputValAndError(props.name), { value, error } = _v, rest = __rest(_v, ["value", "error"]);
    const watchCalculated = ((_d = props === null || props === void 0 ? void 0 : props.calculatedField) === null || _d === void 0 ? void 0 : _d.find) !== undefined ? rest.watch(props.calculatedField.find) : null;
    // console.log(`For ${props.name}, error : `,rest.error)
    // On Value change
    useEffect(() => {
        if (props.defaultValue !== undefined) {
            // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
            rest.setValue('inputWrapper - DefaultValue', props.defaultValue);
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
        // if(props.externalStateSetter) {props.externalStateSetter(watchValue ?? value)}
        // Calculated Fields
        if (props.calculatedField) {
            if (props.calculatedField.isPromise === true) {
                props.calculatedField.calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then(data => {
                    // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
                    rest.setValue('InputWrapper CalculatedField [Promise] ', data);
                });
            }
            else {
                // console.log(`[Setting] Setting value for ${props.name} by calculation`)
                rest.setValue('InputWrapper Calculated Field [No Promise]', props.calculatedField.calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues()));
            }
        }
    }, [watchCalculated]);
    // const [_value, _setValue] = useState(null)
    // const methods = props.contextless === true ? {control:undefined, watch : (a:string) => null } : useFormContext();
    // const child = useMemo(()=>{
    //   const Wrapper = (A ?: any, B ?:any, children ?: any) => {
    //     if (A) {return <A>{children}</A>}
    //     if (B) {return <B>{children}</B>}
    //     return <div style={{display:'flex',flexDirection:'row'}}>{children}</div>
    //   }
    //   const WrapperElementLeft = props?.buttons?.left ? Wrapper(
    //     props?.buttons?.wrapper?.left,
    //     props?.buttons?.wrapper?.all,
    //     props?.buttons?.left? props.buttons.left(value, props.name, getValues) : null
    //   ) : null
    //   const WrapperElementRight = props?.buttons?.right ? Wrapper(
    //     props?.buttons?.wrapper?.right,
    //     props?.buttons?.wrapper?.all,      
    //     props?.buttons?.right? props.buttons.right(value, props.name, getValues) : null
    //   ) : null
    //  const childrenInjected = React.cloneElement(props.children, {...props.children?.props, disabled : props.disabled, type:props?.type??'line'})
    // // console.log(`Input ${props.name} - value : ${value}`)
    // return <InputElemWrapper {...props} disabled={props.disabled} value={value} >
    //     <>
    //       {WrapperElementLeft}
    //       {childrenInjected}
    //       {WrapperElementRight}
    //     </>
    //   </InputElemWrapper>
    // },[value, props?.options, error])
    // console.log('props - ',props)
    // const serializedProps = JSON.stringify({...props, options : props?.options ?? [], children: props.children?.props,  })  
    // const childrenInjected = useMemo(()=> React.cloneElement(
    //   props.children, 
    //   {
    //     ...props.children?.props, 
    //     disabled : props.disabled, 
    //     type:props?.type??'line',
    //     onChange : (a:any) => rest.setValue('InputWrapper onChange [cloneElement] ', a),
    //     value: value,
    //     error: error,
    //     source : 'InputWrapper',
    //     ...rest
    //   }), [value, error, props])
    /* const childrenInjected = React.cloneElement(
      props.children,
      {
        ...props.children?.props,
        disabled : props.disabled,
        type:props?.type??'line',
        onChange : (a:any) => rest.setValue('InputWrapper onChange [cloneElement] ', a),
        value: value,
        error: error,
        source : 'InputWrapper',
        ...rest
      }) */
    const Wrapper = (A, B, children) => {
        if (A) {
            return React.createElement(A, null, children);
        }
        if (B) {
            return React.createElement(B, null, children);
        }
        return React.createElement("div", { style: { display: 'flex', flexDirection: 'row' } }, children);
    };
    const WrapperElementLeft = ((_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.left) ? Wrapper((_g = (_f = props === null || props === void 0 ? void 0 : props.buttons) === null || _f === void 0 ? void 0 : _f.wrapper) === null || _g === void 0 ? void 0 : _g.left, (_j = (_h = props === null || props === void 0 ? void 0 : props.buttons) === null || _h === void 0 ? void 0 : _h.wrapper) === null || _j === void 0 ? void 0 : _j.all, ((_k = props === null || props === void 0 ? void 0 : props.buttons) === null || _k === void 0 ? void 0 : _k.left) ? props.buttons.left(value, props.name, rest.getValues) : null) : null;
    const WrapperElementRight = ((_l = props === null || props === void 0 ? void 0 : props.buttons) === null || _l === void 0 ? void 0 : _l.right) ? Wrapper((_o = (_m = props === null || props === void 0 ? void 0 : props.buttons) === null || _m === void 0 ? void 0 : _m.wrapper) === null || _o === void 0 ? void 0 : _o.right, (_q = (_p = props === null || props === void 0 ? void 0 : props.buttons) === null || _p === void 0 ? void 0 : _p.wrapper) === null || _q === void 0 ? void 0 : _q.all, ((_r = props === null || props === void 0 ? void 0 : props.buttons) === null || _r === void 0 ? void 0 : _r.right) ? props.buttons.right(value, props.name, rest.getValues) : null) : null;
    // console.log(`[InputWrapper - ${props.name}] - injected props`,childrenInjected.props)
    return React.createElement(InputElemWrapper, Object.assign({}, props, { disabled: props.disabled, value: value }),
        React.createElement(React.Fragment, null,
            WrapperElementLeft,
            ((_s = props === null || props === void 0 ? void 0 : props.type) !== null && _s !== void 0 ? _s : "line").toLowerCase().includes("list") ?
                React.cloneElement(Element !== null && Element !== void 0 ? Element : props.children, Object.assign(Object.assign(Object.assign({}, (_t = props.children) === null || _t === void 0 ? void 0 : _t.props), rest), { disabled: props.disabled, type: (_u = props === null || props === void 0 ? void 0 : props.type) !== null && _u !== void 0 ? _u : 'line', onChange: (a) => rest.setValue('FromController', a), value: value, error: error, 
                    // error: formState.errors?.[field.name],
                    source: 'InputWrapper' })) :
                React.createElement(Controller, { name: props.name, control: rest.control, render: ({ field, formState }) => {
                        var _a, _b;
                        return React.cloneElement(Element !== null && Element !== void 0 ? Element : props.children, Object.assign(Object.assign(Object.assign({}, (_a = props.children) === null || _a === void 0 ? void 0 : _a.props), rest), { disabled: props.disabled, type: (_b = props === null || props === void 0 ? void 0 : props.type) !== null && _b !== void 0 ? _b : 'line', onChange: (a) => rest.setValue('FromController', a), onBlur: field.onBlur, value: field.value, error: error, 
                            // error: formState.errors?.[field.name],
                            source: 'InputWrapper' }));
                    } }),
            WrapperElementRight));
};
export default InputWrapper;
//# sourceMappingURL=InputWrapper.js.map