import React, { useEffect, useMemo, useState } from "react";
import SelectInput from "react-select";
import SelectCreatableInput from "react-select/creatable";
import { BaseSelect, IInputsBasePropsNoSetters, ISelect, TSelectOption } from "../../../core/index";
import InputWrapper from "../../../core/InputWrapper/index";

const Select = (props: ISelect) => {

  const _props: IInputsBasePropsNoSetters = { ...props };
  delete _props.calculatedField;
  delete _props.externalStateSetter;
  delete _props.onInputChange;

  return (
    <InputWrapper empty={null} type={props.type ?? "select"} {...props} noBorder>
      <_Select {..._props} />
    </InputWrapper>
  );
};

const _Select = (props: any) => {
  const [options, setOptions] = useState<TSelectOption[]>(props.options ?? []);
  const _options = props.options.map((x: TSelectOption) => x.value).join(",");

  // Synchronization
  useEffect(() => {
    setOptions(props.options);
  }, [_options]);

  const omitOptions: BaseSelect["omitOptions"] = props.omitOptions;
  const omitFilter = useMemo(
    () => (omitOptions ? omitOptions.map((x) => (typeof x === "string" || typeof x === "number" ? x : (x?.value as string | number))) : null),
    [omitOptions]
  );

  const filteredOmittedOptions = options.filter((x) => {
    if (omitFilter) {
      return !omitFilter.includes(x.value);
    } else {
      return true;
    }
  });

  // useEffect(()=> {
  //   if (props.options && Array.isArray(props.options)) {
  //     const omitOptions:BaseSelect['omitOptions'] = props.omitOptions
  //     if (omitOptions && Array.isArray(omitOptions)) {
  //       const _filter = omitOptions.map(x => (typeof x ==='string' || typeof x === 'number') ? x : x?.value as string|number)
  //       setOptions((props.options as TSelectOption[]).filter(x => !_filter.includes(x.value)))

  //     } else {
  //       setOptions(props.options)
  //     }
  //   }
  // },[props.options])

  const createNew = (a: string) => {
    if (props.isCreatable !== undefined) {
      if (props.isCreatable === true) {
        setOptions([{ label: a, value: a }, ...options]);
        // setSelectedOption({ label: a, value: a });
        props.onChange({ label: a, value: a });
      } else {
        props.isCreatable(a).then((opt: TSelectOption) => {
          setOptions([opt, ...options]);
          // setSelectedOption(opt);
          props.onChange(opt);
        });
      }
    }
  };

  return props.isCreatable !== undefined ? (
    <SelectCreatableInput
      styles={{ container: (base) => ({ ...base, width: "100%" }) }}
      onCreateOption={createNew}
      onBlur={props.onBlur}
      {...props}
      {...props.rsOptions}
      options={filteredOmittedOptions}
      error={props.error}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      name={props.name}
      value={props.value}
      onChange={(a) => props.onChange(a)}
      // value={value}
      // onChange={(a:TSelectOption) => setValue(props.name, a)}
    />
  ) : (
    <SelectInput
      styles={{ container: (base) => ({ ...base, width: "100%" }) }}
      {...props}
      {...props.rsOptions}
      options={filteredOmittedOptions}
      onBlur={props.onBlur}
      error={props.error}
      isDisabled={props.rsOptions?.isDisabled ?? props.disabled ?? false}
      name={props.name}
      value={props.value}
      onChange={(a) => props.onChange(a)}
    />
  );
};

export default Select;
