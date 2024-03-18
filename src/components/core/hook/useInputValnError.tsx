import { useMemo } from "react";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import Logger from "../Logger/index";

export const useInputValAndError = <T = any,>(name: string) => {
  Logger.info(`Name : ${name}`, "useInputValAndError", "start");
  const { control, ...methods } = useFormContext();
  Logger.info(`All Values : `, JSON.stringify(methods.getValues()));

  const value: T = useWatch({ name: name, defaultValue: null }); /* ?? null */
  Logger.info(`Value : ${String(value)}`, "useInputValAndError");

  // const _methods = useMemo(() => methods, []);

  const { errors, isLoading, isValid, disabled, isSubmitSuccessful, isSubmitted, isSubmitting, isValidating, submitCount } = useFormState();
  const error = useMemo(() => errors[name] ?? null, [errors?.[name]?.message, value]);
  // const isDirty = useMemo(()=> dirtyFields[name] ?? null, [dirtyFields?.[name]])

  Logger.info(`Error : ${error?.message}`, "useInputValAndError");
  Logger.info(null, null, "end");

  return {
    value: value,
    error,
    ...methods,
    formState: {
      isLoading,
      isValid,
      disabled,
      isSubmitSuccessful,
      isSubmitted,
      isSubmitting,
      isValidating,
      submitCount,
    },
  };
};
