import React, { useContext, useEffect, useMemo, useRef } from "react";
import InputElemWrapper from "../../InputElemWrapper";
import { FormBaseInput } from "../../interfaces";
import { useInputValAndError } from "../../hook/useInputValnError";
import { Controller } from "react-hook-form";
import { ThemeContext } from "../../Form";

const InputWrapper = (props: FormBaseInput) => {
  const theme = useContext(ThemeContext);
  const Element = useMemo(() => 
  props.element ??
  (theme.elements !== null &&
  theme.elements[props.type ?? "line"] !== undefined
    ? theme.elements[props.type ?? "line"]
    : null
  ),[props?.element, theme.elements]);

  const firstUpdate = useRef(true);
  const { value, error, ...rest } = useInputValAndError(props.name);

  const watchCalculated =
    props?.calculatedField?.find !== undefined
      ? rest.watch(props.calculatedField.find)
      : null;

  // console.log(`For ${props.name}, error : `,rest.error)
  // On Value change
  useEffect(() => {
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
      props.externalStateSetter(value);
    }
    // On Input Change
    if (props.onInputChange && !firstUpdate.current) {
      props.onInputChange(value, props.name, rest.getValues(), { ...rest });
    }

    firstUpdate.current = false;
  }, [value]);

  useEffect(() => {

    // Calculated Fields
    if (props.calculatedField) {
      if (props.calculatedField.isPromise === true) {
        props.calculatedField
          .calculate(
            value,
            props.name,
            rest.getValues(props.calculatedField.find),
            rest.getValues()
          )
          // .then(data => { contextSetValue(props.name, data) })
          .then((data) => {
            // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
            rest.setValue(props.name, data);
          });
      } else {
        // console.log(`[Setting] Setting value for ${props.name} by calculation`)
        rest.setValue(
          props.name,
          props.calculatedField.calculate(
            value,
            props.name,
            rest.getValues(props.calculatedField.find),
            rest.getValues()
          )
        );
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
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>
    );
  }

  const WrapperElementLeft = useMemo(()=> props?.buttons?.left
  ? Wrapper(
      props?.buttons?.wrapper?.left,
      props?.buttons?.wrapper?.all,
      props?.buttons?.left
        ? props.buttons.left(value, props.name, rest.getValues)
        : null
    )
  : null, [props?.buttons?.left, props?.buttons?.wrapper?.left, props?.buttons?.wrapper?.all]);
  
  const WrapperElementRight = useMemo(()=>props?.buttons?.right
  ? Wrapper(
      props?.buttons?.wrapper?.right,
      props?.buttons?.wrapper?.all,
      props?.buttons?.right
        ? props.buttons.right(value, props.name, rest.getValues)
        : null
    )
  : null,[props?.buttons?.right, props?.buttons?.wrapper?.right, props?.buttons?.wrapper?.all]);
  
  const ChosenElement: any = useMemo(()=>Element !== undefined && Element !== null ? Element : null, [Element, value, error?.message, props?.label, props?.value, props?.options, props?.items]);

  return (
    <InputElemWrapper {...props} disabled={props.disabled} value={value}>
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
    </InputElemWrapper>
  );
};

export default React.memo(InputWrapper);
