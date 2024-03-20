import { useMemo } from "react";
import { useFormContext, useFormState, useWatch } from "react-hook-form";
import Logger from "../Logger/index";

export const useInputValAndError = <T = any,>(name: string, directDefaultValue?: T) => {
  Logger.info(`Name : ${name}`, "useInputValAndError", "start");
  const { control, ...methods } = useFormContext();
  Logger.info(`All Values : ${JSON.stringify(methods.getValues())}`, `useInputValAndError`);

  const { errors, isLoading, isValid, disabled, isSubmitSuccessful, isSubmitted, isSubmitting, isValidating, submitCount, defaultValues } =
    useFormState();
  const value: T = useWatch({ 
    name: name, 
    defaultValue: defaultValues && name in defaultValues ? defaultValues?.[name] : directDefaultValue ?? null 
  }); /* ?? null */
  Logger.info(`Value : ${String(value)}`, "useInputValAndError");

  // const _methods = useMemo(() => methods, []);

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
