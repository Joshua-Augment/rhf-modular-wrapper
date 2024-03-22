import React from 'react';
import { FieldValues, DeepPartial, UseFormReturn, UseFormStateReturn, DefaultValues, FieldErrors } from 'react-hook-form';
import { CriteriaMode, ValidationMode, FieldError } from 'react-hook-form';
import { TListInputs } from './lists';
export interface ISubmitButton {label ?: string; children ?: React.ReactNode;buttonClass ?: string; [key:string]: any}

export interface IForm<T extends FieldValues> {
  inputWrapper ?: React.ComponentType<FormFrameWrapperProps>,
  buttonWrapper ?: React.ComponentType<ISubmitButton>,
  elements ?: Record<TListInputs,React.ComponentType<any>>;
  style ?: 'bootstrap' | 'mui'
  debug ?: boolean,
  id ?:string
  defaultValues ?: DefaultValues<T> , 
  resetOnComplete ?: boolean,
  onSubmit : (data: T, event ?: React.BaseSyntheticEvent) => Promise<any>,
  onInvalid ?: (errors: FieldErrors<T>, event?: React.BaseSyntheticEvent) => unknown | Promise<unknown>,
  children : JSX.Element[] | JSX.Element | any
  mode ?: keyof ValidationMode,
  reValidateMode ?: "onBlur" | "onChange" | "onSubmit",
  yupSchema ?: any, 
  context ?: any,
  criteriaMode?: CriteriaMode,
  shouldFocusError ?: boolean,
  shouldUnregister ?: boolean,
  shouldUseNativeValidation?: boolean,
  delayError?: number,  
}

export interface FormFrameWrapperProps<T=any> extends IInputsBaseProps<T>  {
  errors ?: FieldError,
  children : JSX.Element | JSX.Element[] ,
  value : T
}

export interface IFormFrameInjector<T=any> extends FormFrameWrapperProps<T> {
  value : T, 
  onChange : (e:T) => void, 
  onBlur : (e:any) => void, 
  error ?: string|null, 
  ref : any,
  disabled ?:boolean
}

export type FormInputClassNames = {
  wrapperClassName ?:string,
  labelClassName ?: string,
  inputClassName ?: string
}

export type TInputHTMLProps = {
  style ?: React.CSSProperties,
  className ?: string
}

export type TInputWrapperHTML = TInputHTMLProps & {wrapperClass ?: string, wrapperStyle ?: React.CSSProperties}
export type TInputInputHTML = TInputHTMLProps & {inputClass ?: string, inputStyle ?: React.CSSProperties}
export type TInputWrapperInputHTML = TInputWrapperHTML & TInputInputHTML

/* INPUTS */
export interface IInputsBasePropsNoSetters<T=any> {

  buttons ?: {
    wrapper ?: {left ?: JSX.Element, right ?: JSX.Element, all ?: JSX.Element},
    left ?: (value: T, name: string, all: any) => JSX.Element,
    right ?: (value: T, name: string, all: any) => JSX.Element,
  },
  inputWrapper ?: React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>,
  name : string,
  id ?: string,

  element ?: React.ComponentType<IInputsBasePropsNoSetters<any>>,

  empty ?: T,
  defaultValue ?: T,

  disableController ?: boolean,
  disabled ?: boolean,

  customClasses ?: FormInputClassNames,
  style ?: React.CSSProperties

  label ?: string | React.ReactNode,
  reversedLabel ?: boolean, 
  helperText ?: string
  placeholder ?: string,

  noBorder ?: boolean,
  noLabel ?: boolean,
  
  value ?: any,
  onChange ?: (a:any) => void,

  shouldValidateOnChange ?: boolean,
  shouldDirtyOnChange ?: boolean,

  fields ?: any,
  type ?: string,
  [key: string]: any,
  [key :number]: any,
}
export interface IInputsBaseProps<T=any> extends IInputsBasePropsNoSetters<T> {
  calculatedField ?: isCalculatedNoPromise<T> | isCalculatedPromise<T> ,
  externalStateSetter ?: (a: T) => void,
  onInputChange ?: (a:T, name: string, all: any, formMethods: UseFormReturn<FieldValues, any>) => void
  
}

type isCalculatedNoPromise<T> = {  
  find : string[],     
  isPromise ?: false,
  calculate : (thisValue : T, thisName: string, foundFields : any[], allFields: any ) => T,
}
type isCalculatedPromise<T> = {
  find : string[],   
  isPromise : true,
  calculate : (thisValue : T, thisName: string, foundFields : any[], allFields: any ) => Promise<T>,
}
export interface FormBaseInput<T = any> extends IInputsBaseProps<T> {  
}

export interface CustomElementBaseInput<T=any> extends Omit<UseFormReturn,'formState'>,IInputsBaseProps<T> {
  type : string,
  formState: {
    isLoading: boolean,
    isSubmitSuccessful: boolean,
    isSubmitted: boolean
    isSubmitting: boolean
    submitCount: number
  },  
  value : T,
  onChange : (value : T) => void,
  error ?: FieldError,
}


export type HTMLInputTypeAttribute =
| 'button'
| 'checkbox'
| 'color'
| 'date'
| 'datetime-local'
| 'email'
| 'file'
| 'hidden'
| 'image'
| 'month'
| 'number'
| 'password'
| 'radio'
| 'range'
| 'reset'
| 'search'
| 'submit'
| 'tel'
| 'text'
| 'time'
| 'url'
| 'week'
| (string & {});