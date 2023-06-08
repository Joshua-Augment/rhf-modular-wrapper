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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const InputElemWrapper_1 = __importDefault(require("./InputElemWrapper"));
const material_1 = require("@mui/material");
const useInputValnError_1 = require("./hook/useInputValnError");
const InputWrapper = (props) => {
    // const [value, setValue] = useState<any>(undefined)
    // const {getValues, watch, setValue: contextSetValue} = useFormContext() 
    // const watchValue = watch(props.name)
    const { value, setValue, getValues } = (0, useInputValnError_1.useInputValAndError)(props.name);
    // On Value change
    (0, react_1.useEffect)(() => { if (value === undefined) {
        setValue(props.name, null);
    } }, [value]);
    // useEffect(() => {
    //   if (watchValue === undefined) {contextSetValue(props.name,null)}
    // },[watchValue])
    // useEffect(()=> setValue(watchValue === undefined ? null : watchValue), [typeof watchValue === 'object' ? JSON.stringify(watchValue) : watchValue])
    // Set Value First if Available
    // useEffect(()=>{ if (props.defaultValue) {contextSetValue(props.name, props.defaultValue);} },[props.defaultValue]) 
    (0, react_1.useEffect)(() => { if (props.defaultValue) {
        setValue(props.name, props.defaultValue);
    } }, [props.defaultValue]);
    (0, react_1.useEffect)(() => {
        // External Field
        if (props.externalStateSetter) {
            props.externalStateSetter(value);
        }
        // if(props.externalStateSetter) {props.externalStateSetter(watchValue ?? value)}
        // Calculated Fields
        if (props.calculatedField) {
            if (props.calculatedField.isPromise === true) {
                props.calculatedField.calculate(value, getValues(props.calculatedField.find), getValues())
                    // .then(data => { contextSetValue(props.name, data) })
                    .then(data => { setValue(props.name, data); });
            }
            else {
                setValue(props.name, props.calculatedField.calculate(value, getValues(props.calculatedField.find), getValues()));
                // contextSetValue(props.name, props.calculatedField.calculate(value,getValues(props.calculatedField.find), getValues()))
            }
        }
    }, [value]);
    // const [_value, _setValue] = useState(null)
    // const methods = props.contextless === true ? {control:undefined, watch : (a:string) => null } : useFormContext();
    const child = (0, react_1.useMemo)(() => {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
        const Wrapper = (A, B, children) => {
            if (A) {
                return react_1.default.createElement(A, null, children);
            }
            if (B) {
                return react_1.default.createElement(B, null, children);
            }
            return react_1.default.createElement("div", { style: { display: 'flex', flexDirection: 'row' } }, children);
        };
        const WrapperElementLeft = Wrapper((_b = (_a = props === null || props === void 0 ? void 0 : props.buttons) === null || _a === void 0 ? void 0 : _a.wrapper) === null || _b === void 0 ? void 0 : _b.left, (_d = (_c = props === null || props === void 0 ? void 0 : props.buttons) === null || _c === void 0 ? void 0 : _c.wrapper) === null || _d === void 0 ? void 0 : _d.all, (_f = (_e = props === null || props === void 0 ? void 0 : props.buttons) === null || _e === void 0 ? void 0 : _e.left) === null || _f === void 0 ? void 0 : _f.map((x, i) => {
            const ButtonElem = x.customButton || material_1.Button; // Use customButton or a default button
            return react_1.default.createElement(ButtonElem, { key: `bl-${i}`, onClick: () => x.onClick(value, props.name, getValues()), name: props.name, value: value }, x.label);
        }));
        const WrapperElementRight = Wrapper((_h = (_g = props === null || props === void 0 ? void 0 : props.buttons) === null || _g === void 0 ? void 0 : _g.wrapper) === null || _h === void 0 ? void 0 : _h.right, (_k = (_j = props === null || props === void 0 ? void 0 : props.buttons) === null || _j === void 0 ? void 0 : _j.wrapper) === null || _k === void 0 ? void 0 : _k.all, (_m = (_l = props === null || props === void 0 ? void 0 : props.buttons) === null || _l === void 0 ? void 0 : _l.right) === null || _m === void 0 ? void 0 : _m.map((x, i) => {
            const ButtonElem = x.customButton || material_1.Button; // Use customButton or a default button
            return react_1.default.createElement(ButtonElem, { key: `bl-${i}`, onClick: () => x.onClick(value, props.name, getValues()), name: props.name, value: value }, x.label);
        }));
        const childrenInjected = react_1.default.cloneElement(props.children, Object.assign(Object.assign({}, (_o = props.children) === null || _o === void 0 ? void 0 : _o.props), { disabled: props.disabled }));
        // console.log(`Input ${props.name} - value : ${value}`)
        return react_1.default.createElement(InputElemWrapper_1.default, Object.assign({}, props, { disabled: props.disabled, value: value }),
            react_1.default.createElement(react_1.default.Fragment, null,
                WrapperElementLeft,
                childrenInjected,
                WrapperElementRight));
    }, [value, props === null || props === void 0 ? void 0 : props.options]);
    return child;
    // return (
    //   props.contextless ?
    //   // Since this does not live in a form there is no form context, as such just store the state in the wrapper itself
    //   // to maintain the input as a controlled input
    //   <InputElemWrapper
    //     {...props}
    //     value={_value}
    //     onChange={_setValue}
    // >
    //   {child &&
    //     child({
    //       ...props,
    //       value : _value,
    //       onChange : _setValue,
    //       onBlur : ()=>false,
    //       isTouched: _value !== null,
    //       isDirty: _value !== null,
    //       error : undefined,
    //       disabled : props.disabled,
    //       ref : undefined,
    //     })}
    // </InputElemWrapper> : 
    // // Control is handled by the Controller Element instead
    //   <Controller
    //     control={methods.control}
    //     name={props.name}
    //     render={({
    //       field: { onChange, onBlur, value, name, ref },
    //       fieldState: { invalid, isTouched, isDirty, error },
    //       formState,
    //     }) => (
    //       <InputElemWrapper
    //         {...props}
    //         value={value === undefined ? props.defaultValue : value}
    //         onChange={onChange}
    //         errors={error}
    //       >
    //         {child &&
    //           child({
    //             ...props,
    //             value,
    //             onChange,
    //             onBlur,
    //             isTouched,
    //             isDirty,
    //             error,
    //             disabled : props.disabled,
    //             ref,
    //           })}
    //       </InputElemWrapper>
    //     )}
    //   />
    // );
};
exports.default = InputWrapper;
//# sourceMappingURL=InputWrapper.js.map