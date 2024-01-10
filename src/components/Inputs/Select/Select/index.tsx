import React, { useEffect, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import {
  BaseSelect,
  IInputsBasePropsNoSetters,
  ISelect,
  InputWrapper,
  TSelectOption,
} from "../../../core";
import { Controller } from "react-hook-form";

const Select = (props: ISelect) => {
  // const {value, error, setValue} = useInputValAndError(props.name)

  // const {watch, setValue} = useFormContext()
  // const _val = watch(props.name)
  // const val = useMemo(()=>_val,[_val])

  

  const _props: IInputsBasePropsNoSetters = {...props}
  delete _props.calculatedField
  delete _props.externalStateSetter
  delete _props.onInputChange

  // const SelectElems = useMemo(()=> {    
  //   // Watch for changed options
    
  //   // console.log("[SelectElems] -rendered", options)

  //   return <InputWrapper type={props.type ?? 'select'} {...props} noBorder options={options}>
  //     <_Select {..._props} />
  //   </InputWrapper>
  // },[options, value, error])

  return <InputWrapper type={props.type ?? 'select'} {...props} noBorder >
  <_Select {..._props} />
</InputWrapper>;
};

const _Select = (props: any) => {
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? [])

  useEffect(()=> {
    if (props.options && Array.isArray(props.options)) {
      const omitOptions:BaseSelect['omitOptions'] = props.omitOptions
      console.log('omitOptions', omitOptions)
      if (omitOptions && Array.isArray(omitOptions)) {
        const _filter = omitOptions.map(x => (typeof x ==='string' || typeof x === 'number') ? x : x?.value as string|number)
        setOptions((props.options as TSelectOption[]).filter(x => !_filter.includes(x.value)))
        
      } else {
        setOptions(props.options)
      }
    }
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

  return props.isCreatable !== undefined ?
    <SelectCreatableInput
      styles={{container: (base) => ({...base, width:'100%'})}}
      onCreateOption={createNew}
      onBlur={props.onBlur}
      {...props}
      {...props.rsOptions}
      options={options}
      error={props.error}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      name={props.name}
      value={props.value}
      onChange={(a) => props.onChange(a)} 
      // value={value}
      // onChange={(a:TSelectOption) => setValue(props.name, a)}
    /> :   
  <SelectInput
    styles={{container: (base) => ({...base, width:'100%'})}}
    {...props}
    {...props.rsOptions}
    options={options}
    onBlur={props.onBlur}
    error={props.error}
    isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false} 
    name={props.name}
    value={props.value}
    onChange={(a) => props.onChange(a)}
    // value={value}
    // onChange={(a:TSelectOption) => setValue(props.name, a)}
    />
  return <Controller      
      control={props.control}
      name={props.name}
      defaultValue={props.defaultValue}
      render={ ({field: {name, value, onChange, onBlur}, formState: {errors}}) => (
        props.isCreatable !== undefined ?
        <SelectCreatableInput
          styles={{container: (base) => ({...base, width:'100%'})}}
          onCreateOption={createNew}
          onBlur={onBlur}
          {...props}
          {...props.rsOptions}
          options={options}
          error={name in errors ? errors[name] : undefined}
          isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
          name={name}
          value={value}
          onChange={(a) => onChange(a)}
          // value={value}
          // onChange={(a:TSelectOption) => setValue(props.name, a)}
        /> :   
    <SelectInput
      styles={{container: (base) => ({...base, width:'100%'})}}
      {...props}
      {...props.rsOptions}
      options={options}
      onBlur={onBlur}
      error={name in errors ? errors[name] : undefined}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false} 
      name={name}
      value={value}
      onChange={(a) => onChange(a)}
      // value={value}
      // onChange={(a:TSelectOption) => setValue(props.name, a)}
    />
      )}
    />  
    
}

export default Select;
