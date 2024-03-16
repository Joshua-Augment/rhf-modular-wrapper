/// <reference types="react" />
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactSwitchProps } from 'react-switch';
import * as React$1 from 'react';
import React__default, { RefAttributes } from 'react';
import { FieldValues, DeepPartial, ValidationMode, CriteriaMode, FieldError, UseFormReturn } from 'react-hook-form/dist/types';
import { ReactQuillProps } from 'react-quill';
import { Uppy } from '@uppy/core';
import { StylesConfig, GroupBase, Props } from 'react-select';
import { AsyncProps } from 'react-select/async';
import { AsyncCreatableProps } from 'react-select/async-creatable';
import { CreatableProps } from 'react-select/creatable';

type TSelectOption = {
    label: string | number;
    value: any;
    [key: string | number]: any;
};
type TRSStyles = StylesConfig<any, any, GroupBase<TSelectOption>>;
type TSelectGroup = {
    label: string;
    value: TSelectOption;
};
type RSOptionsAsync = {
    loadOptions: (input: string, callback: (options: TSelectOption[]) => void) => void;
    allLoad?: (input: string, name: string, all: any, callback: (options: TSelectOption[]) => void) => void;
    defaultOptions?: boolean;
    cachedOptions?: boolean;
};
type RSOptionsCreatable = {};
type RSBaseOptions<Option = any, IsMulti extends boolean = any, Group extends GroupBase<Option> = any> = Props<Option, IsMulti, Group>;
type RSAsyncOptions<Option = any, IsMulti extends boolean = any, Group extends GroupBase<Option> = any> = AsyncProps<Option, IsMulti, Group> & RefAttributes<RSBaseOptions<Option, IsMulti, Group>>;
type RSCreatableAsyncOptions<Option = any, IsMulti extends boolean = any, Group extends GroupBase<Option> = any> = AsyncCreatableProps<Option, IsMulti, Group> & RefAttributes<RSBaseOptions<Option, IsMulti, Group>>;
type RSCreatableOptions<Option = any, IsMulti extends boolean = any, Group extends GroupBase<Option> = any> = CreatableProps<Option, IsMulti, Group> & RefAttributes<RSBaseOptions<Option, IsMulti, Group>>;
type RSOptionsBase = {
    isMulti?: boolean;
    isSearchable?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    isClearable?: boolean;
    hideSelectedOptions?: boolean;
    menuIsOpen?: boolean;
    placeholder?: string;
    styles?: TRSStyles;
    [key: string]: any;
};
interface _BaseSelect extends Partial<Props> {
}
interface BaseSelect extends IInputsBaseProps<TSelectOption | null>, Partial<Omit<Props, 'name' | 'onChange' | 'onInputChange' | 'placeholder' | 'defaultValue' | 'value' | 'options'>> {
    isCreatable?: true | ((createdString: string) => Promise<TSelectOption>);
    rsOptions?: RSBaseOptions;
    omitOptions?: (TSelectOption | string | number)[];
}
type BaseSelectNotCreatable = {
    isCreatable?: false;
    rsOptions: RSBaseOptions;
};
interface IOptionsSelectNotAsync {
    options: TSelectOption[];
}
interface IOptionsSelectAsync {
    options?: TSelectOption[];
}
interface ISelect extends BaseSelect, IOptionsSelectNotAsync {
}
interface ISelectCreatable extends BaseSelect, RSOptionsCreatable, IOptionsSelectNotAsync {
}
interface ISelectAsync extends BaseSelect, RSOptionsAsync, IOptionsSelectAsync {
}

