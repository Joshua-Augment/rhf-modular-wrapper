import React from "react";
export interface IDropDownButton {
    selected?: string;
    centered?: boolean;
    options: {
        id: string;
        item: React.ReactNode;
        clickHandler: (...args: any) => void;
    }[];
}
declare const DropdownButton: (props: IDropDownButton) => JSX.Element;
export default DropdownButton;
