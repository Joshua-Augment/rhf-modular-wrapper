import React, { useEffect } from "react";
import { IRadiobox } from "../../core";
import InputWrapper from "../../core/InputWrapper";
import "../../styling/Radiobox.css";

const Radiobox = (props: IRadiobox) => {
  return (
    <InputWrapper type={props.type ?? "radiobox"} {...props} id={`${props.name}`} noBorder>
      <_Radiobox {...props} />
    </InputWrapper>
  );
};

const _Radiobox = (props: any) => {
  useEffect(() => {
    if (props.value === undefined || props.value === "" || props.value === null) {
      props.onChange(props.options[0].value);
    }
  }, [props.value]);

  return (
    <div className={`radio-button-group`}>
      {props.options.map((option, i) =>
        option.reversed ? (
          <React.Fragment key={`rhf-${props.name}-rb-${option.value}`}>
            <input type="radio" id={`${props.name}-${option.value}`} name={props.name} value={option.value} />
            <br />
            <label htmlFor={`${props.name}-${option.value}`}>{option.label}</label>
          </React.Fragment>
        ) : (
          <React.Fragment key={`rhf-${props.name}-rb-${option.value}`}>
            <label htmlFor={`${props.name}-${option.value}`}>{option.label}</label>
            <br />
            <input type="radio" id={`${props.name}-${option.value}`} name={props.name} value={option.value} />
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Radiobox;
