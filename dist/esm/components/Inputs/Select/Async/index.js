import React, { useCallback, useEffect, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import { InputWrapper, } from "../../../core";
import { compareArrays } from "../../../core/helpers";
const AsyncSelect = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true }), (IWProps) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return React.createElement(SelectWrapper, Object.assign({}, IWProps, props));
    }));
};
const SelectWrapper = (props) => {
    var _a, _b, _c, _d, _e, _f, _g;
    const [options, setOptions] = useState((_a = props.options) !== null && _a !== void 0 ? _a : []);
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => {
        var _a;
        setOptions((_a = props.options) !== null && _a !== void 0 ? _a : []);
    }, [JSON.stringify(props.options)]);
    useEffect(() => {
        if (props.value !== undefined) {
            if (Array.isArray(props.value) ? !compareArrays(props.value, selectedOption) : (props.value === null ? false : props.value.value !== (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value))) {
                setSelectedOption(props.value);
            }
        }
    }, [props.value]);
    const createNew = useCallback((a) => {
        if (props.isCreatable !== undefined) {
            if (props.isCreatable === true) {
                setOptions([{ label: a, value: a }, ...options]);
                setSelectedOption({ label: a, value: a });
                props.onChange({ label: a, value: a });
            }
            else {
                props.isCreatable(a).then((opt) => {
                    setOptions([opt, ...options]);
                    setSelectedOption(opt);
                    props.onChange(opt);
                });
            }
        }
    }, []);
    const onChangeHandler = useCallback((a) => {
        setSelectedOption(a);
        props.onChange(a);
    }, []);
    return props.isCreatable !== undefined ? (React.createElement(AsyncCreatableSelectInput, Object.assign({ onCreateOption: createNew }, props, { options: options, isDisabled: (_d = (_c = (_b = props.rsOptions) === null || _b === void 0 ? void 0 : _b.isDisabled) !== null && _c !== void 0 ? _c : props.disabled) !== null && _d !== void 0 ? _d : false, value: selectedOption, onChange: onChangeHandler }, props.rsOptions))) : (React.createElement(AsyncSelectInput, Object.assign({}, props, { options: options, isDisabled: (_g = (_f = (_e = props.rsOptions) === null || _e === void 0 ? void 0 : _e.isDisabled) !== null && _f !== void 0 ? _f : props.disabled) !== null && _g !== void 0 ? _g : false, value: selectedOption, onChange: onChangeHandler }, props.rsOptions)));
};
export default AsyncSelect;
//# sourceMappingURL=index.js.map