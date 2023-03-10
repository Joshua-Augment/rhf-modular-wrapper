import React, {lazy, createContext, useMemo, useContext} from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import {FieldValues} from "react-hook-form/dist/types"
import { FormFrameWrapperProps, IForm, ISubmitButton } from './interfaces';

import "../styling/core.css"

type TTemplateContext = {
  inputTemplate : null|React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>,
  buttonTemplate : null|React.ComponentType<ISubmitButton> | React.ComponentType<any>,
}

export const ThemeContext = createContext<TTemplateContext>({inputTemplate: null, buttonTemplate: null})

const BSTheme = lazy(()=>import('../styling/BootstrapTheme'))
const MUITheme = lazy(()=>import('../styling/MUITheme'))

const ChosenTheme = ({children,style}:{children:any, style?:'bootstrap' | 'mui'}) => {
  return (
    <>
      <React.Suspense fallback={<></>}>
        {(style === undefined || style == 'bootstrap') && <BSTheme />}
        {(style === 'mui') && <MUITheme />}
      </React.Suspense>
      {children}
    </>
  )
}

export const Form = <T extends FieldValues,>(props: IForm<T>) => {
  const formID = useMemo(()=> props.id ?? `rhf-wc-f-${new Date().getTime()}`,[])
  const methods = useForm<T,any>({
    mode: props.mode ?? "onChange",
    reValidateMode: props.reValidateMode ?? 'onChange',
    defaultValues: props.defaultValues,
    resolver: props.resolver,
    context: props.context,
    criteriaMode: props.criteriaMode ?? "firstError",
    shouldFocusError: props.shouldFocusError ?? true,
    shouldUnregister: props.shouldUnregister ?? false,
    shouldUseNativeValidation: props.shouldUseNativeValidation ?? false,
    delayError: props.delayError ?? undefined
  });
  
  return (
  <ChosenTheme style={props.style}>
    <ThemeContext.Provider value={{inputTemplate:props.inputWrapper ?? null, buttonTemplate: props.buttonWrapper ?? null}} >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(props.onSubmit)}
          id={formID}>
          {props.children}
        </form>
      </FormProvider>
    </ThemeContext.Provider>
  </ChosenTheme>
  )
}


export const SubmitButton = (props: ISubmitButton) => {
  
  const Wrapper = useContext(ThemeContext).buttonTemplate

  return Wrapper === null ? 
    <button type="submit" className={`${props.buttonClass ?? ''}`}>{props.label ?? props.children ?? ''}</button> : 
    <Wrapper {...props} />
}
