import React, { useEffect } from "react";
import { createContext, useMemo, useContext } from "react";
import { FormProvider, useForm, useFormContext } from "react-hook-form";
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
  id: string
};

export const ThemeContext = createContext<TTemplateContext>({ id : '', debug: false, inputTemplate: null, buttonTemplate: null, elements: {} });

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
    delayError: props.delayError ?? undefined
  });

  const inputWrapper = useMemo(() => props.inputWrapper ?? null, []);
  const buttonTemplate = useMemo(() => props.buttonWrapper ?? null, []);
  const elements = useMemo(() => props.elements ?? {}, []);

  const handleSubmit = (data: any, event: any) => new Promise((resolve, reject) => {
    console.log('HandleSubmit', data, event)
    event.preventDefault();
    event.stopPropagation();
    props.onSubmit(data, event).then(resolve)
  });

  return (
    <ThemeContext.Provider
      value={{
        id: formID,
        inputTemplate: inputWrapper,
        buttonTemplate: buttonTemplate,
        elements: elements,
        debug: props.debug ?? false,
      }}
    > 
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(handleSubmit, props.onInvalid)} id={formID}>
          {props.children}
        </form>
      </FormProvider> 
    </ThemeContext.Provider>
  );
};

export const SubmitButton = (props: ISubmitButton) => {
  // const { handleSubmit } = useFormContext()
  const {buttonTemplate: Wrapper, id} = useContext(ThemeContext);

  console.log("SubmitButton - id ",id)

  return Wrapper === null ? (
    <button type="submit" form={id} className={`${props.buttonClass ?? ""}`}>
      {props.label ?? props.children ?? ""}
    </button>
  ) : (
    <Wrapper {...props} />
  );
};
