import { useEffect, useState } from "react";
import AsyncSelectInput from "react-select/async";
import AsyncCreatableSelectInput from "react-select/async-creatable";
import { TSelectOption, ISelectAsync, InputWrapper, BaseSelect,} from "../../../core";

const AsyncSelect = (props: ISelectAsync) => {  
  return <InputWrapper type={props.type ?? 'select_async'} {...props} noBorder>
    <_AsyncSelect {...props} />
  </InputWrapper>
};
 
const _AsyncSelect = (props: any) => {
  // console.log(`[Select] [${props.name}] props : `,props)
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

  const omitHandler = (options: TSelectOption[], callback: Function) => {
    const omitOptions:BaseSelect['omitOptions'] = props.omitOptions
      if (omitOptions && Array.isArray(omitOptions)) {
        const _filter = omitOptions.map(x => (typeof x ==='string' || typeof x === 'number') ? x : x?.value as string|number)
        callback(options.filter(x => !_filter.includes(x.value)))        
      } else {
        callback(options)
      }
  }

  return props.isCreatable !== undefined ? 
  <AsyncCreatableSelectInput
    styles={{container: (base) => ({...base, width:'100%'})}}
    onCreateOption={createNew}
    {...props}
    options={options}
    isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    name={props.name}
    value={props.value}
    onChange={(a) => props.onChange(a)}
    error={props.error}
    {...props.rsOptions}
    loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),(retOptions:any) => omitHandler(retOptions,b)) : props.loadOptions(a,(retOptions:any) => omitHandler(retOptions,b))}
  />
: 
  <AsyncSelectInput
    styles={{container: (base) => ({...base, width:'100%'})}}
    {...props}
    options={options}
    isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
    name={props.name}
    value={props.value}
    onChange={(a) => props.onChange(a)}
    error={props.error}
    {...props.rsOptions}
    loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),(retOptions:any) => omitHandler(retOptions,b)) : props.loadOptions(a,(retOptions:any) => omitHandler(retOptions,b))}
  /> 
  
  // return <Controller      
  //   control={props.control}
  //   name={props.name}
  //   defaultValue={props.defaultValue}
  //   render={ ({field: {name, value, onChange, onBlur}, formState: {errors}}) => (
  //     props.isCreatable !== undefined ? 
  //       <AsyncCreatableSelectInput
  //         styles={{container: (base) => ({...base, width:'100%'})}}
  //         onCreateOption={createNew}
  //         {...props}
  //         options={options}
  //         isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
  //         name={name}
  //         value={value}
  //         onChange={(a) => onChange(a)}
  //         {...props.rsOptions}
  //         loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
  //       />
  //     : 
  //       <AsyncSelectInput
  //         styles={{container: (base) => ({...base, width:'100%'})}}
  //         {...props}
  //         options={options}
  //         isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
  //         name={name}
  //         value={value}
  //         onChange={(a) => onChange(a)}
  //         {...props.rsOptions}
  //         loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
  //       />  
  //     )}
  //   />
  
  
  // props.isCreatable !== undefined ? (
  //   <AsyncCreatableSelectInput
  //     styles={{container: (base) => ({...base, width:'100%'})}}
  //     onCreateOption={createNew}
  //     {...props}
  //     options={options}
  //     isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
  //     value={props.value}
  //     onChange={(a:TSelectOption) => props.onChange(a)}
  //     {...props.rsOptions}
  //     loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
  //   />
  // ) : (
  //   <AsyncSelectInput
  //     styles={{container: (base) => ({...base, width:'100%'})}}
  //     {...props}
  //     options={options}
  //     isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
  //     value={props.value}
  //     onChange={(a:TSelectOption) => props.onChange(a)}
  //     {...props.rsOptions}
  //     loadOptions={(a,b) => props.allLoad ? props.allLoad(a, props.name, props.getValues(),b) : props.loadOptions(a,b)}
  //   />
  // )
}

export default AsyncSelect;
