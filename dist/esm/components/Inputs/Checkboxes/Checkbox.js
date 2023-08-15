import React, { useEffect } from 'react';
import InputWrapper from '../../core/InputWrapper';
import { useInputValAndError } from '../../core/hook/useInputValnError';
const Checkbox = (props) => {
    var _a;
    const { value, setValue } = useInputValAndError(props.name);
    useEffect(() => { if (value === undefined || value === null || value === '') {
        setValue(props.name, false);
    } }, [value]);
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => _val ,[_val])
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'checkbox' }, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' }, style: { display: 'flex', alignItems: 'center' } }),
        React.createElement("input", { id: props.name, type: "checkbox", name: props.name, checked: value, value: value, onChange: (a) => setValue(props.name, a.target.checked) })));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map