type TListAttr = {
    grid?: number;
};
interface TListItems extends IInputsBaseProps, TListAttr {
    type?: TListInputs;
    [key: string]: any;
}
interface IBaseList extends IInputsBaseProps<any> {
    withHeader?: boolean;
    emptyRow?: any;
    showIndex?: boolean;
    fixed?: boolean;
    items: TListItems[];
    maxItems?: number;
}
interface IList extends IBaseList {
    bodyTemplate?: (props: IList) => React.ReactElement | Element | any;
}
interface ITableList extends IBaseList {
    header?: 'none' | 'top' | 'bottom' | 'both' | 'footer' | 'header_footer';
    headerTemplate?: React.ReactNode;
    footerTemplate?: React.ReactNode;
}
interface IInputToTableList extends ITableList {
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
type TMadeInputList = "wysiwyg" | "datepicker" | "select" | "select_async" | "textarea" | "custom" | "switch" | "yesno" | "dropzone" | "list" | "tablelist";
type TListInputs = HTMLInputTypeAttribute | TMadeInputList | string;

interface ISubmitButton {
    label?: string;
    children?: React__default.ReactNode;
    buttonClass?: string;
}
interface IForm<T extends FieldValues> {
    inputWrapper?: React__default.ComponentType<FormFrameWrapperProps>;
    buttonWrapper?: React__default.ComponentType<ISubmitButton>;
    elements?: Record<TListInputs, React__default.ComponentType<any>>;
    style?: 'bootstrap' | 'mui';
    debug?: boolean;
    id?: string;
    defaultValues?: DeepPartial<T>;
    resetOnComplete?: boolean;
    onSubmit: (data: T, event?: React__default.BaseSyntheticEvent) => Promise<any>;
    children: JSX.Element[] | JSX.Element;
    mode?: keyof ValidationMode;
    reValidateMode?: "onBlur" | "onChange" | "onSubmit";
    yupSchema?: any;
    context?: any;
    criteriaMode?: CriteriaMode;
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
    shouldUseNativeValidation?: boolean;
    delayError?: number;
}
interface FormFrameWrapperProps<T = any> extends IInputsBaseProps<T> {
    errors?: FieldError;
    children: JSX.Element | JSX.Element[];
    value: T;
}
interface IFormFrameInjector<T = any> extends FormFrameWrapperProps<T> {
    value: T;
    onChange: (e: T) => void;
    onBlur: (e: any) => void;
    error?: string | null;
    ref: any;
    disabled?: boolean;
}
type FormInputClassNames = {
    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
};
type TInputHTMLProps = {
    style?: React__default.CSSProperties;
    className?: string;
};
type TInputWrapperHTML = TInputHTMLProps & {
    wrapperClass?: string;
    wrapperStyle?: React__default.CSSProperties;
};
type TInputInputHTML = TInputHTMLProps & {
    inputClass?: string;
    inputStyle?: React__default.CSSProperties;
};
type TInputWrapperInputHTML = TInputWrapperHTML & TInputInputHTML;
interface IInputsBasePropsNoSetters<T = any> {
    buttons?: {
        wrapper?: {
            left?: JSX.Element;
            right?: JSX.Element;
            all?: JSX.Element;
        };
        left?: (value: T, name: string, all: any) => JSX.Element;
        right?: (value: T, name: string, all: any) => JSX.Element;
    };
    inputWrapper?: React__default.ComponentType<FormFrameWrapperProps> | React__default.ComponentType<any>;
    name: string;
    id?: string;
    element?: React__default.ComponentType<IInputsBasePropsNoSetters<any>>;
    defaultValue?: T;
    disabled?: boolean;
    customClasses?: FormInputClassNames;
    style?: React__default.CSSProperties;
    label?: string | React__default.ReactNode;
    reversedLabel?: boolean;
    helperText?: string;
    placeholder?: string;
    noBorder?: boolean;
    noLabel?: boolean;
    value?: any;
    onChange?: (a: any) => void;
    shouldValidateOnChange?: boolean;
    shouldDirtyOnChange?: boolean;
    fields?: any;
    type?: string;
    [key: string]: any;
    [key: number]: any;
}
interface IInputsBaseProps<T = any> extends IInputsBasePropsNoSetters<T> {
    calculatedField?: isCalculatedNoPromise<T> | isCalculatedPromise<T>;
    externalStateSetter?: (a: T) => void;
    onInputChange?: (a: T, name: string, all: any, formMethods: UseFormReturn<FieldValues, any>) => void;
}
type isCalculatedNoPromise<T> = {
    find: string[];
    isPromise?: false;
    calculate: (thisValue: T, thisName: string, foundFields: any[], allFields: any) => T;
};
type isCalculatedPromise<T> = {
    find: string[];
    isPromise: true;
    calculate: (thisValue: T, thisName: string, foundFields: any[], allFields: any) => Promise<T>;
};
interface FormBaseInput<T = any> extends IInputsBaseProps<T> {
    children?: any;
}
interface CustomElementBaseInput<T = any> extends UseFormReturn, IInputsBaseProps<T> {
    type: string;
    value: T;
    onChange: (value: T) => void;
    error?: FieldError;
}
type HTMLInputTypeAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});

