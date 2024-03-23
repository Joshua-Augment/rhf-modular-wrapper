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

export const useInputValAndError = <T = any,>(name: string, directDefaultValue?: T, disabled?: boolean) => {
  const { debug } = useContext(ThemeContext);
  Logger.info(debug, `Name : ${name}`, "useInputValAndError", "start");
  const { control, ...methods } = useFormContext();

  const {
    field: { onChange, onBlur, value, ref },
    fieldState: { isTouched, error },
  } = useController({ name: name, defaultValue: directDefaultValue ?? undefined, disabled });

  Logger.info(debug, value, "useInputValAndError-value");
  Logger.info(debug, error, "useInputValAndError-error");
  Logger.info(debug, isTouched, "useInputValAndError-isTouched");
  Logger.info(debug, null, null, "end");

  return {
    value: value,
    onChange,
    onBlur,
    inputRef: ref,
    ...methods,
    error,
    fieldState: {
      isTouched,
    },
  };
};
