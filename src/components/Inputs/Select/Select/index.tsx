import React, { useEffect, useMemo, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import {
  IInputsBasePropsNoSetters,
  ISelect,
  InputWrapper,
  TSelectOption,
} from "../../../core";
import { useInputValAndError } from "../../../core/hook/useInputValnError";

const Select = (props: ISelect) => {
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? [])
  // Watch for changed options
  useEffect(()=> {
    // console.log("[options] - ",props.options)
    setOptions(props.options)
  },[props.options])
  const {value, error, setValue} = useInputValAndError(props.name)

  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  // const val = useMemo(()=>_val,[_val])

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

  const _props: IInputsBasePropsNoSetters = {...props}
  delete _props.calculatedField
  delete _props.externalStateSetter
  delete _props.onInputChange

  const SelectElems = useMemo(()=> {
    // console.log("[SelectElems] -rendered", options)
    return <InputWrapper {...props} noBorder options={options}>
      {props.isCreatable !== undefined ?  
    <SelectCreatableInput
      styles={{container: (base) => ({...base, width:'100%'})}}
      onCreateOption={createNew}
      {..._props}
      {...props.rsOptions}
      options={options}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      value={value}
      onChange={(a:TSelectOption) => setValue(props.name, a)}
    /> :   
    <SelectInput
      styles={{container: (base) => ({...base, width:'100%'})}}
      {..._props}
      {...props.rsOptions}
      options={options}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      value={value}
      onChange={(a:TSelectOption) => setValue(props.name, a)}
    />}
    </InputWrapper>
  },[options, value, error])

  return (
    SelectElems
  );
};

export default Select;