interface IDatePicker extends FormBaseInput<string> {
    options?: IDP_Base;
}
type IDP_Base = {
    adjustDateOnChange?: boolean | undefined;
    allowSameDay?: boolean | undefined;
    ariaDescribedBy?: string | undefined;
    ariaInvalid?: string | undefined;
    ariaLabelClose?: string | undefined;
    ariaLabelledBy?: string | undefined;
    ariaRequired?: string | undefined;
    autoComplete?: string | undefined;
    autoFocus?: boolean | undefined;
    calendarClassName?: string | undefined;
    calendarContainer?(props: any): React.ReactNode;
    calendarStartDay?: number | undefined;
    children?: React.ReactNode | undefined;
    chooseDayAriaLabelPrefix?: string | undefined;
    className?: string | undefined;
    clearButtonClassName?: string | undefined;
    clearButtonTitle?: string | undefined;
    closeOnScroll?: boolean | ((e: Event) => boolean) | undefined;
    customInput?: React.ReactNode | undefined;
    customInputRef?: string | undefined;
    customTimeInput?: React.ReactNode | undefined;
    dateFormat?: string | string[] | undefined;
    dateFormatCalendar?: string | undefined;
    dayClassName?(date: Date): string | null;
    weekDayClassName?(date: Date): string | null;
    monthClassName?(date: Date): string | null;
    timeClassName?(date: Date): string | null;
    disabledDayAriaLabelPrefix?: string | undefined;
    disabled?: boolean | undefined;
    disabledKeyboardNavigation?: boolean | undefined;
    dropdownMode?: 'scroll' | 'select' | undefined;
    endDate?: Date | null | undefined;
    excludeDates?: Date[] | undefined;
    excludeDateIntervals?: Array<{
        start: Date;
        end: Date;
    }> | undefined;
    excludeTimes?: Date[] | undefined;
    filterDate?(date: Date): boolean;
    filterTime?(date: Date): boolean;
    fixedHeight?: boolean | undefined;
    forceShowMonthNavigation?: boolean | undefined;
    formatWeekDay?(formattedDate: string): React.ReactNode;
    formatWeekNumber?(date: Date): string | number;
    highlightDates?: Array<any | Date> | undefined;
    id?: string | undefined;
    includeDates?: Date[] | undefined;
    includeDateIntervals?: Array<{
        start: Date;
        end: Date;
    }> | undefined;
    includeTimes?: Date[] | undefined;
    injectTimes?: Date[] | undefined;
    inline?: boolean | undefined;
    focusSelectedMonth?: boolean | undefined;
    isClearable?: boolean | undefined;
    locale?: string | Locale | undefined;
    maxDate?: Date | null | undefined;
    maxTime?: Date | undefined;
    minDate?: Date | null | undefined;
    minTime?: Date | undefined;
    monthsShown?: number | undefined;
    name?: string | undefined;
    nextMonthAriaLabel?: string | undefined;
    nextMonthButtonLabel?: string | React.ReactNode | undefined;
    nextYearAriaLabel?: string | undefined;
    nextYearButtonLabel?: string | React.ReactNode | undefined;
    onBlur?(event: React.FocusEvent<HTMLInputElement>): void;
    onCalendarClose?(): void;
    onCalendarOpen?(): void;
    onChange?(date: any extends false | undefined ? Date | null : [Date | null, Date | null], event: React.SyntheticEvent<any> | undefined): void;
    onChangeRaw?(event: React.FocusEvent<HTMLInputElement>): void;
    onClickOutside?(event: React.MouseEvent<HTMLDivElement>): void;
    onDayMouseEnter?: ((date: Date) => void) | undefined;
    onFocus?(event: React.FocusEvent<HTMLInputElement>): void;
    onInputClick?(): void;
    onInputError?(err: {
        code: number;
        msg: string;
    }): void;
    onKeyDown?(event: React.KeyboardEvent<HTMLDivElement>): void;
    onMonthChange?(date: Date): void;
    onMonthMouseLeave?: (() => void) | undefined;
    onSelect?(date: Date, event: React.SyntheticEvent<any> | undefined): void;
    onWeekSelect?(firstDayOfWeek: Date, weekNumber: string | number, event: React.SyntheticEvent<any> | undefined): void;
    onYearChange?(date: Date): void;
    open?: boolean | undefined;
    openToDate?: Date | undefined;
    peekNextMonth?: boolean | undefined;
    placeholderText?: string | undefined;
    popperClassName?: string | undefined;
    popperContainer?(props: {
        children: React.ReactNode[];
    }): React.ReactNode;
    popperModifiers?: ReadonlyArray<any> | undefined;
    popperPlacement?: any | undefined;
    popperProps?: {} | undefined;
    preventOpenOnFocus?: boolean | undefined;
    previousMonthAriaLabel?: string | undefined;
    previousMonthButtonLabel?: string | React.ReactNode | undefined;
    previousYearAriaLabel?: string | undefined;
    previousYearButtonLabel?: string | React.ReactNode | undefined;
    readOnly?: boolean | undefined;
    renderCustomHeader?(params: any): React.ReactNode;
    renderDayContents?(dayOfMonth: number, date?: Date): React.ReactNode;
    required?: boolean | undefined;
    scrollableMonthYearDropdown?: boolean | undefined;
    scrollableYearDropdown?: boolean | undefined;
    selected?: Date | null | undefined;
    selectsEnd?: boolean | undefined;
    selectsStart?: boolean | undefined;
    selectsRange?: any;
    shouldCloseOnSelect?: boolean | undefined;
    showDisabledMonthNavigation?: boolean | undefined;
    showFullMonthYearPicker?: boolean | undefined;
    showMonthDropdown?: boolean | undefined;
    showMonthYearDropdown?: boolean | undefined;
    showMonthYearPicker?: boolean | undefined;
    showPopperArrow?: boolean | undefined;
    showPreviousMonths?: boolean | undefined;
    showQuarterYearPicker?: boolean | undefined;
    showTimeInput?: boolean | undefined;
    showTimeSelect?: boolean | undefined;
    showTimeSelectOnly?: boolean | undefined;
    showTwoColumnMonthYearPicker?: boolean | undefined;
    showFourColumnMonthYearPicker?: boolean | undefined;
    showWeekNumbers?: boolean | undefined;
    showYearDropdown?: boolean | undefined;
    showYearPicker?: boolean | undefined;
    startDate?: Date | null | undefined;
    startOpen?: boolean | undefined;
    strictParsing?: boolean | undefined;
    tabIndex?: number | undefined;
    timeCaption?: string | undefined;
    timeFormat?: string | undefined;
    timeInputLabel?: string | undefined;
    timeIntervals?: number | undefined;
    title?: string | undefined;
    todayButton?: React.ReactNode | undefined;
    useShortMonthInDropdown?: boolean | undefined;
    useWeekdaysShort?: boolean | undefined;
    weekAriaLabelPrefix?: string | undefined;
    monthAriaLabelPrefix?: string | undefined;
    value?: string | undefined;
    weekLabel?: string | undefined;
    withPortal?: boolean | undefined;
    portalId?: string | undefined;
    portalHost?: ShadowRoot | undefined;
    wrapperClassName?: string | undefined;
    yearDropdownItemNumber?: number | undefined;
    excludeScrollbar?: boolean | undefined;
    enableTabLoop?: boolean | undefined;
    yearItemNumber?: number | undefined;
};

