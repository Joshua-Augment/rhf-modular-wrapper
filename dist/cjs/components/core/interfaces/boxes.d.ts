/// <reference types="react" />
import { FormBaseInput } from './base';
export interface ICheckbox extends FormBaseInput<String> {
}
export interface IRadiobox extends FormBaseInput<String> {
    value: string;
}
export interface ICheckboxes {
    title?: string;
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactElement | React.ReactElement[];
}
