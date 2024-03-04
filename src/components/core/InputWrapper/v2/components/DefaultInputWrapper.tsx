import React from "react";
import { IInputInnerWrapper } from "./InputInnerWrapper";
import { Tooltip } from "@mui/material";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

const DefaultInputWrapper = (props: IInputInnerWrapper) => {
  console.log(`value for ${props.name}  - ${typeof props.value} - `, props.value);
  return (
    <div style={{ position: "relative", ...props.style }} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ""}`}>
      {props.reversedLabel === true ? (
        <React.Fragment key={`rhf-wrapper-${props.name}`}>
          <div className={`form-item-child-wrapper ${props.noBorder ? "no-border" : ""}`}>{props.children}</div>
          {
            <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ""} style={{ marginLeft: "5px" }}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} </span>}
              <span>
                {props.helperText && (
                  <Tooltip title={props.helperText}>
                    <InfoIcon style={{ color: "blue", fontSize: "10px" }} />
                  </Tooltip>
                )}{" "}
              </span>
              <span>
                {props.error && (
                  <Tooltip title={props.error.message}>
                    <ErrorIcon style={{ color: "red", fontSize: "10px" }} />
                  </Tooltip>
                )}{" "}
              </span>
            </label>
          }
        </React.Fragment>
      ) : (
        <React.Fragment key={`rhf-wrapper-${props.name}`}>
          {
            <label htmlFor={props.id ?? props.name} className={props?.customClasses?.labelClassName ?? ""} style={{ marginRight: "5px" }}>
              {props.noBorder !== false && props.noLabel !== true && <span>{props.label} </span>}
              <span>
                {props.helperText && (
                  <Tooltip title={props.helperText}>
                    <InfoIcon style={{ color: "blue", fontSize: "10px" }} />
                  </Tooltip>
                )}{" "}
              </span>
              <span>
                {props.error && (
                  <Tooltip title={props.error.message}>
                    <ErrorIcon style={{ color: "red", fontSize: "10px" }} />
                  </Tooltip>
                )}{" "}
              </span>
            </label>
          }
          <div className={`form-item-child-wrapper ${props.noBorder ? "no-border" : ""}`}>{props.children}</div>
        </React.Fragment>
      )}
    </div>
  );
};

export default React.memo(DefaultInputWrapper);
