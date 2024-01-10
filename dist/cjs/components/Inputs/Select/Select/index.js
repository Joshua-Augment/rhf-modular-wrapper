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
const react_select_1 = __importDefault(require("react-select"));
const creatable_1 = __importDefault(require("react-select/creatable"));
const core_1 = require("../../../core");
const react_hook_form_1 = require("react-hook-form");
const Select = (props) => {
    // const {value, error, setValue} = useInputValAndError(props.name)
    var _a;
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(()=>_val,[_val])
    const _props = Object.assign({}, props);
    delete _props.calculatedField;
    delete _props.externalStateSetter;
    delete _props.onInputChange;
    // const SelectElems = useMemo(()=> {    
    //   // Watch for changed options
    //   // console.log("[SelectElems] -rendered", options)
    //   return <InputWrapper type={props.type ?? 'select'} {...props} noBorder options={options}>
    //     <_Select {..._props} />
    //   </InputWrapper>
    // },[options, value, error])
    return react_1.default.createElement(core_1.InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'select' }, props, { noBorder: true }),
        react_1.default.createElement(_Select, Object.assign({}, _props)));
};
const _Select = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [options, setOptions] = (0, react_1.useState)((_a = props.options) !== null && _a !== void 0 ? _a : []);
    (0, react_1.useEffect)(() => {
        if (props.options && Array.isArray(props.options)) {
            const omitOptions = props.omitOptions;
            console.log('omitOptions', omitOptions);
            if (omitOptions && Array.isArray(omitOptions)) {
                const _filter = omitOptions.map(x => (typeof x === 'string' || typeof x === 'number') ? x : x === null || x === void 0 ? void 0 : x.value);
                setOptions(props.options.filter(x => !_filter.includes(x.value)));
            }
            else {
                setOptions(props.options);
            }
        }
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
        react_1.default.createElement(creatable_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew, onBlur: props.onBlur }, props, props.rsOptions, { options: options, error: props.error, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a) })) :
        react_1.default.createElement(react_select_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, props.rsOptions, { options: options, onBlur: props.onBlur, error: props.error, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a) }));
    return react_1.default.createElement(react_hook_form_1.Controller, { control: props.control, name: props.name, defaultValue: props.defaultValue, render: ({ field: { name, value, onChange, onBlur }, formState: { errors } }) => {
            var _a, _b, _c, _d, _e, _f;
            return (props.isCreatable !== undefined ?
                react_1.default.createElement(creatable_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew, onBlur: onBlur }, props, props.rsOptions, { options: options, error: name in errors ? errors[name] : undefined, isDisabled: (_c = (_b = (_a = props.rsOptions) === null || _a === void 0 ? void 0 : _a.isDisabled) !== null && _b !== void 0 ? _b : props.disabled) !== null && _c !== void 0 ? _c : false, name: name, value: value, onChange: (a) => onChange(a) })) :
                react_1.default.createElement(react_select_1.default, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, props.rsOptions, { options: options, onBlur: onBlur, error: name in errors ? errors[name] : undefined, isDisabled: (_f = (_e = (_d = props.rsOptions) === null || _d === void 0 ? void 0 : _d.isDisabled) !== null && _e !== void 0 ? _e : props.disabled) !== null && _f !== void 0 ? _f : false, name: name, value: value, onChange: (a) => onChange(a) })));
        } });
};
exports.default = Select;
//# sourceMappingURL=index.js.map