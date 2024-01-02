import React from "react";
import { ILines } from "../../core";
import InputWrapper from "../../core/InputWrapper";
// import { useInputValAndError } from "../../core/hook/useInputValnError";

const Lines = (props: ILines) => {
  // const {watch, setValue} = useFormContext()
  // const {value, setValue} = useInputValAndError(props.name)
  // const _val = watch(props.name)
  // const val = useMemo(() => _val ,[_val])

  return (
    <InputWrapper type={props.type ?? 'lines'} {...props}>
      <_Lines {...props} />
    </InputWrapper>
  );
};

const _Lines = (props: any) => {
  return <textarea
  id={props.name}
  className={props?.customClasses?.inputClassName ?? ""}
  {...props.register(props.name)}
  // name={props.name}
  // value={value !== undefined && value !== null ? value : ''}
  // onChange={(a) => setValue(props.name, a.target.value)}
  placeholder={props.placeholder}
  rows={props.rows ?? 3}
  cols={props.cols}
/>
}

export default Lines;
