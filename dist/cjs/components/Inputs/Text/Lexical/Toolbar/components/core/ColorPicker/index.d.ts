/// <reference types="react" />
interface IColorPicker {
    selectedColor?: string;
    onColorChanged: (color: string) => void;
}
declare const ColorPicker: (props: IColorPicker) => JSX.Element;
export default ColorPicker;
