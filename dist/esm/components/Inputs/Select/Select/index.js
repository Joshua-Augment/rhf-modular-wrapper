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
import InputWrapper from "../../../core/InputWrapper/index.js";
var Select = function (props) {
    var _a;
    var _props = __assign({}, props);
    delete _props.calculatedField;
    delete _props.externalStateSetter;
    delete _props.onInputChange;
    return (_jsx(InputWrapper, __assign({ empty: null, type: (_a = props.type) !== null && _a !== void 0 ? _a : "select" }, props, { noBorder: true }, { children: _jsx(_Select, __assign({}, _props)) })));
};
var _Select = function (props) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    var _k = useState((_a = props.options) !== null && _a !== void 0 ? _a : []), options = _k[0], setOptions = _k[1];
    var _options = props.options.map(function (x) { return x.value; }).join(",");
    // Synchronization
    useEffect(function () {
        setOptions(props.options);
    }, [_options]);
    useEffect(function () {
        if (props.value === undefined) {
            props.onChange(null);
        }
    }, [props.value]);
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
        var _a, _b, _c, _d;
        if (props.isCreatable !== undefined) {
            var isMulti = (props === null || props === void 0 ? void 0 : props.rsOptions) ? (_c = (_b = (_a = props.rsOptions) === null || _a === void 0 ? void 0 : _a.isMulti) !== null && _b !== void 0 ? _b : props === null || props === void 0 ? void 0 : props.isMulti) !== null && _c !== void 0 ? _c : false : false;
            if (props.isCreatable === true) {
                setOptions(__spreadArray([{ label: a, value: a }], options, true));
                // setSelectedOption({ label: a, value: a });
                props.onChange(isMulti ? __spreadArray(__spreadArray([], ((_d = props.value) !== null && _d !== void 0 ? _d : []), true), [{ label: a, value: a }], false) : { label: a, value: a });
            }
            else {
                props.isCreatable(a).then(function (opt) {
                    var _a;
                    setOptions(__spreadArray([opt], options, true));
                    // setSelectedOption(opt);
                    props.onChange(props.isMulti || props.rsOptions.isMulti ? __spreadArray(__spreadArray([], ((_a = props.value) !== null && _a !== void 0 ? _a : []), true), [opt], false) : opt);
                });
            }
        }
    };
    return props.isCreatable !== undefined ? (_jsx(SelectCreatableInput, __assign({ styles: { container: function (base) { return (__assign(__assign({}, base), { width: "100%" })); } }, onCreateOption: createNew, onBlur: props.onBlur }, props, props.rsOptions, { options: filteredOmittedOptions, error: props.error, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: (_e = props.value) !== null && _e !== void 0 ? _e : null, onChange: function (a) { return props.onChange(a); } }))) : (_jsx(SelectInput, __assign({ styles: { container: function (base) { return (__assign(__assign({}, base), { width: "100%" })); } } }, props, props.rsOptions, { options: filteredOmittedOptions, onBlur: props.onBlur, error: props.error, isDisabled: (_h = (_g = (_f = props.rsOptions) === null || _f === void 0 ? void 0 : _f.isDisabled) !== null && _g !== void 0 ? _g : props.disabled) !== null && _h !== void 0 ? _h : false, name: props.name, value: (_j = props.value) !== null && _j !== void 0 ? _j : null, onChange: function (a) { return props.onChange(a); } })));
};
export default Select;
//# sourceMappingURL=index.js.map