import React from "react";
interface IFontColorDropDown {
    color: string;
    icon?: React.ReactNode;
    type: string;
    updater: any;
}
declare const FontColorDropDown: (props: IFontColorDropDown) => JSX.Element;
export default FontColorDropDown;
