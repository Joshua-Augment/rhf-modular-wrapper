import React, { useContext, useMemo } from "react";
import Tooltip from "@mui/material/Tooltip";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import { FormFrameWrapperProps } from "./interfaces";
import { ThemeContext } from "./Form";
import { useInputValAndError } from "./hook/useInputValnError";

const InputElemWrapper = (props: FormFrameWrapperProps) => {
  console.log(`[InputElementWrapper] - props `, props);
  let _props: any = {...props};
  _props.children = undefined

  const { value, error, ...rest } = useInputValAndError(props.name);

  const theme = useContext(ThemeContext);

  // const Element = props.element ??
  //   (theme.elements !== null && theme.elements[props.type] !== undefined ? theme.elements[props.type] : null)
  const Wrapper = useMemo(
    () => props.inputWrapper ?? theme.inputTemplate ?? null,
    [props.helperText, props.label, props.noLabel, props.placeholder, value, error?.message, props?.inputWrapper, theme?.inputTemplate]
  );

  const WrapElem = useMemo(
    () =>
      Wrapper !== null && Wrapper !== undefined ? (
        <Wrapper {...props} value={value} {...rest} />
      ) : (
        <div style={{ position: "relative", ...props.style }} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ""}`}>
          {props.reversedLabel === true ? (
            <>
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
                    {error && (
                      <Tooltip title={(error?.message as string) ?? ''}>
                        <ErrorIcon style={{ color: "red", fontSize: "10px" }} />
                      </Tooltip>
                    )}{" "}
                  </span>
                </label>
              }
            </>
          ) : (
            <>
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
                    {error && (
                      <Tooltip title={(error?.message as string) ?? ''}>
                        <ErrorIcon style={{ color: "red", fontSize: "10px" }} />
                      </Tooltip>
                    )}{" "}
                  </span>
                </label>
              }
              <div className={`form-item-child-wrapper ${props.noBorder ? "no-border" : ""}`}>{props.children}</div>
            </>
          )}
        </div>
      ),
    [value, error?.message, props.element, JSON.stringify(_props)]
  );

  return WrapElem;
};

export default React.memo(InputElemWrapper);
