import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import InputWrapper from "../../../core/InputWrapper";
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
    return _jsx(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'select' }, props, { noBorder: true }, { children: _jsx(_Select, Object.assign({}, _props)) }));
};
const _Select = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [options, setOptions] = useState((_a = props.options) !== null && _a !== void 0 ? _a : []);
    const _options = props.options.map(x => x.value).join(',');
    // Synchronization
    useEffect(() => { setOptions(props.options); }, [_options]);
    const omitOptions = props.omitOptions;
    const omitFilter = useMemo(() => omitOptions ? omitOptions.map(x => (typeof x === 'string' || typeof x === 'number') ? x : x === null || x === void 0 ? void 0 : x.value) : null, [omitOptions]);
    const filteredOmittedOptions = options.filter(x => {
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
        _jsx(SelectCreatableInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew, onBlur: props.onBlur }, props, props.rsOptions, { options: filteredOmittedOptions, error: props.error, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a) })) :
        _jsx(SelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, props.rsOptions, { options: filteredOmittedOptions, onBlur: props.onBlur, error: props.error, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a) }));
};
export default Select;
//# sourceMappingURL=index.js.map