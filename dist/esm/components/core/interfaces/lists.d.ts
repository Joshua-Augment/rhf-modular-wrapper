/// <reference types="react" />
import { IInputsBaseProps } from './base';
import { HTMLInputTypeAttribute } from './base';
export type TListAttr = {
    grid?: number;
};
export type TListType = {
    type?: TListInputs;
};
export type TCustomElem = {
    elem: React.FunctionComponent;
};
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
    bodyTemplate?: (props: IList) => React.ReactElement;
}
export interface ITableList extends IBaseList {
    header?: 'none' | 'top' | 'bottom' | 'both' | 'footer' | 'header_footer';
    headerTemplate?: React.ReactNode;
    footerTemplate?: React.ReactNode;
}
export interface IInputToTableList extends ITableList {
    children?: any;
    inputName: string;
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
export type TMadeInputList = "wysiwyg" | "datepicker" | "select" | "select_async" | "textarea" | "custom" | "switch" | "yesno" | "dropzone";
export type TListInputs = HTMLInputTypeAttribute | TMadeInputList;
