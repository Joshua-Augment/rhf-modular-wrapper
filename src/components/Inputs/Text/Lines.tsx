import React from "react";
import { ILines } from "../../core";
import InputWrapper from "../../core/InputWrapper";

const Lines = (props: ILines) => {
  return (
    <InputWrapper type={props.type ?? "lines"} {...props}>
      <_Lines {...props} />
    </InputWrapper>
  );
};

const _Lines = (props: any) => {
  return (
    <textarea
      id={props.name}
      className={props?.customClasses?.inputClassName ?? ""}
      {...props.register(props.name)}
      placeholder={props.placeholder}
      rows={props.rows ?? 3}
      cols={props.cols}
    />
  );
};

export default Lines;
