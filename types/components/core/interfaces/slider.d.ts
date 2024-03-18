import { IInputsBaseProps } from './base';
export interface ISlider extends IInputsBaseProps<string | number> {
    min?: number;
    max?: number;
    steps?: number | string;
    sliderOptions?: TReactSliderProps;
}
type TReactSliderProps = {
    id?: string;
    min: string;
    max: string;
    step?: string | number;
    onThumbDragStart?: () => void;
    onThumbDragEnd?: () => void;
    onRangeDragStart?: () => void;
    onRangeDragEnd?: () => void;
    rangeSlideDisabled?: boolean;
    thumbsDisabled?: [boolean, boolean];
    orientation?: 'horizontal' | 'vertical';
};
export {};
