import React, { useCallback, useEffect, useState } from 'react';
import SelectInput from "react-select/";
import SelectCreatableInput from "react-select/creatable";
import { InputWrapper } from '../../../core';
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
    useEffect(() => { setOptions(props.options); }, [JSON.stringify(props.options)]);
    const createNew = useCallback((a) => {
        if (props.isCreateable !== undefined) {
            if (props.isCreateable === true) {
                setOptions([{ label: a, value: a }, ...options]);
                setSelectedOption({ label: a, value: a });
                props.onChange({ label: a, value: a });
            }
            else {
                props.isCreateable(a).then(opt => {
                    setOptions([opt, ...options]);
                    setSelectedOption(opt);
                    props.onChange(opt);
                });
            }
        }
    }, []);
    const onChangeHandler = useCallback((a) => { setSelectedOption(a); props.onChange(a); }, []);
    return props.isCreateable !== undefined ?
        React.createElement(SelectCreatableInput, Object.assign({ onCreateOption: createNew }, props, { options: options, value: selectedOption, onChange: onChangeHandler }, props.rsOptions)) :
        React.createElement(SelectInput, Object.assign({}, props, { options: options, value: selectedOption, onChange: onChangeHandler }, props.rsOptions));
};
export default Select;
//# sourceMappingURL=index.js.map