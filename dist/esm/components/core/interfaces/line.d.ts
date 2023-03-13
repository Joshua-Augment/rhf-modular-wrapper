import { HTMLInputTypeAttribute } from './../interfaces';
import { FormBaseInput } from './base';
export interface LineInputProps extends FormBaseInput<String> {
    type?: HTMLInputTypeAttribute;
}
export interface ILines extends FormBaseInput<String> {
    theme?: any;
    rows?: number;
    cols?: number;
}
export interface IWYSIWYG extends FormBaseInput<String> {
}
