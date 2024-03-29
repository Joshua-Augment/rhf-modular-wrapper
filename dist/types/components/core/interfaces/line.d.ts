import { ReactQuillProps } from 'react-quill';
import { HTMLInputTypeAttribute } from './../interfaces/index';
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
    quillProps?: ReactQuillProps;
}
export interface IWYSIWYG extends FormBaseInput<string> {
}
