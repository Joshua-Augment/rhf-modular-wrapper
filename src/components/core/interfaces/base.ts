import { FieldValues, DeepPartial } from 'react-hook-form/dist/types';
import { CriteriaMode, Resolver, ValidationMode, FieldError } from 'react-hook-form/dist/types';
export interface ISubmitButton {label ?: string; children ?: React.ReactNode;buttonClass ?: string; }

export interface IForm<T extends FieldValues> {
  inputWrapper ?: React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>,
  buttonWrapper ?: React.ComponentType<ISubmitButton> | React.ComponentType<ISubmitButton>,
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

export interface FormFrameWrapperProps<T=any> extends IInputsBaseProps<T>  {
  errors ?: FieldError,
  children : JSX.Element,
  onChange : Function,
  value : any
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

/* INPUTS */
export interface IInputsBaseProps<T=any> {
  
  contextless ?:boolean,
  inputWrapper ?: React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>,
  name : string,
  id ?: string,

  disabled ?: boolean,

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
  validation ?: {
    required ?: boolean | string,
    max ?: {value: number, message ?: string},
    maxLength ?: {value: number, message ?: string},
    min ?: {value: number, message ?: string},
    minLength ?: {value: number, message ?: string},
  }
  
}
export interface FormBaseInput<T = any> extends IInputsBaseProps<T> {  
  children ?: Function
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