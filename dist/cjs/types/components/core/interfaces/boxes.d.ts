/// <reference types="react" />
import { ReactSwitchProps } from 'react-switch';
import { FormBaseInput, IInputsBaseProps, TInputWrapperInputHTML } from './base';
export type TRadioOption = {
    value: any;
    label: string;
    reversed?: boolean;
};
export interface ICheckbox extends FormBaseInput<string> {
}
export interface IRadiobox extends IInputsBaseProps<string> {
    orientation?: 'horizontal' | 'vertical';
    options: TRadioOption[];
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
export interface ISwitch extends IInputsBaseProps<any>, TInputWrapperInputHTML {
    footLabel?: [a: string, b: string];
    options?: ReactSwitchProps;
}
export {};
