import React from 'react';
import { FieldValues, DeepPartial, UseFormReturn } from 'react-hook-form/dist/types';
import { CriteriaMode, ValidationMode, FieldError } from 'react-hook-form/dist/types';
import { TListInputs } from './lists';
export interface ISubmitButton {label ?: string; children ?: React.ReactNode;buttonClass ?: string; }

export interface IForm<T extends FieldValues> {
  inputWrapper ?: React.ComponentType<FormFrameWrapperProps>,
  buttonWrapper ?: React.ComponentType<ISubmitButton>,
  elements ?: { [key in TListInputs] ?: React.ComponentType<IInputsBasePropsNoSetters<any>>}
  style ?: 'bootstrap' | 'mui'
  id ?:string
  defaultValues ?: DeepPartial<T>, 
  resetOnComplete ?: boolean,
  onSubmit : (data: T, event ?: React.BaseSyntheticEvent) => Promise<any>,
  children : JSX.Element[] | JSX.Element
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
  // onChange : Function,
  value : T
  // defaultValue ?: T
}

export interface IFormFrameInjector<T=any> extends FormFrameWrapperProps<T> {
  value : T, 
  onChange : (e:T) => void, 
  onBlur : (e:any) => any, 
  isTouched : boolean, 
  isDirty : boolean, 
  error : any, 
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
    // left ?: {label: React.ReactNode, onClick: (value: T, name: string, all: any) => void, customButton ?: JSX.Element}[],
    // right ?: {label: React.ReactNode, onClick: (value: T, name: string, all: any) => void, customButton ?: JSX.Element}[],
  },
  inputWrapper ?: React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>,
  name : string,
  id ?: string,

  element ?: React.ComponentType<IInputsBasePropsNoSetters<any>>,

  defaultValue ?: T,

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
  children ?: any
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