import React, { useEffect, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import { TSelectOption, ISelectAsync, InputWrapper, IInputsBasePropsNoSetters,} from "../../../core";
import { Controller } from "react-hook-form";


const AsyncSelect = (props: ISelectAsync) => {
  const _props: IInputsBasePropsNoSetters = {...props}
  delete _props.calculatedField
  delete _props.externalStateSetter
  delete _props.onInputChange
  
  return <InputWrapper type={props.type ?? 'select_async'} {...props} noBorder>
    <_AsyncSelect {...props} />
  </InputWrapper>

  // return <InputWrapper type={props.type ?? 'select_async'} {...props} noBorder>
  //   {
  //     props.isCreatable !== undefined ? (
  //     <AsyncCreatableSelectInput
  //       styles={{container: (base) => ({...base, width:'100%'})}}
  //       onCreateOption={createNew}
  //       {..._props}
  //       options={options}
  //       isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
  //       value={val}
  //       onChange={(a:TSelectOption) => setValue(props.name, a)}
  //       {...props.rsOptions}
  //       loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, getValues(),b) : props.loadOptions(a,b)}
  //     />
  //   ) : (
  //     <AsyncSelectInput
  //       styles={{container: (base) => ({...base, width:'100%'})}}
  //       {..._props}
  //       options={options}
  //       isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
  //       value={val}
  //       onChange={(a:TSelectOption) => setValue(props.name, a)}
  //       {...props.rsOptions}
  //       loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, getValues(),b) : props.loadOptions(a,b)}
  //     />
  //   )
  //   }
  // </InputWrapper>
};
 
const _AsyncSelect = (props: any) => {
  console.log(`[Select] [${props.name}] props : `,props)
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? [])

  useEffect(()=> {
    // console.log("[options] - ",props.options)
    setOptions(props.options)
  },[props.options])

  const createNew = (a: string) => {
    if (props.isCreatable !== undefined) {
      if (props.isCreatable === true) {
        setOptions([{ label: a, value: a }, ...options]);
        // setSelectedOption({ label: a, value: a });
        props.onChange({ label: a, value: a });
      } else {
        props.isCreatable(a).then((opt) => {
          setOptions([opt, ...options]);
          // setSelectedOption(opt);
          props.onChange(opt);
        });
      }
    }
  }
  
  return <Controller      
    control={props.control}
    name={props.name}
    defaultValue={props.defaultValue}
    render={ ({field: {name, value, onChange, onBlur}, formState: {errors}}) => (
      props.isCreatable !== undefined ? 
        <AsyncCreatableSelectInput
          styles={{container: (base) => ({...base, width:'100%'})}}
          onCreateOption={createNew}
          {...props}
          options={options}
          isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
          name={name}
          value={value}
          onChange={(a) => onChange(a)}
          {...props.rsOptions}
          loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
        />
      : 
        <AsyncSelectInput
          styles={{container: (base) => ({...base, width:'100%'})}}
          {...props}
          options={options}
          isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
          name={name}
          value={value}
          onChange={(a) => onChange(a)}
          {...props.rsOptions}
          loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
        />  
      )}
    />
  
  
  props.isCreatable !== undefined ? (
    <AsyncCreatableSelectInput
      styles={{container: (base) => ({...base, width:'100%'})}}
      onCreateOption={createNew}
      {...props}
      options={options}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      value={props.value}
      onChange={(a:TSelectOption) => props.onChange(a)}
      {...props.rsOptions}
      loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
    />
  ) : (
    <AsyncSelectInput
      styles={{container: (base) => ({...base, width:'100%'})}}
      {...props}
      options={options}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      value={props.value}
      onChange={(a:TSelectOption) => props.onChange(a)}
      {...props.rsOptions}
      loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
    />
  )
}

export default AsyncSelect;
