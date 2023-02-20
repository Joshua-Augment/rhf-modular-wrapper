/// <reference types="react" />
import { ValidationMode, Resolver, DeepPartial, FieldValues, FieldError, CriteriaMode } from 'react-hook-form/dist/types';
export interface IForm<T extends FieldValues> {
    inputWrapper?: React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>;
    style?: 'bootstrap' | 'mui';
    id?: string;
    defaultValues?: DeepPartial<T>;
    resetOnComplete?: boolean;
    onSubmit: (data: T) => Promise<any>;
    children: JSX.Element[] | JSX.Element;
    mode?: keyof ValidationMode;
    reValidateMode?: "onBlur" | "onChange" | "onSubmit";
    resolver?: Resolver<T, any>;
    context?: any;
    criteriaMode?: CriteriaMode;
    shouldFocusError?: boolean;
    shouldUnregister?: boolean;
    shouldUseNativeValidation?: boolean;
    delayError?: number;
}
export interface FormFrameWrapperProps {
    id?: string;
    errors?: FieldError;
    name: string;
    helperText?: string;
    label?: string;
    children: JSX.Element;
    reversedLabel?: boolean;
    noBorder?: boolean;
    noLabel?: boolean;
    placeholder?: string;
    customClasses?: FormInputClassNames;
}
export interface IFormFrameInjector extends FormFrameWrapperProps {
    value: any;
    onChange: (e: any) => void;
    onBlur: (e: any) => any;
    isTouched: boolean;
    isDirty: boolean;
    error: any;
    ref: any;
}
export type FormInputClassNames = {
    wrapperClassName?: string;
    labelClassName?: string;
    inputClassName?: string;
};
export interface FormBaseInput<T = any> {
    name: string;
    id?: string;
    customClasses?: FormInputClassNames;
    reversedLabel?: boolean;
    helperText?: string;
    label?: string;
    placeholder?: string;
    noBorder?: boolean;
    noLabel?: boolean;
    calculatedField?: {
        find: string[];
        calculate: (this: T, foundFields: any[], allFields: any) => T;
    };
    children?: Function;
    validation?: {
        required?: boolean | string;
        max?: {
            value: number;
            message?: string;
        };
        maxLength?: {
            value: number;
            message?: string;
        };
        min?: {
            value: number;
            message?: string;
        };
        minLength?: {
            value: number;
            message?: string;
        };
    };
}
export interface LineInputProps extends FormBaseInput<String> {
    type?: HTMLInputTypeAttribute;
}
export interface LinesInputProps extends FormBaseInput<String> {
    rows?: number;
    cols?: number;
}
export interface WYSIWYGProps extends FormBaseInput<String> {
}
export interface IDatePicker extends FormBaseInput<String> {
    options?: IDP_Base;
}
export interface ICheckbox extends FormBaseInput<String> {
}
export interface IRadiobox extends FormBaseInput<String> {
    value: string;
}
export interface ICheckboxes {
    title?: string;
    orientation?: 'horizontal' | 'vertical';
    children: React.ReactElement | React.ReactElement[];
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
type HTMLInputTypeAttribute = 'button' | 'checkbox' | 'color' | 'date' | 'datetime-local' | 'email' | 'file' | 'hidden' | 'image' | 'month' | 'number' | 'password' | 'radio' | 'range' | 'reset' | 'search' | 'submit' | 'tel' | 'text' | 'time' | 'url' | 'week' | (string & {});
export {};
