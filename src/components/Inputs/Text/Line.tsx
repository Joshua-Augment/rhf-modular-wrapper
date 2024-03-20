import React from "react";
import { LineInputProps } from "../../core/index";
import InputWrapper from "../../core/InputWrapper/index";
import Logger from "../../core/Logger/index";
// import { useInputValAndError } from '../../core/hook/useInputValnError'

const Line = (props: LineInputProps) => {
  return (
    <InputWrapper type={props.type ?? "line"} {...props}>
      <_Line {...props} />
    </InputWrapper>
  );
};

const _Line = (props: any) => {
  Logger.info(props, "Line", "start");
  Logger.info(null, null, "end");
  return (
    <input
      disabled={props.disabled}
      id={props.name}
      className={props?.customClasses?.inputClassName ?? ""}
      {...props.register(props.name)}
      placeholder={props.placeholder}
      type={props.type ?? "text"}
    />
  );
};

export default Line;
