/// <reference types="react" />
import { LexicalEditor } from "lexical";
import { IDropDownButton } from "../DropdownButton";
interface IStyleDropDown extends IDropDownButton {
    editor: LexicalEditor;
    value?: string;
    style: string;
    disabled?: boolean;
}
declare const StyleDropDown: (props: IStyleDropDown) => JSX.Element;
export default StyleDropDown;
