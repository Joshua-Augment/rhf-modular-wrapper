import React from "react";
import { IInputInnerWrapper } from "./InputInnerWrapper";

const DefaultInputWrapper = (props: IInputInnerWrapper) => {
  return (
    <div style={{ position: "relative", ...props.style }} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ""}`}>
      {props.reversedLabel === true ? (
        <React.Fragment key={`rhf-wrapper-${props.name}`}>
          <div className={`form-item-child-wrapper ${props.noBorder ? "no-border" : ""}`}>{props.children}</div>
          {
            <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ""} style={{ marginLeft: "5px" }}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} </span>}
              <span className='form-item-helper-text'>
                {props.helperText && (
                  props.helperText
                )}{" "}
              </span>
            </label>
          }
          {
            props.error && <span className="form-item-error-text">{props.error.message}</span>
          }
        </React.Fragment>
      ) : (
        <React.Fragment key={`rhf-wrapper-${props.name}`}>
          {
            <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ""} style={{ marginRight: "5px" }}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} </span>}
              <span className='form-item-helper-text'>
                {props.helperText && (
                  props.helperText
                )}{" "}
              </span>
            </label>
          }
          <div className={`form-item-child-wrapper ${props.noBorder ? "no-border" : ""}`}>{props.children}</div>
          {
            props.error && <span className="form-item-error-text">{props.error.message}</span>
          }
        </React.Fragment>
      )}
    </div>
  );
};

export default React.memo(DefaultInputWrapper);
