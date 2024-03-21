import { useContext, useMemo } from "react";
import { useController, useFormContext, useFormState, useWatch } from "react-hook-form";
import Logger from "../Logger/index";
import { ThemeContext } from "../Form";

const accessObjectByDottedName = (obj: Record<string, any>, name: string) => {
  const keys = name.split(".");
  let result = obj;

  for (let key of keys) {
    if (result && typeof result === "object" && key in result) {
      result = result[key];
    } else {
      return null; // Property not found
    }
  }

  return result;
};

export const useInputValAndError = <T = any,>(name: string, directDefaultValue?: T) => {
  const { debug } = useContext(ThemeContext);
  Logger.info(debug, `Name : ${name}`, "useInputValAndError", "start");
  const { control, ...methods } = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { /* invalid, */ isTouched, /* isValidating, */ error },
    // formState: { isLoading, isSubmitSuccessful, isSubmitted, isSubmitting, submitCount },
  } = useController({ name: name, defaultValue: directDefaultValue });

  Logger.info(debug, `Value : ${String(value)}`, "useInputValAndError");
  // Logger.info(debug, `Errors : ${JSON.stringify(Logger.nullifyCircular(errors ?? {}))}`, "useInputValAndError");

  // const error = useMemo(() => accessObjectByDottedName(errors, name), [accessObjectByDottedName(errors, name)?.message, value]);

  Logger.info(debug, null, null, "end");

  return {
    value: value,
    onChange,
    onBlur,
    inputRef: ref,
    ...methods,
    error,
    fieldState: {
      // invalid,
      isTouched,
      // isValidating,
    },
    // formState: {
    //   isLoading,
    //   isSubmitSuccessful,
    //   isSubmitted,
    //   isSubmitting,
    //   submitCount,
    // },
  };
};
