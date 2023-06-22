import { Uppy } from '@uppy/core';
import { FormBaseInput, IFormFrameInjector, IInputsBaseProps } from './base';
export interface IBaseUppy extends FormBaseInput<string[]> {
  endpoint: string,
  metadata?: any
}
export interface IUppyUploader extends IBaseUppy { }
export interface IUppyDD extends IBaseUppy { }
export interface IBaseUppyInjector extends IFormFrameInjector {
  uppy: Uppy
}

export type TDropzonePreview = {
  files: File[],
  moveFile: (currentIndex: number, moveIndex: number, isRelative?: boolean) => void,
  handleDelete: (currentIndex: number) => void,
  showPreview: (currentIndex: number) => void
}

/* DROPZONE */
export interface DropzoneBasic {
  previewType?: 'list' | 'thumbnail-TBA',
  containerCaption?: string,
  accept?: { [key: string]: string[] }
  showList?: boolean,
  newWindow?: boolean,
  previewBox?: React.ComponentType<IDropzoneUploader & TDropzonePreview>
}
// export interface IDropzoneHandler extends IFormFrameInjector<File[]>,DropzoneBasic {}
export interface IDropzoneUploader extends FormBaseInput<File[]>, DropzoneBasic { }

export interface IPDFUploader extends IInputsBaseProps<File[]> {
  newWindow?: boolean
}