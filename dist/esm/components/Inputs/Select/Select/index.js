import React, { useEffect, useMemo, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import { InputWrapper, } from "../../../core";
import { useFormContext } from "react-hook-form";
const Select = (props) => {
    var _a;
    const [options, setOptions] = useState((_a = props.options) !== null && _a !== void 0 ? _a : []);
    // Watch for changed options
    useEffect(() => {
        console.log("[options] - ", props.options);
        setOptions(props.options);
    }, [props.options]);
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    const createNew = (a) => {
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
    };
    const SelectElems = useMemo(() => {
        console.log("[SelectElems] -rendered", options);
        return React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true, options: options }), props.isCreatable !== undefined ?
            React.createElement(SelectCreatableInput, Object.assign({ onCreateOption: createNew }, props, props.rsOptions, { options: options, value: val, onChange: (a) => setValue(props.name, a) })) :
            React.createElement(SelectInput, Object.assign({}, props, props.rsOptions, { options: options, value: val, onChange: (a) => setValue(props.name, a) })));
    }, [options]);
    return (SelectElems);
};
export default Select;
//# sourceMappingURL=index.js.map