import React from "react";
import { IInputsBaseProps } from "./base";
import { HTMLInputTypeAttribute } from "./base";
import { ICheckbox, IRadiobox, ISwitch } from "./boxes";
import { IDatePicker } from "./date";
import { ILines, IWYSIWYG } from "./line";
import { ISelect, ISelectAsync } from "./selectInputs";
import { IDropzoneUploader } from "./uploads";
export type TListAttr = {
    grid?: number;
};
export type TListType = {
    type?: TListInputs;
};
export type TCustomElem = {
    elem: React.FunctionComponent;
};
export type InputPropsMap = {
    dropzone: IDropzoneUploader;
    switch: ISwitch;
    checkbox: ICheckbox;
    radio: IRadiobox;
    radiobox: IRadiobox;
    wysiwyg: IWYSIWYG;
    datepicker: IDatePicker;
    select: ISelect;
    select_async: ISelectAsync;
    textarea: ILines;
    list: IList;
    tablelist: ITableList;
};
export type InputType = "dropzone" | "switch" | "checkbox" | "radio" | "radiobox" | "wysiwyg" | "datepicker" | "select" | "select_async" | "textarea" | "list" | "tablelist";
export type InputChooserProps<T extends InputType> = T extends keyof InputPropsMap ? IInputsBaseProps & InputPropsMap[T] : IInputsBaseProps;
export interface TListItems extends IInputsBaseProps, TListAttr {
    type?: TListInputs;
    [key: string]: any;
}
export interface IBaseList extends IInputsBaseProps<any> {
    withHeader?: boolean;
    emptyRow?: any;
    showIndex?: boolean;
    fixed?: boolean;
    items: TListItems[];
    maxItems?: number;
}
export interface IList extends IBaseList {
    bodyTemplate?: (props: IList) => React.ReactElement | Element | any;
}
export interface ITableList extends IBaseList {
    add_element?: React.FC<{
        onClick: Function;
    }>;
    elemTable?: React.FC;
    elemTableHead?: React.FC;
    elemTableBody?: React.FC;
    elemTR?: React.FC;
    elemTH?: React.FC;
    elemTD?: React.FC;
    iconAdd?: React.FC;
    iconRemove?: React.FC;
    header?: "none" | "top" | "bottom" | "both" | "footer" | "header_footer";
    headerTemplate?: (props: ITableList, items: Record<string, any>) => React.ReactNode;
    footerTemplate?: (props: ITableList, items: Record<string, any>) => React.ReactNode;
}
export interface IInputToTableList extends ITableList {
    children?: any;
    inputName: string;
    inputsSchema?: any;
    editingCaption?: string;
    tableButtons?: {
        add?: React.Component<any>;
        edit?: React.ReactElement<any>;
        remove?: React.ReactElement<any>;
    };
    tableWrappers?: {
        addButtonWrapper?: React.Component<{
            children: any;
        }>;
        tableActionsWrapper?: React.Component<{
            children: any;
        }>;
    };
}
export type TMadeInputList = "wysiwyg" | "datepicker" | "select" | "select_async" | "textarea" | "custom" | "switch" | "yesno" | "dropzone" | "list" | "tablelist";
export type TListInputs = HTMLInputTypeAttribute | TMadeInputList | string;
