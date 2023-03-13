import React, { useCallback, useEffect, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import {
  IFormFrameInjector,
  InputWrapper,
  TSelectOption,
  ISelectAsync,
} from "../../../core";

const AsyncSelect = (props: ISelectAsync) => {
  return (
    <InputWrapper {...props} noBorder>
      {(IWProps: IFormFrameInjector) => {
        console.log(`[Datepickerprops] - ${props.name}`, IWProps);
        return <SelectWrapper {...IWProps} {...props} />;
      }}
    </InputWrapper>
  );
};

interface ISelectWrapper
  extends IFormFrameInjector<TSelectOption | null>,
    ISelectAsync {}
const SelectWrapper = (props: ISelectWrapper) => {
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? []);
  const [selectedOption, setSelectedOption] =
    useState<TSelectOption | null>(null);
  useEffect(() => {
    setOptions(props.options ?? []);
  }, [JSON.stringify(props.options)]);

  const createNew = useCallback((a: any) => {
    if (props.isCreatable !== undefined) {
      if (props.isCreatable === true) {
        setOptions([{ label: a, value: a }, ...options]);
        setSelectedOption({ label: a, value: a });
        props.onChange({ label: a, value: a });
      } else {
        props.isCreatable(a).then((opt) => {
          setOptions([opt, ...options]);
          setSelectedOption(opt);
          props.onChange(opt);
        });
      }
    }
  }, []);

  const onChangeHandler = useCallback((a: any) => {
    setSelectedOption(a);
    props.onChange(a);
  }, []);

  return props.isCreatable !== undefined ? (
    <AsyncCreatableSelectInput
      onCreateOption={createNew}
      {...props}
      options={options}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      value={selectedOption}
      onChange={onChangeHandler}
      {...props.rsOptions}
    />
  ) : (
    <AsyncSelectInput
      {...props}
      options={options}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      value={selectedOption}
      onChange={onChangeHandler}
      {...props.rsOptions}
    />
  );
};

export default AsyncSelect;