interface LineInputProps extends FormBaseInput<string> {
    type?: HTMLInputTypeAttribute;
}
interface ILines extends FormBaseInput<string> {
    theme?: any;
    rows?: number;
    cols?: number;
}
interface IWYSIWYG extends FormBaseInput<string> {
    quillProps?: ReactQuillProps;
}
interface IWYSIWYG extends FormBaseInput<string> {
}

interface IBaseUppy extends FormBaseInput<string[]> {
    endpoint: string;
    metadata?: any;
}
interface IUppyUploader extends IBaseUppy {
}
interface IUppyDD extends IBaseUppy {
}
interface IBaseUppyInjector extends IFormFrameInjector {
    uppy: Uppy;
}
type TDropzonePreview = {
    files: File[];
    moveFile: (currentIndex: number, moveIndex: number, isRelative?: boolean) => void;
    handleDelete: (currentIndex: number) => void;
    showPreview: (currentIndex: number) => void;
};
interface DropzoneBasic {
    previewType?: 'list' | 'thumbnail-TBA';
    containerCaption?: string;
    accept?: {
        [key: string]: string[];
    };
    showList?: boolean;
    newWindow?: boolean;
    previewBox?: React.ComponentType<IDropzoneUploader & TDropzonePreview>;
}
interface IDropzoneUploader extends FormBaseInput<File[]>, DropzoneBasic {
}
interface IPDFUploader extends IInputsBaseProps<File[]> {
    newWindow?: boolean;
}

interface ICheckbox extends FormBaseInput<string> {
}
interface IRadiobox extends IInputsBaseProps<string> {
    orientation?: 'horizontal' | 'vertical';
    options: {
        value: any;
        label: string;
        reversed?: boolean;
    }[];
}
interface ICheckboxes {
    title?: string;
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactElement | React.ReactElement[];
}
type YesNoButtonOptions = {
    label?: string;
    value?: any;
    element?: React.ReactNode;
    extHandler?: (value: any) => Promise<boolean>;
    color?: string;
};
interface IYesNo extends IInputsBaseProps<any>, TInputWrapperInputHTML {
    yes?: YesNoButtonOptions;
    no?: YesNoButtonOptions;
    otherOptions?: YesNoButtonOptions[];
}
interface ISwitch extends IInputsBaseProps<any>, TInputWrapperInputHTML {
    footLabel?: [a: string, b: string];
    options?: ReactSwitchProps;
}

