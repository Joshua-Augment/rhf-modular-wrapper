import React, { useCallback, useEffect, useState } from "react";
import SelectInput from "react-select/";
import SelectCreatableInput from "react-select/creatable";
import {
  ISelect,
  IFormFrameInjector,
  InputWrapper,
  TSelectOption,
} from "../../../core";
import { compareArrays } from "../../../core/helpers";

const Select = (props: ISelect) => {
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
    ISelect {}
const SelectWrapper = (props: ISelectWrapper) => {
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? []);
  const [selectedOption, setSelectedOption] = useState<TSelectOption | null>(null);

  useEffect(() => { setOptions(props.options) }, [props.options]);
  useEffect(() => {
    if (Array.isArray(props.value) ? !compareArrays(props.value,selectedOption) : (props.value === null ? false:  props.value.value !== selectedOption?.value)) {
      setSelectedOption(props.value)
    }
  },[props.value])

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
    <SelectCreatableInput
      onCreateOption={createNew}
      {...props}
      options={options}
      value={selectedOption}
      onChange={onChangeHandler}
      {...props.rsOptions}
    />
  ) : (
    <SelectInput
      {...props}
      options={options}
      value={selectedOption}
      onChange={onChangeHandler}
      {...props.rsOptions}
    />
  );
};

export default Select;
