import React, { useEffect } from "react";
import { IRadiobox, TRadioOption } from "../../core/index";
import InputWrapper from "../../core/InputWrapper/index";
import "../../styling/Radiobox.css";

const Radiobox = (props: IRadiobox) => {
  return (
    <InputWrapper empty={null} type={props.type ?? "radiobox"} {...props} id={`${props.name}`} noBorder>
      <_Radiobox {...props} />
    </InputWrapper>
  );
};

const _Radiobox = (props: any) => {
  console.log(`Radiobox value : `,props.value)

  return (
    <div className={`radio-button-group`}>
      {props.options.map((option: TRadioOption, i: number) =>
        option.reversed ? (
          <React.Fragment key={`rhf-${props.name}-rb-${option.value}`}>
            <input {...props.register(props.name)}  type="radio" id={`${props.name}-${option.value}`}  value={option.value} />
            <label htmlFor={`${props.name}-${option.value}`}>{option.label}</label>
          </React.Fragment>
        ) : (
          <React.Fragment key={`rhf-${props.name}-rb-${option.value}`}>
            <label htmlFor={`${props.name}-${option.value}`}>{option.label}</label>
            <input {...props.register(props.name)}  type="radio" id={`${props.name}-${option.value}`}  value={option.value} />
          </React.Fragment>
        )
      )}
    </div>
  );
};

export default Radiobox;
