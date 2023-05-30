import React, { useMemo } from 'react';
import InputWrapper from '../../core/InputWrapper';
import { useFormContext } from 'react-hook-form';
const Checkbox = (props) => {
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    return (React.createElement(InputWrapper, Object.assign({}, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' }, style: { display: 'flex', alignItems: 'center' } }),
        React.createElement("input", { id: props.name, type: "checkbox", name: props.name, checked: val, value: val, onChange: (a) => setValue(props.name, a.target.checked) })));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map