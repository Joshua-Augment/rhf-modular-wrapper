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
const async_1 = __importDefault(require("react-select/async"));
const async_creatable_1 = __importDefault(require("react-select/async-creatable"));
const core_1 = require("../../../core");
const AsyncSelect = (props) => {
    var _a;
    const _props = Object.assign({}, props);
    delete _props.calculatedField;
    delete _props.externalStateSetter;
    delete _props.onInputChange;
    return react_1.default.createElement(core_1.InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'select_async' }, props, { noBorder: true }),
        react_1.default.createElement(_AsyncSelect, Object.assign({}, props)));
    // return <InputWrapper type={props.type ?? 'select_async'} {...props} noBorder>
    //   {
    //     props.isCreatable !== undefined ? (
    //     <AsyncCreatableSelectInput
    //       styles={{container: (base) => ({...base, width:'100%'})}}
    //       onCreateOption={createNew}
    //       {..._props}
    //       options={options}
    //       isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    //       value={val}
    //       onChange={(a:TSelectOption) => setValue(props.name, a)}
    //       {...props.rsOptions}
    //       loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, getValues(),b) : props.loadOptions(a,b)}
    //     />
    //   ) : (
    //     <AsyncSelectInput
    //       styles={{container: (base) => ({...base, width:'100%'})}}
    //       {..._props}
    //       options={options}
    //       isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    //       value={val}
    //       onChange={(a:TSelectOption) => setValue(props.name, a)}
    //       {...props.rsOptions}
    //       loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, getValues(),b) : props.loadOptions(a,b)}
    //     />
    //   )
    //   }
    // </InputWrapper>
};
const _AsyncSelect = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    // console.log(`[Select] [${props.name}] props : `,props)
    const [options, setOptions] = (0, react_1.useState)((_a = props.options) !== null && _a !== void 0 ? _a : []);
    (0, react_1.useEffect)(() => {
        // console.log("[options] - ",props.options)
        setOptions(props.options);
    }, [props.options]);
    const createNew = (a) => {
        if (props.isCreatable !== undefined) {
            if (props.isCreatable === true) {
                setOptions([{ label: a, value: a }, ...options]);
                // setSelectedOption({ label: a, value: a });
                props.onChange({ label: a, value: a });
            }
            else {
                props.isCreatable(a).then((opt) => {
                    setOptions([opt, ...options]);
                    // setSelectedOption(opt);
                    props.onChange(opt);
                });
            }
        }
    };
    return props.isCreatable !== undefined ?
        react_1.default.createElement(async_creatable_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, props, { options: options, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a), error: props.error }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) }))
        :
            react_1.default.createElement(async_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, { options: options, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a), error: props.error }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) }));
    // return <Controller      
    //   control={props.control}
    //   name={props.name}
    //   defaultValue={props.defaultValue}
    //   render={ ({field: {name, value, onChange, onBlur}, formState: {errors}}) => (
    //     props.isCreatable !== undefined ? 
    //       <AsyncCreatableSelectInput
    //         styles={{container: (base) => ({...base, width:'100%'})}}
    //         onCreateOption={createNew}
    //         {...props}
    //         options={options}
    //         isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    //         name={name}
    //         value={value}
    //         onChange={(a) => onChange(a)}
    //         {...props.rsOptions}
    //         loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
    //       />
    //     : 
    //       <AsyncSelectInput
    //         styles={{container: (base) => ({...base, width:'100%'})}}
    //         {...props}
    //         options={options}
    //         isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    //         name={name}
    //         value={value}
    //         onChange={(a) => onChange(a)}
    //         {...props.rsOptions}
    //         loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
    //       />  
    //     )}
    //   />
    // props.isCreatable !== undefined ? (
    //   <AsyncCreatableSelectInput
    //     styles={{container: (base) => ({...base, width:'100%'})}}
    //     onCreateOption={createNew}
    //     {...props}
    //     options={options}
    //     isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    //     value={props.value}
    //     onChange={(a:TSelectOption) => props.onChange(a)}
    //     {...props.rsOptions}
    //     loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
    //   />
    // ) : (
    //   <AsyncSelectInput
    //     styles={{container: (base) => ({...base, width:'100%'})}}
    //     {...props}
    //     options={options}
    //     isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    //     value={props.value}
    //     onChange={(a:TSelectOption) => props.onChange(a)}
    //     {...props.rsOptions}
    //     loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
    //   />
    // )
};
exports.default = AsyncSelect;
//# sourceMappingURL=index.js.map