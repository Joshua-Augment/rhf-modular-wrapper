import React, { useContext, useEffect, useMemo, useRef } from "react";
import { FormBaseInput } from "../../interfaces";
import { ThemeContext } from "../../Form";
import { useInputValAndError } from "../../hook/useInputValnError";
import Tooltip from "@mui/material/Tooltip";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import { Controller } from "react-hook-form";
import Logger from "../../Logger";

const InputWrapperv2 = (props: FormBaseInput) => {
  Logger.info(``, `${props.name} - InputWrapperv2`, "start");
  Logger.info(props, `${props.name} - InputWrapperv2`);

  const theme = useContext(ThemeContext);

  const {
    name: _propsName,
    value: _propsValue,
    options: _propsOptions,
    items: _propsItems,
    label: _propsLabel,
    noLabel: _propsNoLabel,
    type: _propsType,
    helperText: _propsHelperText,
  } = props;
  const { value, error, ...rest } = useInputValAndError(_propsName);

  // Getting the element needed. This can memoized

  Logger.info("Generating Element...", `${_propsName} - InputWrapperv2`);
  const Element = useMemo(
    () =>
      props.element ?? (theme.elements !== null && theme.elements[props.type ?? "line"] !== undefined ? theme.elements[props.type ?? "line"] : null),
    [props?.element, theme.elements]
  );

  const firstUpdate = useRef(true);
  Logger.info(`First Update : ${firstUpdate.current}`, `${_propsName} - InputWrapperv2`);

  const watchCalculated = props?.calculatedField?.find !== undefined ? rest.watch(props.calculatedField.find) : null;
  Logger.info(`Watching Calculated : ${String(watchCalculated)}`, `${_propsName} - InputWrapperv2`);
  // console.log(`For ${props.name}, error : `,rest.error)
  // On Value change

  useEffect(() => {
    Logger.info(`Default Value : ${String(props.defaultValue)}`, `${_propsName} - InputWrapperv2`);
    if (props.defaultValue !== undefined) {
      // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
      rest.setValue("inputWrapper - DefaultValue", props.defaultValue);
    }
  }, [props.defaultValue]);

  useEffect(() => {
    // // Make sure value isnt undefined
    // if (value === undefined) {rest.setValue(props.name, null)}

    // External Field
    if (props.externalStateSetter) {
      Logger.info(`Setting External State`, `${_propsName} - InputWrapperv2`);
      props.externalStateSetter(value);
    }
    // On Input Change
    if (props.onInputChange && !firstUpdate.current) {
      Logger.info(`First Time Setting`, `${_propsName} - InputWrapperv2`);
      props.onInputChange(value, props.name, rest.getValues(), { ...rest });
    }

    firstUpdate.current = false;
  }, [value]);

  useEffect(() => {
    // Calculated Fields
    if (props.calculatedField) {
      Logger.info(`Setting External State`, `${_propsName} - calculatedField`, "start");
      if (props.calculatedField.isPromise === true) {
        Logger.info(`Promise expected`, `${_propsName} - calculatedField`);
        props.calculatedField
          .calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues())
          // .then(data => { contextSetValue(props.name, data) })
          .then((data) => {
            Logger.info(`Calculated Data : ${String(data)}`, `${_propsName} - calculatedField`);
            Logger.info(null, null, "end");
            // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
            rest.setValue(props.name, data);
          });
      } else {
        const _result = props.calculatedField.calculate(value, props.name, rest.getValues(props.calculatedField.find), rest.getValues());
        Logger.info(`No Promise expected. Value Expected : ${String(_result)}`, `${_propsName} - calculatedField`);
        // console.log(`[Setting] Setting value for ${props.name} by calculation`)
        rest.setValue(props.name, _result);
        Logger.info(null, null, "end");
      }
    }
  }, [watchCalculated]);

  const Wrapper = (A?: any, B?: any, children?: any) => {
    if (A) {
      return <A>{children}</A>;
    }
    if (B) {
      return <B>{children}</B>;
    }
    return <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>;
  };

  Logger.info(`Setting Left Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementLeft = useMemo(() => {
    Logger.info(`useMemo`, `WrapperElementLeft`, "start");
    Logger.info(null, null, "end");
    return props?.buttons?.left
      ? Wrapper(
          props?.buttons?.wrapper?.left,
          props?.buttons?.wrapper?.all,
          props?.buttons?.left ? props.buttons.left(value, props.name, rest.getValues) : null
        )
      : null;
  }, [props?.buttons?.left, props?.buttons?.wrapper?.left, props?.buttons?.wrapper?.all]);

  Logger.info(`Setting Right Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementRight = useMemo(() => {
    Logger.info(`useMemo`, `WrapperElementRight`, "start");
    Logger.info(null, null, "end");
    return props?.buttons?.right
      ? Wrapper(
          props?.buttons?.wrapper?.right,
          props?.buttons?.wrapper?.all,
          props?.buttons?.right ? props.buttons.right(value, props.name, rest.getValues) : null
        )
      : null;
  }, [props?.buttons?.right, props?.buttons?.wrapper?.right, props?.buttons?.wrapper?.all]);

  Logger.info(`Setting Chosen Element`, `${_propsName} - InputWrapperv2`);
  const ChosenElement: any = useMemo(() => {
    Logger.info(`useMemo`, `Chosen Element`, "start");
    Logger.info(null, null, "end");
    return Element !== undefined && Element !== null ? Element : null;
  }, [value, error?.message, props?.label, props?.value, props?.options, props?.items]);

  Logger.info(`Setting InputElemWrapper`, `${_propsName} - InputWrapperv2`);
  const InputElemWrapper = useMemo(() => {
    let _props: any = { ...props };
    _props.children = undefined;
    Logger.info(`Generating New Input`, `${_propsName} - InputElemWrapper`, "start");
    Logger.info(`Props : ${JSON.stringify(_props)}`, `${_propsName} - InputElemWrapper`);

    // const Element = props.element ??
    //   (theme.elements !== null && theme.elements[props.type] !== undefined ? theme.elements[props.type] : null)
    Logger.info(`Creating Wrapper`, `${_propsName} - InputElemWrapper`);
    const Wrapper: any = props.inputWrapper ?? theme.inputTemplate ?? null;

    Logger.info(`Creating ChildComponent`, `${_propsName} - InputElemWrapper`);
    const ChildComponent = (
      <>
        {WrapperElementLeft}
        {(props?.type ?? "line").toLowerCase().includes("list") ? (
          ChosenElement ? (
            ChosenElement({
              ...props.children?.props,
              ...rest,
              disabled: props.disabled,
              type: props?.type ?? "line",
              onChange: (a) => rest.setValue(props.name, a),
              value: value,
              error: error,
              // error: formState.errors?.[field.name],
              source: "InputWrapper",
            })
          ) : (
            React.cloneElement(props.children, {
              ...props.children?.props,
              ...rest,
              disabled: props.disabled,
              type: props?.type ?? "line",
              onChange: (a) => rest.setValue(props.name, a),
              value: value,
              error: error,
              // error: formState.errors?.[field.name],
              source: "InputWrapper",
            })
          )
        ) : (
          <Controller
            name={props.name}
            control={rest.control}
            render={({ field, formState }) =>
              ChosenElement
                ? ChosenElement({
                    ...props.children?.props,
                    ...rest,
                    disabled: props.disabled,
                    type: props?.type ?? "line",
                    onChange: (a) => rest.setValue(props.name, a),
                    onBlur: field.onBlur,
                    value: field.value,
                    error: error,
                  })
                : React.cloneElement(props.children, {
                    ...props.children?.props,
                    ...rest,
                    disabled: props.disabled,
                    type: props?.type ?? "line",
                    onChange: (a) => rest.setValue(props.name, a),
                    onBlur: field.onBlur,
                    value: field.value,
                    error: error,
                  })
            }
          />
        )}
        {/* childrenInjected */}
        {WrapperElementRight}
      </>
    );

    Logger.info(`Creating WrapElement`, `${_propsName} - InputElemWrapper`);
    const WrapElem =
      Wrapper !== null && Wrapper !== undefined ? (
        <Wrapper {...props} value={value} {...rest} children={ChildComponent} />
      ) : (
        <div style={{ position: "relative", ...props.style }} className={`form-item-wrapper ${props?.customClasses?.wrapperClassName ?? ""}`}>
          {props.reversedLabel === true ? (
            <>
              <div className={`form-item-child-wrapper ${props.noBorder ? "no-border" : ""}`}>{ChildComponent}</div>
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
                      <Tooltip title={error.message}>
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
                      <Tooltip title={error.message}>
                        <ErrorIcon style={{ color: "red", fontSize: "10px" }} />
                      </Tooltip>
                    )}{" "}
                  </span>
                </label>
              }
              <div className={`form-item-child-wrapper ${props.noBorder ? "no-border" : ""}`}>{ChildComponent}</div>
            </>
          )}
        </div>
      );

    Logger.info(null, null, "end");
    return WrapElem;
  }, [_propsName, _propsValue, _propsOptions, _propsItems, _propsLabel, _propsNoLabel, _propsType, _propsHelperText]);

  Logger.info(null, null, "end");

  return InputElemWrapper;
};

export default React.memo(InputWrapperv2);
