import React, {lazy, createContext, useMemo} from 'react'
import { FormProvider, useForm } from 'react-hook-form';
import {FieldValues} from "react-hook-form/dist/types"
import { FormFrameWrapperProps, IForm } from './interfaces';

import "../styling/core.css"

export const ThemeContext = createContext<null|React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>>(null)

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
    <ThemeContext.Provider value={props.inputWrapper ?? null} >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(
              (data:T) => props.onSubmit(data).then(() => {if(props.resetOnComplete) {methods.reset()}}),
              () => {if(props.resetOnComplete) {methods.reset()}}
            )}
          id={formID}>
          {props.children}
        </form>
      </FormProvider>
    </ThemeContext.Provider>
  </ChosenTheme>
  )
}
