/// <reference types="react" />
import { FieldValues, DeepPartial } from 'react-hook-form/dist/types';
import { CriteriaMode, ValidationMode, FieldError } from 'react-hook-form/dist/types';
export interface ISubmitButton {
    label?: string;
    children?: React.ReactNode;
    buttonClass?: string;
}
export interface IForm<T extends FieldValues> {
    inputWrapper?: React.ComponentType<FormFrameWrapperProps>;
    buttonWrapper?: React.ComponentType<ISubmitButton>;
    style?: 'bootstrap' | 'mui';
    id?: string;
    defaultValues?: DeepPartial<T>;
    resetOnComplete?: boolean;
    onSubmit: (data: T) => Promise<any>;
    children: JSX.Element[] | JSX.Element;
    mode?: keyof ValidationMode;
    reValidateMode?: "onBlur" | "onChange" | "onSubmit";
    yupSchema?: any;
    context?: any;
    criteriaMode?: CriteriaMode;
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
    shouldUseNativeValidation?: boolean;
    delayError?: number;
}
export interface FormFrameWrapperProps<T = any> extends IInputsBaseProps<T> {
    errors?: FieldError;
    children: JSX.Element;
    value: T;
}
export interface IFormFrameInjector<T = any> extends FormFrameWrapperProps<T> {
    value: T;
    onChange: (e: T) => void;
    onBlur: (e: any) => any;
    isTouched: boolean;
    isDirty: boolean;
    error: any;
    ref: any;
    disabled?: boolean;
}
export type FormInputClassNames = {
    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
};
export type TInputHTMLProps = {
    style?: React.CSSProperties;
    className?: string;
};
export type TInputWrapperHTML = TInputHTMLProps & {
    wrapperClass?: string;
    wrapperStyle?: React.CSSProperties;
};
export type TInputInputHTML = TInputHTMLProps & {
    inputClass?: string;
    inputStyle?: React.CSSProperties;
};
export type TInputWrapperInputHTML = TInputWrapperHTML & TInputInputHTML;
export interface IInputsBaseProps<T = any> {
    buttons?: {
        wrapper?: {
            left?: JSX.Element;
            right?: JSX.Element;
            all?: JSX.Element;
        };
        left?: {
            label: string;
            onClick: (value: T) => void;
            customButton?: JSX.Element;
        }[];
        right?: {
            label: string;
            onClick: (value: T) => void;
            customButton?: JSX.Element;
        }[];
    };
    inputWrapper?: React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>;
    name: string;
    id?: string;
    defaultValue?: T;
    disabled?: boolean;
    customClasses?: FormInputClassNames;
    style?: React.CSSProperties;
    reversedLabel?: boolean;
    side?: boolean;
    externalStateSetter?: (a: T) => void;
    helperText?: string;
    label?: string;
    placeholder?: string;
    noBorder?: boolean;
    noLabel?: boolean;
    calculatedField?: {
        find: string[];
        calculate: (thisValue: T, foundFields: any[], allFields: any) => T;
    };
    value?: any;
    onChange?: (a: any) => void;
    [key: string]: any;
    [key: number]: any;
}
export interface FormBaseInput<T = any> extends IInputsBaseProps<T> {
    children?: any;
}
export type HTMLInputTypeAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});
