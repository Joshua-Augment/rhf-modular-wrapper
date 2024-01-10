import React, { useEffect, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import { InputWrapper, } from "../../../core";
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
    var _a, _b, _c, _d, _e, _f, _g;
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
    const omitHandler = (options, callback) => {
        const omitOptions = props.omitOptions;
        if (omitOptions && Array.isArray(omitOptions)) {
            const _filter = omitOptions.map(x => (typeof x === 'string' || typeof x === 'number') ? x : x === null || x === void 0 ? void 0 : x.value);
            callback(options.filter(x => !_filter.includes(x.value)));
        }
        else {
            callback(options);
        }
    };
    return props.isCreatable !== undefined ?
        React.createElement(AsyncCreatableSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, props, { options: options, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a), error: props.error }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), (retOptions) => omitHandler(retOptions, b)) : props.loadOptions(a, (retOptions) => omitHandler(retOptions, b)) }))
        :
            React.createElement(AsyncSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, { options: options, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, name: props.name, value: props.value, onChange: (a) => props.onChange(a), error: props.error }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(), (retOptions) => omitHandler(retOptions, b)) : props.loadOptions(a, (retOptions) => omitHandler(retOptions, b)) }));
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
export default AsyncSelect;
//# sourceMappingURL=index.js.map