import { FormBaseInput } from './base';
export interface ISlider extends FormBaseInput<String | Number> {
    min?: number;
    max?: number;
    steps: number | string[] | {
        value: any;
        label: string | number;
    }[];
}
