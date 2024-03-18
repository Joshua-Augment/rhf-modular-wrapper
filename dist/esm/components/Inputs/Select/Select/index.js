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
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import InputWrapper from "../../../core/InputWrapper/index";
var Select = function (props) {
    // const {value, error, setValue} = useInputValAndError(props.name)
    var _a;
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(()=>_val,[_val])
    var _props = __assign({}, props);
    delete _props.calculatedField;
    delete _props.externalStateSetter;
    delete _props.onInputChange;
    return (_jsx(InputWrapper, __assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "select" }, props, { noBorder: true }, { children: _jsx(_Select, __assign({}, _props)) })));
};
var _Select = function (props) {
    var _a, _b, _c, _d, _e, _f, _g;
    var _h = useState((_a = props.options) !== null && _a !== void 0 ? _a : []), options = _h[0], setOptions = _h[1];
    var _options = props.options.map(function (x) { return x.value; }).join(",");
    // Synchronization
    useEffect(function () {
        setOptions(props.options);
    }, [_options]);
    var omitOptions = props.omitOptions;
    var omitFilter = useMemo(function () { return (omitOptions ? omitOptions.map(function (x) { return (typeof x === "string" || typeof x === "number" ? x : x === null || x === void 0 ? void 0 : x.value); }) : null); }, [omitOptions]);
    var filteredOmittedOptions = options.filter(function (x) {
        if (omitFilter) {
            return !omitFilter.includes(x.value);
        }
        else {
            return true;
        }
    });
    // useEffect(()=> {
    //   if (props.options && Array.isArray(props.options)) {
    //     const omitOptions:BaseSelect['omitOptions'] = props.omitOptions
    //     if (omitOptions && Array.isArray(omitOptions)) {
    //       const _filter = omitOptions.map(x => (typeof x ==='string' || typeof x === 'number') ? x : x?.value as string|number)
    //       setOptions((props.options as TSelectOption[]).filter(x => !_filter.includes(x.value)))
    //     } else {
    //       setOptions(props.options)
    //     }
    //   }
    // },[props.options])
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
    return props.isCreatable !== undefined ? (_jsx(SelectCreatableInput, __assign({ styles: { container: function (base) { return (__assign(__assign({}, base), { width: "100%" })); } }, onCreateOption: createNew, onBlur: props.onBlur }, props, props.rsOptions, { options: filteredOmittedOptions, error: props.error, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: function (a) { return props.onChange(a); } }))) : (_jsx(SelectInput, __assign({ styles: { container: function (base) { return (__assign(__assign({}, base), { width: "100%" })); } } }, props, props.rsOptions, { options: filteredOmittedOptions, onBlur: props.onBlur, error: props.error, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: function (a) { return props.onChange(a); } })));
};
export default Select;
//# sourceMappingURL=index.js.map