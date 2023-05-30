import React, { useEffect, useMemo, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import {
  ISelect,
  InputWrapper,
  TSelectOption,
} from "../../../core";
import { useFormContext } from "react-hook-form";

const Select = (props: ISelect) => {
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? [])
  // Watch for changed options
  useEffect(()=> {
    console.log("[options] - ",props.options)
    setOptions(props.options)
  },[props.options])

  const {watch, setValue} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(()=>_val,[_val])

  const createNew = (a: string) => {
    if (props.isCreatable !== undefined) {
      if (props.isCreatable === true) {
        setOptions([{ label: a, value: a }, ...options]);
        // setSelectedOption({ label: a, value: a });
        setValue(props.name, { label: a, value: a });
      } else {
        props.isCreatable(a).then((opt) => {
          setOptions([opt, ...options]);
          // setSelectedOption(opt);
          setValue(props.name, opt);
        });
      }
    }
  }

  const SelectElems = useMemo(()=> {
    console.log("[SelectElems] -rendered", options)
    return <InputWrapper {...props} noBorder options={options}>
      {props.isCreatable !== undefined ?  
    <SelectCreatableInput
      onCreateOption={createNew}
      {...props}
      {...props.rsOptions}
      options={options}
      value={val}
      onChange={(a:TSelectOption) => setValue(props.name, a)}
    /> :   
    <SelectInput
      {...props}
      {...props.rsOptions}
      options={options}
      value={val}
      onChange={(a:TSelectOption) => setValue(props.name, a)}
    />}
    </InputWrapper>
  },[options])

  return (
    SelectElems
  );
};

export default Select;
