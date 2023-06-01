import React, { useMemo } from "react";
import { ILines } from "../../core";
import InputWrapper from "../../core/InputWrapper";
import { useFormContext } from "react-hook-form";

const Lines = (props: ILines) => {
  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(() => _val ,[_val])

  return (
    <InputWrapper {...props}>
      <textarea
        id={props.name}
        className={props?.customClasses?.inputClassName ?? ""}
        name={props.name}
        value={val === undefined ? '' : val}
        onChange={(a) => setValue(props.name, a.target.value)}
        placeholder={props.placeholder}
        rows={props.rows ?? 3}
        cols={props.cols}
      />
    </InputWrapper>
  );
};

export default Lines;
