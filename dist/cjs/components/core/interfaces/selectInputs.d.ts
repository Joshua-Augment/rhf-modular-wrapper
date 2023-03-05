import { IInputsBaseProps } from './';
import { StylesConfig, GroupBase } from 'react-select';
export type TSelectOption = {
    label: string | number;
    value: any;
    [key: string | number]: any;
};
export type TRSStyles = StylesConfig<any, any, GroupBase<TSelectOption>>;
export type TSelectGroup = {
    label: string;
    value: TSelectOption;
};
export type RSOptionsAsync = {
    loadOptions: (input: string, callback: (options: TSelectOption[]) => void) => void;
    defaultOptions?: boolean;
    cachedOptions?: boolean;
};
export type RSOptionsCreatable = {};
export type RSOptionsBase = {
    isMulti?: boolean;
    isSearchable?: boolean;
    isDisabled?: boolean;
    isLoading?: boolean;
    isClearable?: boolean;
    hideSelectedOptions?: boolean;
    menuIsOpen?: boolean;
    placeholder?: string;
    styles?: TRSStyles;
};
export interface BaseSelect extends IInputsBaseProps<TSelectOption | null> {
    isCreateable?: true | ((createdString: string) => Promise<TSelectOption>);
    options: TSelectOption[];
    rsOptions?: RSOptionsBase;
}
export interface ISelect extends BaseSelect {
}
export interface ISelectAsync extends BaseSelect, RSOptionsAsync {
}
export interface ISelectCreatable extends BaseSelect, RSOptionsCreatable {
}
