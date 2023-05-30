import { IInputsBaseProps } from './base';
export interface ISlider extends IInputsBaseProps<String|Number> {
  min?:number,
  max?:number,
  steps ?: number | string
}