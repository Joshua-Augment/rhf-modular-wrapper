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
        var _a, _b, _c, _d, _e, _f;
        console.log("[SelectElems] -rendered", options);
        return React.createElement(InputWrapper, Object.assign({}, props, { noBorder: true, options: options }), props.isCreatable !== undefined ?
            React.createElement(SelectCreatableInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) }, onCreateOption: createNew }, props, props.rsOptions, { options: options, isDisabled: (_c = (_b = (_a = props.rsOptions) === null || _a === void 0 ? void 0 : _a.isDisabled) !== null && _b !== void 0 ? _b : props.disabled) !== null && _c !== void 0 ? _c : false, value: val, onChange: (a) => setValue(props.name, a) })) :
            React.createElement(SelectInput, Object.assign({ styles: { container: (base) => (Object.assign(Object.assign({}, base), { width: '100%' })) } }, props, props.rsOptions, { options: options, isDisabled: (_f = (_e = (_d = props.rsOptions) === null || _d === void 0 ? void 0 : _d.isDisabled) !== null && _e !== void 0 ? _e : props.disabled) !== null && _f !== void 0 ? _f : false, value: val, onChange: (a) => setValue(props.name, a) })));
    }, [options]);
    return (SelectElems);
};
export default Select;
//# sourceMappingURL=index.js.map