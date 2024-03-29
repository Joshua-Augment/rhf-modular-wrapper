import React, { useEffect } from "react";
import { createContext, useMemo, useContext } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FieldValues } from "react-hook-form/dist/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormFrameWrapperProps, IForm, ISubmitButton } from "./interfaces/index";

import "../styling/form_bootstrap.css";

import "../styling/core.css";
import { TListInputs } from "./interfaces/lists";
import Logger from "./Logger";

export type TTemplateContext = {
  inputTemplate: null | React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>;
  buttonTemplate: null | React.ComponentType<ISubmitButton> | React.ComponentType<any>;
  elements: Record<TListInputs, React.ComponentType<any>>;
  debug: boolean;
};

export const ThemeContext = createContext<TTemplateContext>({ debug: false, inputTemplate: null, buttonTemplate: null, elements: {} });

export const Form = <T extends FieldValues>(props: IForm<T>) => {
  const formID = useMemo(() => props.id ?? `rhf-wc-f-${new Date().getTime()}`, []);
  const methods = useForm<T, any>({
    mode: props.mode ?? "onChange",
    reValidateMode: props.reValidateMode ?? "onSubmit",
    defaultValues: props.defaultValues,
    resolver: props.yupSchema ? yupResolver(props.yupSchema) : undefined,
    context: props.context,
    criteriaMode: props.criteriaMode ?? "firstError",
    shouldFocusError: props.shouldFocusError ?? true,
    shouldUnregister: props.shouldUnregister ?? true,
    shouldUseNativeValidation: props.shouldUseNativeValidation ?? false,
    delayError: props.delayError ?? undefined,

  });

  const inputWrapper = useMemo(() => props.inputWrapper ?? null, []);
  const buttonTemplate = useMemo(() => props.buttonWrapper ?? null, []);
  const elements = useMemo(() => props.elements ?? {}, []);

  return (
    <ThemeContext.Provider
      value={{
        inputTemplate: inputWrapper,
        buttonTemplate: buttonTemplate,
        elements: elements,
        debug: props.debug ?? false,
      }}
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(props.onSubmit, props.onInvalid)} id={formID}>
          {props.children}
        </form>
      </FormProvider>
    </ThemeContext.Provider>
  );
};

export const SubmitButton = (props: ISubmitButton) => {
  const Wrapper = useContext(ThemeContext).buttonTemplate;

  return Wrapper === null ? (
    <button type="submit" className={`${props.buttonClass ?? ""}`}>
      {props.label ?? props.children ?? ""}
    </button>
  ) : (
    <Wrapper {...props} />
  );
};
