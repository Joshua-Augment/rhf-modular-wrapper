import React, { useEffect, useMemo, useRef } from "react";
import Logger from "../../../Logger";
import { useWatch } from "react-hook-form";
import { FormBaseInput } from "../../../interfaces";
import DefaultInputWrapper from "./DefaultInputWrapper";
import { useInputValAndError } from "../../../hook/useInputValnError";

export interface IInputInnerWrapper extends FormBaseInput {
}

const InputInnerWrapper = (props: IInputInnerWrapper) => {
  
  const { value, error, formState,  ...methods } = useInputValAndError(props.name);
  const {
    inputWrapper : _propsInputWrapper,
    name: _propsName,
    options: _propsOptions,
    items: _propsItems,
    label: _propsLabel,
    noLabel: _propsNoLabel,
    type: _propsType,
    helperText: _propsHelperText,
  } = props;

  const firstUpdate = useRef(true);
  Logger.info(`First Update : ${firstUpdate.current}`, `${_propsName} - InputWrapperv2`);

  const watchCalculated = useWatch({
    name: props?.calculatedField?.find !== undefined ? props.calculatedField.find : (`#_#_noinputtofind_#_#` as any),
  });
  Logger.info(`Watching Calculated : ${String(watchCalculated)}`, `${_propsName} - InputWrapperv2`);
  // console.log(`For ${props.name}, error : `,rest.error)
  // On Value change

  useEffect(() => {
    Logger.info(`Default Value : ${String(props.defaultValue)}`, `${_propsName} - InputWrapperv2`);
    if (props.defaultValue !== undefined) {
      // console.log(`[Setting] ${props.name} has a defaultValue of ${props.defaultValue} [ Default Value ? ${props.defaultValue === undefined ? 'Undefined' : 'Have'}]`);
      methods.setValue("inputWrapper - DefaultValue", props.defaultValue);
    }
  }, [props.defaultValue]);

  useEffect(() => {
    // // Make sure value isnt undefined
    // if (value === undefined) {methods.setValue(props.name, null)}

    // External Field
    if (props.externalStateSetter) {
      Logger.info(`Setting External State`, `${_propsName} - InputWrapperv2`);
      props.externalStateSetter(value);
    }
    // On Input Change
    if (props.onInputChange && !firstUpdate.current) {
      Logger.info(`First Time Setting`, `${_propsName} - InputWrapperv2`);
      props.onInputChange(value, _propsName, methods.getValues(), { ...props.formMethods });
    }

    firstUpdate.current = false;
  }, [value]);

  useEffect(() => {
    // Calculated Fields
    if (props.calculatedField) {
      Logger.info(`Setting External State`, `${_propsName} - calculatedField`, "start");
      if (props.calculatedField.isPromise === true) {
        Logger.info(`Promise expected`, `${_propsName} - calculatedField`);
        props.calculatedField
          .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
          // .then(data => { contextSetValue(props.name, data) })
          .then((data) => {
            Logger.info(`Calculated Data : ${String(data)}`, `${_propsName} - calculatedField`);
            Logger.info(null, null, "end");
            // console.log(`[Setting] Setting value for ${props.name} by calculation (async)`)
            methods.setValue(props.name, data);
          });
      } else {
        const _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
        Logger.info(`No Promise expected. Value Expected : ${String(_result)}`, `${_propsName} - calculatedField`);
        // console.log(`[Setting] Setting value for ${props.name} by calculation`)
        methods.setValue(props.name, _result);
        Logger.info(null, null, "end");
      }
    }
  }, [watchCalculated]);

  const WrapperMaker = (A?: any, B?: any, children?: any) => {
    if (A) {
      return <A>{children}</A>;
    }
    if (B) {
      return <B>{children}</B>;
    }
    return <div style={{ display: "flex", flexDirection: "row" }}>{children}</div>;
  };

  Logger.info(`Setting Left Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementLeft = useMemo(() => {
    Logger.info(`useMemo`, `WrapperElementLeft`, "start");
    Logger.info(null, null, "end");
    return props?.buttons?.left
      ? WrapperMaker(
          props?.buttons?.wrapper?.left,
          props?.buttons?.wrapper?.all,
          props?.buttons?.left ? props.buttons.left(value, props.name, methods.getValues) : null
        )
      : null;
  }, [props?.buttons?.left, props?.buttons?.wrapper?.left, props?.buttons?.wrapper?.all]);

  Logger.info(`Setting Right Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementRight = useMemo(() => {
    Logger.info(`useMemo`, `WrapperElementRight`, "start");
    Logger.info(null, null, "end");
    return props?.buttons?.right
      ? WrapperMaker(
          props?.buttons?.wrapper?.right,
          props?.buttons?.wrapper?.all,
          props?.buttons?.right ? props.buttons.right(value, props.name, methods.getValues) : null
        )
      : null;
  }, [props?.buttons?.right, props?.buttons?.wrapper?.right, props?.buttons?.wrapper?.all]);

  Logger.info(`Setting Chosen Element`, `${_propsName} - InputWrapperv2`);
 
  const ChosenElement: any = useMemo(() => {
    Logger.info(`useMemo`, `Chosen Element`, "start");
    const _chosenElement = props.inputElement
    Logger.info(null, null, "end");
    return _chosenElement;
  }, [props.inputElement]);

  const Wrapper: any = useMemo(() => _propsInputWrapper, [_propsInputWrapper]);

  // const ChildComponent = useMemo(
  //   () => (
  //     <React.Fragment key={props.name}>
  //       {WrapperElementLeft}
  //       {ChosenElement
  //         ? ChosenElement({
  //             ...props.children?.props,
  //             ...methods,
  //             disabled: props.disabled,
  //             type: props?.type ?? "line",
  //             onChange: (a) => methods.setValue(props.name, a),
  //             value: value,
  //             error: error,
  //             // error: formState.errors?.[field.name],
  //             source: "InputWrapper",
  //           })
  //         : React.cloneElement(props.children, {
  //             ...props.children?.props,
  //             ...methods,
  //             disabled: props.disabled,
  //             type: props?.type ?? "line",
  //             onChange: (a) => methods.setValue(props.name, a),
  //             value: value,
  //             error: error,
  //             // error: formState.errors?.[field.name],
  //             source: "InputWrapper",
  //           })}
  //       {/* childrenInjected */}
  //       {WrapperElementRight}
  //     </React.Fragment>
  //   ),
  //   [value, props.options, props.items, props.label]
  // );

  const ChildComponent = <React.Fragment key={props.name}>
  {WrapperElementLeft}
  {ChosenElement
    ? ChosenElement({
        ...props.children?.props,
        ...methods,
        disabled: props.disabled,
        type: props?.type ?? "line",
        onChange: (a) => methods.setValue(props.name, a),
        value: value,
        error: error,
        // error: formState.errors?.[field.name],
        source: "InputWrapper",
      })
    : React.cloneElement(props.children, {
        ...props.children?.props,
        ...methods,
        disabled: props.disabled,
        type: props?.type ?? "line",
        onChange: (a) => methods.setValue(props.name, a),
        value: value,
        error: error,
        // error: formState.errors?.[field.name],
        source: "InputWrapper",
      })}
  {/* childrenInjected */}
  {WrapperElementRight}
</React.Fragment>

  // const WrapElem = useMemo(
  //   () =>
  //     Wrapper !== null && Wrapper !== undefined ? (
  //       <Wrapper {...props} value={value} {...props.formMethods} children={ChildComponent} />
  //     ) : <DefaultInputWrapper {...props}>{ChildComponent}</DefaultInputWrapper>,
  //   [props.label, props.noLabel, value  ]
  // );

  Logger.info(null, null, "end");

  // const injectProps = useMemo(()=>({
  //   ...props,
  //   value : value,
  //   theme: null,
  //   ...methods
  // }), [value, props.options, props.items, props.label, props.disabled,props.type])

  const injectProps = {
    ...props,
    value: value,
    theme: null,
    ...methods,
    formState
  }

  return <ChosenWrapper Wrapper={Wrapper} Default={DefaultInputWrapper} props={{ ...injectProps, children: ChildComponent }} />;
};

const ChosenWrapper = React.memo(({ Wrapper, Default, props }: { Wrapper?: any | null; Default: any; props: any }) => {
  return Wrapper ? <Wrapper {...props} /> : <Default {...props} />;
});

export default React.memo(InputInnerWrapper);
