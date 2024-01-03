import React, { useEffect, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import { InputWrapper, } from "../../../core";
import { Controller } from "react-hook-form";
const AsyncSelect = (props) => {
    var _a;
    const _props = Object.assign({}, props);
    delete _props.calculatedField;
    delete _props.externalStateSetter;
    delete _props.onInputChange;
    return React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'select_async' }, props, { noBorder: true }),
        React.createElement(_AsyncSelect, Object.assign({}, props)));
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
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    // console.log(`[Select] [${props.name}] props : `,props)
    const [options, setOptions] = useState((_a = props.options) !== null && _a !== void 0 ? _a : []);
    useEffect(() => {
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
        React.createElement(AsyncCreatableSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, props, { options: options, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a), error: props.error }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) }))
        :
            React.createElement(AsyncSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, { options: options, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a), error: props.error }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) }));
    return React.createElement(Controller, { control: props.control, name: props.name, defaultValue: props.defaultValue, render: ({ field: { name, value, onChange, onBlur }, formState: { errors } }) => {
            var _a, _b, _c, _d, _e, _f;
            return (props.isCreatable !== undefined ?
                React.createElement(AsyncCreatableSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, props, { options: options, isDisabled: (_c = (_b = (_a = props.rsOptions) === null || _a === void 0 ? void 0 : _a.isDisabled) !== null && _b !== void 0 ? _b : props.disabled) !== null && _c !== void 0 ? _c : false, name: name, value: value, onChange: (a) => onChange(a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) }))
                :
                    React.createElement(AsyncSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, { options: options, isDisabled: (_f = (_e = (_d = props.rsOptions) === null || _d === void 0 ? void 0 : _d.isDisabled) !== null && _e !== void 0 ? _e : props.disabled) !== null && _f !== void 0 ? _f : false, name: name, value: value, onChange: (a) => onChange(a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) })));
        } });
    props.isCreatable !== undefined ? (React.createElement(AsyncCreatableSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, props, { options: options, isDisabled: (_k = (_j = (_h = props.rsOptions) === null || _h === void 0 ? void 0 : _h.isDisabled) !== null && _j !== void 0 ? _j : props.disabled) !== null && _k !== void 0 ? _k : false, value: props.value, onChange: (a) => props.onChange(a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) }))) : (React.createElement(AsyncSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, { options: options, isDisabled: (_o = (_m = (_l = props.rsOptions) === null || _l === void 0 ? void 0 : _l.isDisabled) !== null && _m !== void 0 ? _m : props.disabled) !== null && _o !== void 0 ? _o : false, value: props.value, onChange: (a) => props.onChange(a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), b) : props.loadOptions(a, b) })));
};
export default AsyncSelect;
//# sourceMappingURL=index.js.map