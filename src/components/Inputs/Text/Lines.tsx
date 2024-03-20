import React from "react";
import { ILines } from "../../core/index";
import InputWrapper from "../../core/InputWrapper/index";

const Lines = (props: ILines) => {
  return (
    <InputWrapper empty={''} type={props.type ?? "lines"} {...props}>
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
