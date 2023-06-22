import React, { useCallback, useEffect, useMemo, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import { InputWrapper, } from "../../../core";
import { useFormContext } from "react-hook-form";
const AsyncSelect = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [options, setOptions] = useState((_a = props.options) !== null && _a !== void 0 ? _a : []);
    useEffect(() => { if (props.options && props.options.length > 0) {
        setOptions(props.options);
    } }, [props.options]);
    const { watch, setValue, getValues } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    const createNew = useCallback((a) => {
        if (props.isCreatable !== undefined) {
            if (props.isCreatable === true) {
                setOptions([{ label: a, value: a }, ...options]);
                // setSelectedOption({ label: a, value: a });
                setValue(props.name, { label: a, value: a });
            }
            else {
                props.isCreatable(a).then((opt) => {
                    setOptions([opt, ...options]);
                    // setSelectedOption(opt);
                    setValue(props.name, opt);
                });
            }
        }
    }, []);
    const _props = Object.assign({}, props);
    delete _props.calculatedField;
    delete _props.externalStateSetter;
    delete _props.onInputChange;
    return React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true }), props.isCreatable !== undefined ? (React.createElement(AsyncCreatableSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, _props, { options: options, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, value: val, onChange: (a) => setValue(props.name, a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, getValues(), b) : props.loadOptions(a, b) }))) : (React.createElement(AsyncSelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, _props, { options: options, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, value: val, onChange: (a) => setValue(props.name, a) }, props.rsOptions, { loadOptions: (a, b) => props.allLoad ? props.allLoad(a, props.name, getValues(), b) : props.loadOptions(a, b) }))));
};
export default AsyncSelect;
//# sourceMappingURL=index.js.map