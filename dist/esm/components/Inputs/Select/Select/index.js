import React, { useCallback, useEffect, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import { InputWrapper, } from "../../../core";
import { compareArrays } from "../../../core/helpers";
const Select = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true }), (IWProps) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return React.createElement(SelectWrapper, Object.assign({}, IWProps, props));
    }));
};
const SelectWrapper = (props) => {
    var _a;
    const [options, setOptions] = useState((_a = props.options) !== null && _a !== void 0 ? _a : []);
    const [selectedOption, setSelectedOption] = useState(null);
    useEffect(() => { setOptions(props.options); }, [props.options]);
    useEffect(() => {
        if (Array.isArray(props.value) ? !compareArrays(props.value, selectedOption) : (props.value === null ? false : props.value.value !== (selectedOption === null || selectedOption === void 0 ? void 0 : selectedOption.value))) {
            setSelectedOption(props.value);
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
    return props.isCreatable !== undefined ? (React.createElement(SelectCreatableInput, Object.assign({ onCreateOption: createNew }, props, { options: options, value: selectedOption, onChange: onChangeHandler }, props.rsOptions))) : (React.createElement(SelectInput, Object.assign({}, props, { options: options, value: selectedOption, onChange: onChangeHandler }, props.rsOptions)));
};
export default Select;
//# sourceMappingURL=index.js.map