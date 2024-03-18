import React from "react";
import { ISwitch } from "../../core/index";
import InputWrapper from "../../core/InputWrapper/index";
import { default as SwitchInput } from "react-switch";

const Switch = (props: ISwitch) => {
  return (
    <InputWrapper type={props.type ?? "switch"} {...props} id={`${props.name}`} noBorder customClasses={{ wrapperClassName: "form-check" }}>
      <_Switch {...props} />
    </InputWrapper>
  );
};

const _Switch = (props: any) => {
  console.log(`_Switch: ${props.name} = `, props);
  return (
    <div
      className={`d-block ${props.wrapperClass}`}
      style={{ display: "flex", alignItems: "center", flexDirection: "column", ...props.wrapperStyle }}
    >
      <SwitchInput {...(props?.options ?? {})} className={props?.inputClass} onChange={(a) => props.onChange(a)} checked={props.value ?? false} />
      {props.footLabel && <div className="text-muted text-center">{props.footLabel && (props.value ? props.footLabel[1] : props.footLabel[0])}</div>}
    </div>
  );
};
export default Switch;
