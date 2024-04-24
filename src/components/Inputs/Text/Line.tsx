import React, { useContext } from "react";
import { LineInputProps, ThemeContext } from "../../core/index";
import InputWrapper from "../../core/InputWrapper/index";
import Logger from "../../core/Logger/index";

const Line = (props: LineInputProps) => {
  return (
    <InputWrapper empty={''} type={props.type ?? "line"} {...props} >
      <_Line {...props} />
    </InputWrapper>
  );
};

const _Line = (props: any) => {
  console.log("_Line", props)
  return (
    <input
      disabled={props.disabled}
      id={props.name}
      className={props?.customClasses?.inputClassName ?? ""}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      // {...props.register(props.name)}
      placeholder={props.placeholder}
      type={props.type ?? "text"}
    />
  );
};

export default Line;
