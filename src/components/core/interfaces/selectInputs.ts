import { RefAttributes } from 'react';
import { IInputsBaseProps } from './';
import { StylesConfig, GroupBase, Props } from 'react-select';
import { AsyncProps } from 'react-select/async';
import { AsyncCreatableProps } from 'react-select/async-creatable';
import { CreatableProps } from 'react-select/creatable';

export type TSelectOption = {label: string | number, value: any, [key:string|number] : any}
export type TRSStyles = StylesConfig<any, any, GroupBase<TSelectOption>>
export type TSelectGroup = {label: string, value: TSelectOption}

export type RSOptionsAsync = {
  loadOptions : (input: string, callback: (options: TSelectOption[]) => void) => void ,
  allLoad ?: (input:string, name: string, all: any, callback: (options: TSelectOption[]) => void) => void,
  defaultOptions ?: boolean,
  cachedOptions ?: boolean
}
export type RSOptionsCreatable = {
  
}
export type RSBaseOptions<Option=any,IsMulti extends boolean = any,Group extends GroupBase<Option> =any> = Props<Option, IsMulti, Group>

export type RSAsyncOptions<Option=any,IsMulti extends boolean = any,Group extends GroupBase<Option> =any> = AsyncProps<Option, IsMulti, Group> & RefAttributes<RSBaseOptions<Option, IsMulti, Group>>
export type RSCreatableAsyncOptions<Option=any,IsMulti extends boolean = any,Group extends GroupBase<Option> =any> = AsyncCreatableProps<Option, IsMulti, Group> & RefAttributes<RSBaseOptions<Option, IsMulti, Group>>
export type RSCreatableOptions<Option=any,IsMulti extends boolean = any,Group extends GroupBase<Option> =any> = CreatableProps<Option, IsMulti, Group> & RefAttributes<RSBaseOptions<Option, IsMulti, Group>>


export type RSOptionsBase = {    
  isMulti ?: boolean,
  isSearchable?: boolean,
  isDisabled ?: boolean,
  isLoading ?: boolean,
  isClearable?: boolean,
  hideSelectedOptions ?: boolean,
  menuIsOpen ?: boolean,
  placeholder ?: string,
  styles ?: TRSStyles,
  [key:string] : any
}
export interface BaseSelect extends IInputsBaseProps<TSelectOption|null> {
  isCreatable ?: true | ((createdString:string) => Promise<TSelectOption>)
  rsOptions ?: RSBaseOptions,
}

export type BaseSelectNotCreatable = {
  isCreatable ?: false,
  rsOptions : RSBaseOptions
}

export interface IOptionsSelectNotAsync { options : TSelectOption[] }
export interface IOptionsSelectAsync { options ?: TSelectOption[] }

export interface ISelect extends BaseSelect,IOptionsSelectNotAsync {}
export interface ISelectCreatable extends BaseSelect,RSOptionsCreatable,IOptionsSelectNotAsync {}
export interface ISelectAsync extends BaseSelect,RSOptionsAsync,IOptionsSelectAsync {}