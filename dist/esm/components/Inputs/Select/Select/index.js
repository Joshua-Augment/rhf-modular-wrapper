import React, { useEffect, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import { InputWrapper, } from "../../../core";
import { Controller } from "react-hook-form";
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
    return React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'select' }, props, { noBorder: true }),
        React.createElement(_Select, Object.assign({}, _props)));
};
const _Select = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [options, setOptions] = useState((_a = props.options) !== null && _a !== void 0 ? _a : []);
    useEffect(() => {
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
        React.createElement(SelectCreatableInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew, onBlur: props.onBlur }, props, props.rsOptions, { options: options, error: props.error, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a) })) :
        React.createElement(SelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, props.rsOptions, { options: options, onBlur: props.onBlur, error: props.error, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a) }));
    return React.createElement(Controller, { control: props.control, name: props.name, defaultValue: props.defaultValue, render: ({ field: { name, value, onChange, onBlur }, formState: { errors } }) => {
            var _a, _b, _c, _d, _e, _f;
            return (props.isCreatable !== undefined ?
                React.createElement(SelectCreatableInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew, onBlur: onBlur }, props, props.rsOptions, { options: options, error: name in errors ? errors[name] : undefined, isDisabled: (_c = (_b = (_a = props.rsOptions) === null || _a === void 0 ? void 0 : _a.isDisabled) !== null && _b !== void 0 ? _b : props.disabled) !== null && _c !== void 0 ? _c : false, name: name, value: value, onChange: (a) => onChange(a) })) :
                React.createElement(SelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, props.rsOptions, { options: options, onBlur: onBlur, error: name in errors ? errors[name] : undefined, isDisabled: (_f = (_e = (_d = props.rsOptions) === null || _d === void 0 ? void 0 : _d.isDisabled) !== null && _e !== void 0 ? _e : props.disabled) !== null && _f !== void 0 ? _f : false, name: name, value: value, onChange: (a) => onChange(a) })));
        } });
};
export default Select;
//# sourceMappingURL=index.js.map