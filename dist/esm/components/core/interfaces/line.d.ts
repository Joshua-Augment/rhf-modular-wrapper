import { HTMLInputTypeAttribute } from './../interfaces';
import { FormBaseInput } from './base';
export interface LineInputProps extends FormBaseInput<string> {
    type?: HTMLInputTypeAttribute;
}
export interface ILines extends FormBaseInput<string> {
    theme?: any;
    rows?: number;
    cols?: number;
}
export interface IWYSIWYG extends FormBaseInput<string> {
}
