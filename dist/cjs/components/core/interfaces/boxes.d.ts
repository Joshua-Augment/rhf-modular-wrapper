/// <reference types="react" />
import { FormBaseInput, IInputsBaseProps, TInputWrapperInputHTML } from './base';
export interface ICheckbox extends FormBaseInput<string> {
}
export interface IRadiobox extends IInputsBaseProps<string> {
    orientation?: 'horizontal' | 'vertical';
    options: {
        value: any;
        label: string;
        reversed?: boolean;
    }[];
}
export interface ICheckboxes {
    title?: string;
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactElement | React.ReactElement[];
}
type YesNoButtonOptions = {
    label?: string;
    value?: any;
    element?: React.ReactNode;
    extHandler?: (value: any) => Promise<boolean>;
    color?: string;
};
export interface IYesNo extends IInputsBaseProps<any>, TInputWrapperInputHTML {
    yes?: YesNoButtonOptions;
    no?: YesNoButtonOptions;
    otherOptions?: YesNoButtonOptions[];
}
export {};
