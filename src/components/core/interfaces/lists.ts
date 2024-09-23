import React from "react";
import { IInputsBaseProps } from "./base";
import { HTMLInputTypeAttribute } from "./base";
import { ICheckbox, ICheckboxes, IRadiobox, ISwitch } from "./boxes";
import { IDatePicker } from "./date";
import { ILines, IWYSIWYG } from "./line";
import { ISelect, ISelectAsync } from "./selectInputs";
import { IDropzoneUploader } from "./uploads";

export type TListAttr = { grid?: number };
export type TListType = { type?: TListInputs };
export type TCustomElem = { elem: React.FunctionComponent };

// export type TListItemsGeneral = IInputsBaseProps & TListAttr & HTMLInputTypeAttribute & {type: any}
// export type TListItemsCustom = IInputsBaseProps & TListAttr & TCustomElem & {type : 'custom'}
// export type TListItemWYSIWYG = IWYSIWYG & TListAttr & {type : 'wysiwyg'}
// export type TListItemDatepicker = IDatePicker & TListAttr & {type : 'datepicker'}
// export type TListItemSelect = ISelect & TListAttr & {type : 'select'}
// export type TListItemLines = ILines & TListAttr & {type : 'textarea'}
// export type TListItemSelectAsync = ISelectAsync & TListAttr & {type : 'select_async'}

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
  // Add other mappings...
};

export type InputType =
  | "dropzone"
  | "switch"
  | "checkbox"
  | "radio"
  | "radiobox"
  | "wysiwyg"
  | "datepicker"
  | "select"
  | "select_async"
  | "textarea"
  | "list"
  | "tablelist";

export type InputChooserProps<T extends InputType> = T extends keyof InputPropsMap ? IInputsBaseProps & InputPropsMap[T] : IInputsBaseProps;

export interface TListItems extends IInputsBaseProps, TListAttr {
  type?: TListInputs;
  [key: string]: any;
}
// export type TListItems =
// | TListItemsCustom
// | TListItemSelect
// | TListItemSelectAsync
// | TListItemWYSIWYG
// | TListItemDatepicker
// | TListItemLines
// | TListItemsGeneral

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
  add_element?: React.FC<{onClick:Function}>;
  elemTable?: React.FC;
  elemTableHead?: React.FC;
  elemTableBody?: React.FC;
  elemTR?: React.FC;
  elemTH?: React.FC;
  elemTD?: React.FC;
  iconAdd ?: React.FC;
  iconRemove ?: React.FC;
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
    addButtonWrapper?: React.Component<{ children: any }>;
    tableActionsWrapper?: React.Component<{ children: any }>;
  };
}

export type TMadeInputList =
  | "wysiwyg"
  | "datepicker"
  | "select"
  | "select_async"
  | "textarea"
  | "custom"
  | "switch"
  | "yesno"
  | "dropzone"
  | "list"
  | "tablelist";

export type TListInputs = HTMLInputTypeAttribute | TMadeInputList | string;
