import { ValidationMode, Resolver, DeepPartial, FieldValues, FieldError, CriteriaMode } from 'react-hook-form/dist/types';

export 
interface IForm<T extends FieldValues> {
  inputWrapper ?: React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>,
  style ?: 'bootstrap' | 'mui'
  id ?:string
  defaultValues ?: DeepPartial<T>, 
  resetOnComplete ?: boolean,
  onSubmit : (data: T) => Promise<any>,
  children : JSX.Element[] | JSX.Element
  mode ?: keyof ValidationMode,
  reValidateMode ?: "onBlur" | "onChange" | "onSubmit",
  resolver ?: Resolver<T,any>, 
  context ?: any,
  criteriaMode?: CriteriaMode,
  shouldFocusError ?: boolean,
  shouldUnregister ?: boolean,
  shouldUseNativeValidation?: boolean,
  delayError?: number,  
}

export interface FormFrameWrapperProps  {
  errors ?: FieldError,
  name: string, 
  helperText ?: string
  label ?: string,
  children : JSX.Element,

  reversedLabel ?: boolean,
  noBorder ?: boolean,
  noLabel ?: boolean,

  placeholder ?: string,
  
  customClasses ?: FormInputClassNames,
}

export interface IFormFrameInjector extends FormFrameWrapperProps {
  value : any, 
  onChange : (e:any) => any, 
  onBlur : (e:any) => any, 
  isTouched : boolean, 
  isDirty : boolean, 
  error : any, 
  ref : any
}

export type FormInputClassNames = {
  wrapperClassName ?:string,
  labelClassName ?: string,
  inputClassName ?: string
}

/* INPUTS */

export interface FormBaseInput<T = any> {
  name : string,
  id ?: string,

  customClasses ?: FormInputClassNames,
  reversedLabel ?: boolean, 

  helperText ?: string
  label ?: string,
  placeholder ?: string,

  noBorder ?: boolean,
  noLabel ?: boolean,

  calculatedField ?: {
    find : string[],
    calculate : (this : T, foundFields : any[], allFields: any ) => T
  },
  children ?: Function,
  validation ?: {
    required ?: boolean | string,
    max ?: {value: number, message ?: string},
    maxLength ?: {value: number, message ?: string},
    min ?: {value: number, message ?: string},
    minLength ?: {value: number, message ?: string},
  }
}

export interface LineInputProps extends FormBaseInput<String> {
  type ?: HTMLInputTypeAttribute
}

export interface LinesInputProps extends FormBaseInput<String> {
  rows ?: number,
  cols ?: number
}

export interface WYSIWYGProps extends FormBaseInput<String> {}
export interface ICheckbox extends FormBaseInput<String> {}
export interface ICheckboxes { 
  title?:string, 
  orientation ?:'horizontal'|'vertical', 
  children : React.ReactElement | React.ReactElement[] 
}

type HTMLInputTypeAttribute =
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