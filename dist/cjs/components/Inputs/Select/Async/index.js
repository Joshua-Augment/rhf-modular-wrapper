"use strict";
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
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var async_1 = __importDefault(require("react-select/async"));
var async_creatable_1 = __importDefault(require("react-select/async-creatable"));
var index_1 = __importDefault(require("../../../core/InputWrapper/index"));
var AsyncSelect = function (props) {
    var _a;
    return (0, jsx_runtime_1.jsx)(index_1.default, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'select_async' }, props, { noBorder: true }, { children: (0, jsx_runtime_1.jsx)(_AsyncSelect, __assign({}, props)) }));
};
var _AsyncSelect = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    // console.log(`[Select] [${props.name}] props : `,props)
    var _h = (0, react_1.useState)((_a = props.options) !== null && _a !== void 0 ? _a : []), options = _h[0], setOptions = _h[1];
    (0, react_1.useEffect)(function () {
        // console.log("[options] - ",props.options)
        setOptions(props.options);
    }, [props.options]);
    var createNew = function (a) {
        if (props.isCreatable !== undefined) {
            if (props.isCreatable === true) {
                setOptions(__spreadArray([{ label: a, value: a }], options, true));
                // setSelectedOption({ label: a, value: a });
                props.onChange({ label: a, value: a });
            }
            else {
                props.isCreatable(a).then(function (opt) {
                    setOptions(__spreadArray([opt], options, true));
                    // setSelectedOption(opt);
                    props.onChange(opt);
                });
            }
        }
    };
    var omitHandler = function (options, callback) {
        var omitOptions = props.omitOptions;
        if (omitOptions && Array.isArray(omitOptions)) {
            var _filter_1 = omitOptions.map(function (x) { return (typeof x === 'string' || typeof x === 'number') ? x : x === null || x === void 0 ? void 0 : x.value; });
            callback(options.filter(function (x) { return !_filter_1.includes(x.value); }));
        }
        else {
            callback(options);
        }
    };
    return props.isCreatable !== undefined ?
        (0, jsx_runtime_1.jsx)(async_creatable_1.default, __assign({ styles: { container: function (base) { return (__assign(__assign({}, base), { width: '100%' })); } }, onCreateOption: createNew }, props, { options: options, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: function (a) { return props.onChange(a); }, error: props.error }, props.rsOptions, { loadOptions: function (a, b) { return props.allLoad ? props.allLoad(a, props.name, props.getValues(), function (retOptions) { return omitHandler(retOptions, b); }) : props.loadOptions(a, function (retOptions) { return omitHandler(retOptions, b); }); } }))
        :
            (0, jsx_runtime_1.jsx)(async_1.default, __assign({ styles: { container: function (base) { return (__assign(__assign({}, base), { width: '100%' })); } } }, props, { options: options, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: function (a) { return props.onChange(a); }, error: props.error }, props.rsOptions, { loadOptions: function (a, b) { return props.allLoad ? props.allLoad(a, props.name, props.getValues(), function (retOptions) { return omitHandler(retOptions, b); }) : props.loadOptions(a, function (retOptions) { return omitHandler(retOptions, b); }); } }));
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