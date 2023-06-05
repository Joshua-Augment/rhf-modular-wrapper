import React, { useCallback, useEffect, useMemo, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import { TSelectOption, ISelectAsync, InputWrapper,} from "../../../core";
import { useFormContext } from "react-hook-form";

const AsyncSelect = (props: ISelectAsync) => {
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? []);
  useEffect(()=> {if (props.options && props.options.length > 0) {setOptions(props.options)}},[props.options])

  const {watch, setValue, getValues} = useFormContext()
  const _val = watch(props.name)
  const val = useMemo(()=>_val,[_val])

  const createNew = useCallback((a: any) => {
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
  }, []);
  
  return <InputWrapper {...props} noBorder>
    {
      props.isCreatable !== undefined ? (
      <AsyncCreatableSelectInput
        styles={{container: (base) => ({...base, width:'100%'})}}
        onCreateOption={createNew}
        {...props}
        options={options}
        isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
        value={val}
        onChange={(a:TSelectOption) => setValue(props.name, a)}
        {...props.rsOptions}
        loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, getValues(),b) : props.loadOptions(a,b)}
      />
    ) : (
      <AsyncSelectInput
        styles={{container: (base) => ({...base, width:'100%'})}}
        {...props}
        options={options}
        isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
        value={val}
        onChange={(a:TSelectOption) => setValue(props.name, a)}
        {...props.rsOptions}
        loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, getValues(),b) : props.loadOptions(a,b)}
      />
    )
    }
  </InputWrapper>
};
 

export default AsyncSelect;
