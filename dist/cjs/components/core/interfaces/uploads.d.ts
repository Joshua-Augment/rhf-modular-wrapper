import { Uppy } from '@uppy/core';
import { FormBaseInput, IFormFrameInjector } from './base';
export interface IBaseUppy extends FormBaseInput<String[]> {
    endpoint: string;
    metadata?: any;
}
export interface IUppyUploader extends IBaseUppy {
}
export interface IUppyDD extends IBaseUppy {
}
export interface IBaseUppyInjector extends IFormFrameInjector {
    uppy: Uppy;
}
export interface IDropzoneUploader extends FormBaseInput<File[]> {
    accept?: {
        [key: string]: string[];
    };
    showList?: boolean;
    previewType?: 'list';
}
