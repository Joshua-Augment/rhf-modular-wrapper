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
  const {debug} = useContext(ThemeContext)
  Logger.info(debug, `Name : ${name}`, "useInputValAndError", "start");
  const { control, ...methods } = useFormContext();
  const { isLoading, errors, isSubmitSuccessful, isSubmitted, isSubmitting, submitCount, defaultValues } = useFormState({
    // name: name,
  });
  const value: T = useWatch({
    name: name,
    defaultValue: accessObjectByDottedName(defaultValues ?? {}, name) ?? (directDefaultValue ?? null),
    // defaultValue: defaultValues && name in defaultValues ? defaultValues?.[name] : directDefaultValue ?? null
  }); /* ?? null */
  Logger.info(debug, `Value : ${String(value)}`, "useInputValAndError");
  Logger.info(debug, `Errors : ${JSON.stringify(Logger.nullifyCircular(errors ?? {}))}`, "useInputValAndError");

  // const _methods = useMemo(() => methods, []);

  const error = useMemo(() => accessObjectByDottedName(errors, name), [accessObjectByDottedName(errors, name)?.message, value]);
  // const isDirty = useMemo(()=> dirtyFields[name] ?? null, [dirtyFields?.[name]])
  // Logger.info(`Error : ${error?.message}`, "useInputValAndError");

  Logger.info(debug, null, null, "end");

  return {
    value: value,
    ...methods,
    error,
    formState: {
      isLoading,
      // isValid,
      // disabled,
      isSubmitSuccessful,
      isSubmitted,
      isSubmitting,
      // isValidating,
      submitCount,
    },
  };
};
