import React, { useState } from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputElemWrapper from "./InputElemWrapper";
import { FormBaseInput } from "./interfaces";

const InputWrapper = (props: FormBaseInput) => {
  const [_value, _setValue] = useState(null)
  const methods = props.contextless === true ? {control:undefined } : useFormContext();

  return (
    props.contextless ?
    // Since this does not live in a form there is no form context, as such just store the state in the wrapper itself
    // to maintain the input as a controlled input
    <InputElemWrapper
      {...props}
      value={_value}
      onChange={_setValue}
  >
    {props.children &&
      props.children({
        ...props,
        value : _value,
        onChange : _setValue,
        onBlur : ()=>false,
        isTouched: _value !== null,
        isDirty: _value !== null,
        error : undefined,
        disabled : props.disabled,
        ref : undefined,
      })}
  </InputElemWrapper> : 
  // Control is handled by the Controller Element instead
    <Controller
      control={methods.control}
      name={props.name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <InputElemWrapper
          {...props}
          value={value}
          onChange={onChange}
          errors={error}
        >
          {props.children &&
            props.children({
              ...props,
              value,
              onChange,
              onBlur,
              isTouched,
              isDirty,
              error,
              disabled : props.disabled,
              ref,
            })}
        </InputElemWrapper>
      )}
    />
  );
};

export default InputWrapper;
