import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import InputElemWrapper from "./InputElemWrapper";
import { FormBaseInput } from "./interfaces";

const InputWrapper = (props: FormBaseInput) => {
  const methods = props.contextless ? {control:undefined, } : useFormContext();

  return (
    <Controller
      control={methods.control}
      name={props.name}
      render={({
        field: { onChange, onBlur, value, name, ref },
        fieldState: { invalid, isTouched, isDirty, error },
        formState,
      }) => (
        <InputElemWrapper
          value={value}
          onChange={onChange}
          id={props.id}
          name={props.name}
          reversedLabel={props.reversedLabel}
          errors={error}
          label={props.label}
          helperText={props.helperText}
          noBorder={props.noBorder}
          noLabel={props.noLabel}
          customClasses={props.customClasses}
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
