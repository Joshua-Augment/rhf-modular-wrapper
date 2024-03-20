import React from "react";
import { ICheckbox } from "../../core/index";
import InputWrapper from "../../core/InputWrapper/index";

const Checkbox = (props: ICheckbox) => {
  return (
    <InputWrapper
      empty={null}
      type={props.type ?? "checkbox"}
      {...props}
      reversedLabel
      customClasses={{ wrapperClassName: "form-check" }}
      style={{ display: "flex", alignItems: "center" }}
    >
      <_Checkbox {...props} />
    </InputWrapper>
  );
};

const _Checkbox = (props: any) => {
  return <input id={props.name} type="checkbox" checked={props.value} {...props.register(props.name)} />;
};

export default Checkbox;
