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
const react_hook_form_1 = require("react-hook-form");
const InputElemWrapper_1 = __importDefault(require("./InputElemWrapper"));
const InputWrapper = (props) => {
    const [value, setValue] = (0, react_1.useState)(undefined);
    const { getValues, watch, setValue: contextSetValue } = (0, react_hook_form_1.useFormContext)();
    const watchValue = watch(props.name);
    (0, react_1.useEffect)(() => setValue(watchValue), [typeof watchValue === 'object' ? JSON.stringify(watchValue) : watchValue]);
    // Set Value First if Available
    (0, react_1.useEffect)(() => { if (props.defaultValue) {
        contextSetValue(props.name, props.defaultValue);
    } }, [props.defaultValue]);
    (0, react_1.useEffect)(() => {
        // External Field
        if (props.externalStateSetter) {
            props.externalStateSetter(watchValue !== null && watchValue !== void 0 ? watchValue : value);
        }
        // Calculated Fields
        if (props.calculatedField) {
            contextSetValue(props.name, props.calculatedField.calculate(value, getValues(props.calculatedField.find), getValues()));
        }
    }, [value]);
    // const [_value, _setValue] = useState(null)
    // const methods = props.contextless === true ? {control:undefined, watch : (a:string) => null } : useFormContext();
    const child = (0, react_1.useMemo)(() => {
        return react_1.default.createElement(InputElemWrapper_1.default, Object.assign({}, props, { value: value }), props.children);
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