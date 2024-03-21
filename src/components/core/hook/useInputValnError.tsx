import { useContext, useMemo } from "react";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
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
  const { isLoading, errors, isSubmitSuccessful, isSubmitted, isSubmitting, submitCount, defaultValues } = useFormState({
    name,
    exact: true,
  });

  const defaultValue = accessObjectByDottedName(defaultValues ?? {}, name) ?? directDefaultValue ?? null
  // Logger.info(
  //   debug,
  //   `isLoading : ${isLoading ? "true" : "false"} | 
  // isSubmitted : ${isSubmitting ? "true" : "false"} | 
  // isSubmitSuccessful : ${isSubmitSuccessful ? "true" : "false"} |
  // isSubmitted : ${isSubmitted ? "true" : "false"} |
  // submitCount : ${submitCount} |
  // errors : ${JSON.stringify(errors)} |
  // defaultValues : ${JSON.stringify(defaultValues)} |
  // Value for this field : ${typeof defaultValue === 'object'? JSON.stringify(defaultValue) : defaultValue === null ? 'null' : defaultValue}}
  // `,
  //   "useInputValAndError"
  // );
  const value: T = useWatch({
    name: name,
    defaultValue: defaultValue,
  });

  Logger.info(debug, `Value : ${String(value)}`, "useInputValAndError");
  // Logger.info(debug, `Errors : ${JSON.stringify(Logger.nullifyCircular(errors ?? {}))}`, "useInputValAndError");

  const error = useMemo(() => accessObjectByDottedName(errors, name), [accessObjectByDottedName(errors, name)?.message, value]);

  Logger.info(debug, null, null, "end");

  return {
    value: value,
    ...methods,
    error,
    formState: {
      isLoading,
      isSubmitSuccessful,
      isSubmitted,
      isSubmitting,
      submitCount,
    },
  };
};