interface ISlider extends IInputsBaseProps<string | number> {
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

type TTemplateContext = {
    inputTemplate: null | React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>;
    buttonTemplate: null | React.ComponentType<ISubmitButton> | React.ComponentType<any>;
    elements: Record<TListInputs, React.ComponentType<any>>;
    debug: boolean;
};
declare const ThemeContext: React$1.Context<TTemplateContext>;
declare const Form: <T extends FieldValues>(props: IForm<T>) => react_jsx_runtime.JSX.Element;
declare const SubmitButton: (props: ISubmitButton) => react_jsx_runtime.JSX.Element;

declare const InputWrapperv2: (props: FormBaseInput) => react_jsx_runtime.JSX.Element;

declare const _default: React$1.MemoExoticComponent<(props: TListItems) => react_jsx_runtime.JSX.Element>;

declare const Checkbox: (props: ICheckbox) => react_jsx_runtime.JSX.Element;

declare const Radiobox: (props: IRadiobox) => react_jsx_runtime.JSX.Element;

declare const CheckboxGroup: (props: ICheckboxes) => react_jsx_runtime.JSX.Element;

declare const YesNo: (props: IYesNo) => react_jsx_runtime.JSX.Element;

declare const Switch: (props: ISwitch) => react_jsx_runtime.JSX.Element;

declare const DatePicker: (props: IDatePicker) => react_jsx_runtime.JSX.Element;

declare const Line: (props: LineInputProps) => react_jsx_runtime.JSX.Element;

declare const Lines: (props: ILines) => react_jsx_runtime.JSX.Element;

declare const WYSIWYG: (props: IWYSIWYG) => react_jsx_runtime.JSX.Element;

declare const DropzoneUploader: (props: IDropzoneUploader) => react_jsx_runtime.JSX.Element;

declare const UppyDashboardUploader: (props: IUppyUploader) => react_jsx_runtime.JSX.Element;

declare const Select: (props: ISelect) => react_jsx_runtime.JSX.Element;

declare const AsyncSelect: (props: ISelectAsync) => react_jsx_runtime.JSX.Element;

declare const FormList: (props: IList) => react_jsx_runtime.JSX.Element;

declare const TableList: (props: ITableList) => react_jsx_runtime.JSX.Element;

declare const InputListToTable: (props: IInputToTableList) => react_jsx_runtime.JSX.Element;

declare const Slider: (props: ISlider) => react_jsx_runtime.JSX.Element;

export { AsyncSelect, type BaseSelect, type BaseSelectNotCreatable, Checkbox, CheckboxGroup, type CustomElementBaseInput, DatePicker, type DropzoneBasic, DropzoneUploader, Form, type FormBaseInput, type FormFrameWrapperProps, type FormInputClassNames, FormList, type HTMLInputTypeAttribute, type IBaseUppy, type IBaseUppyInjector, type ICheckbox, type ICheckboxes, type IDP_Base, type IDatePicker, type IDropzoneUploader, type IForm, type IFormFrameInjector, type IInputsBaseProps, type IInputsBasePropsNoSetters, type ILines, type IOptionsSelectAsync, type IOptionsSelectNotAsync, type IPDFUploader, type IRadiobox, type ISelect, type ISelectAsync, type ISelectCreatable, type ISlider, type ISubmitButton, type ISwitch, type IUppyDD, type IUppyUploader, type IWYSIWYG, type IYesNo, _default as InputChooser, InputListToTable as InputListtoTable, InputWrapperv2 as InputWrapper, Line, type LineInputProps, Lines, type RSAsyncOptions, type RSBaseOptions, type RSCreatableAsyncOptions, type RSCreatableOptions, type RSOptionsAsync, type RSOptionsBase, type RSOptionsCreatable, Radiobox, Select, Slider, SubmitButton, Switch, type TDropzonePreview, type TInputHTMLProps, type TInputInputHTML, type TInputWrapperHTML, type TInputWrapperInputHTML, type TRSStyles, type TSelectGroup, type TSelectOption, type TTemplateContext, TableList, ThemeContext, UppyDashboardUploader, WYSIWYG as WYSIWYGEditor, YesNo, type _BaseSelect };
