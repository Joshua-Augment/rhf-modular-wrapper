import React from 'react';
import InputWrapper from '../../core/InputWrapper';
// import { useInputValAndError } from '../../core/hook/useInputValnError'
const Checkbox = (props) => {
    // const {value, setValue} = useInputValAndError(props.name)
    var _a;
    // const {watch, setValue} = useFormContext()
    // const _val = watch(props.name)
    // const val = useMemo(() => _val ,[_val])
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : 'checkbox' }, props, { reversedLabel: true, customClasses: { wrapperClassName: 'form-check' }, style: { display: 'flex', alignItems: 'center' } }),
        React.createElement(_Checkbox, Object.assign({}, props))));
};
const _Checkbox = (props) => {
    // console.log(`[_Checkbox] Name : ${props.name} - `, props)
    // useEffect(()=>{ if (props.value === undefined || props.value === null || props.value === '') { props.onChange( false) } },[props.value])
    return React.createElement("input", Object.assign({ id: props.name, type: "checkbox", checked: props.value }, props.register(props.name)));
};
export default Checkbox;
//# sourceMappingURL=Checkbox.js.map