import React, { useContext, useEffect, useMemo, useRef } from "react";
import Logger from "../../../Logger/index";
import { UseFormReturn, useWatch } from "react-hook-form";
import { FormBaseInput } from "../../../interfaces/index";
import DefaultInputWrapper from "./DefaultInputWrapper";
import { useInputValAndError } from "../../../hook/useInputValnError";
import { ThemeContext } from "../../../Form";

export interface IInputInnerWrapper extends FormBaseInput {}

export type InputWraperChildProps = {} & IInputInnerWrapper & Omit<UseFormReturn, "control">;

const InputInnerWrapper = (props: IInputInnerWrapper) =>
  props.disableController ? <InputInnerWrapperNoController {...props} /> : <InputInnerWrapperWithController {...props} />;

const InputInnerWrapperNoController = (props: IInputInnerWrapper) => {
  const { debug } = useContext(ThemeContext);
  const value = props.value ?? null;
  const error = null;
  const fieldState = {};
  const onChange = (a:any) => {};
  const onBlur = () => {};
  const methods = {
    getValues : (a ?:any) => a
  };
  const {
    inputWrapper: _propsInputWrapper,
    name: _propsName,
    options: _propsOptions,
    items: _propsItems,
    label: _propsLabel,
    noLabel: _propsNoLabel,
    type: _propsType,
    helperText: _propsHelperText,
  } = props;

  const firstUpdate = useRef(true);
  Logger.info(debug, `First Update : ${firstUpdate.current}`, `${_propsName} - InputWrapperv2`);

  const watchCalculated = useWatch({
    name: props?.calculatedField?.find !== undefined ? props.calculatedField.find : (`#_#_noinputtofind_#_#` as any),
  });
  Logger.info(debug, `Watching Calculated : ${String(watchCalculated)}`, `${_propsName} - InputWrapperv2`);

  useEffect(() => {
    // External Field
    if (props.externalStateSetter) {
      Logger.info(debug, `Setting External State`, `${_propsName} - InputWrapperv2`);
      props.externalStateSetter(value);
    }
    // On Input Change
    if (props.onInputChange && !firstUpdate.current) {
      Logger.info(debug, `First Time Setting`, `${_propsName} - InputWrapperv2`);
      props.onInputChange(value, _propsName, methods.getValues(), { ...props.formMethods });
    }

    firstUpdate.current = false;
  }, [value]);

  useEffect(() => {
    // Calculated Fields
    if (props.calculatedField) {
      Logger.info(debug, `Calculating Field...`, `${_propsName} - calculatedField`, "start");
      if (props.calculatedField.isPromise === true) {
        Logger.info(debug, `Promise expected`, `${_propsName} - calculatedField`);
        props.calculatedField
          .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
          // .then(data => { contextSetValue(props.name, data) })
          .then((data) => {
            Logger.info(debug, `Setting Value! Calculated Data : ${String(data)}`, `${_propsName} - calculatedField`);
            Logger.info(debug, null, null, "end");
            console.log(`[Setting] Setting value for ${props.name} by calculation (async)`);
            // methods.setValue(props.name, data);
            onChange(data);
          });
      } else {
        const _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
        Logger.info(debug, `Setting Value! No Promise expected. Value Expected : ${String(_result)}`, `${_propsName} - calculatedField`);
        // methods.setValue(props.name, _result);
        onChange(_result);
        Logger.info(debug, null, null, "end");
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

  Logger.info(debug, `Setting Left Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementLeft = useMemo(() => {
    Logger.info(debug, `useMemo`, `WrapperElementLeft`, "start");
    Logger.info(debug, null, null, "end");
    return props?.buttons?.left
      ? WrapperMaker(
          props?.buttons?.wrapper?.left,
          props?.buttons?.wrapper?.all,
          props?.buttons?.left ? props.buttons.left(value, props.name, methods.getValues) : null
        )
      : null;
  }, [props?.buttons?.left, props?.buttons?.wrapper?.left, props?.buttons?.wrapper?.all]);

  Logger.info(debug, `Setting Right Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementRight = useMemo(() => {
    Logger.info(debug, `useMemo`, `WrapperElementRight`, "start");
    Logger.info(debug, null, null, "end");
    return props?.buttons?.right
      ? WrapperMaker(
          props?.buttons?.wrapper?.right,
          props?.buttons?.wrapper?.all,
          props?.buttons?.right ? props.buttons.right(value, props.name, methods.getValues) : null
        )
      : null;
  }, [props?.buttons?.right, props?.buttons?.wrapper?.right, props?.buttons?.wrapper?.all]);

  Logger.info(debug, `Setting Chosen Element`, `${_propsName} - InputWrapperv2`);

  const ChosenElement = props.inputElement;

  const Wrapper: any = useMemo(() => _propsInputWrapper, [_propsInputWrapper]);

  const ChildComponent = (
    <React.Fragment key={props.name}>
      {WrapperElementLeft}
      {ChosenElement
        ? ChosenElement({
            ...props.children?.props,
            ...methods,
            disabled: props.disabled,
            type: props?.type ?? "line",
            onBlur,
            onChange,
            value,
            error,
            fieldState,
            // formState,
            source: "InputWrapper/index",
          })
        : React.cloneElement(props.children, {
            ...props.children?.props,
            ...methods,
            // formState,
            disabled: props.disabled,
            type: props?.type ?? "line",
            onBlur,
            onChange,
            value,
            error,
            fieldState,
            source: "InputWrapper/index",
          })}
      {WrapperElementRight}
    </React.Fragment>
  );

  Logger.info(debug, null, null, "end");

  const injectProps = {
    ...props,
    value: value,
    error: error,
    theme: null,
    fieldState,
    onChange,
    onBlur,
    ...methods,
    // formState,
  };

  return <ChosenWrapper Wrapper={Wrapper} Default={DefaultInputWrapper} props={{ ...injectProps, children: ChildComponent }} />;
};

const InputInnerWrapperWithController = (props: IInputInnerWrapper) => {
  const { debug } = useContext(ThemeContext);
  const { value, error, fieldState, onChange, onBlur, ...methods } = useInputValAndError(
    props.name,
    props.defaultValue ?? props.empty ?? null,
    props.disableController ?? false
  );
  const {
    inputWrapper: _propsInputWrapper,
    name: _propsName,
    options: _propsOptions,
    items: _propsItems,
    label: _propsLabel,
    noLabel: _propsNoLabel,
    type: _propsType,
    helperText: _propsHelperText,
  } = props;

  const firstUpdate = useRef(true);
  Logger.info(debug, `First Update : ${firstUpdate.current}`, `${_propsName} - InputWrapperv2`);

  const watchCalculated = useWatch({
    name: props?.calculatedField?.find !== undefined ? props.calculatedField.find : (`#_#_noinputtofind_#_#` as any),
  });
  Logger.info(debug, `Watching Calculated : ${String(watchCalculated)}`, `${_propsName} - InputWrapperv2`);

  useEffect(() => {
    // External Field
    if (props.externalStateSetter) {
      Logger.info(debug, `Setting External State`, `${_propsName} - InputWrapperv2`);
      props.externalStateSetter(value);
    }
    // On Input Change
    if (props.onInputChange && !firstUpdate.current) {
      Logger.info(debug, `First Time Setting`, `${_propsName} - InputWrapperv2`);
      props.onInputChange(value, _propsName, methods.getValues(), { ...props.formMethods });
    }

    firstUpdate.current = false;
  }, [value]);

  useEffect(() => {
    // Calculated Fields
    if (props.calculatedField) {
      Logger.info(debug, `Calculating Field...`, `${_propsName} - calculatedField`, "start");
      if (props.calculatedField.isPromise === true) {
        Logger.info(debug, `Promise expected`, `${_propsName} - calculatedField`);
        props.calculatedField
          .calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues())
          // .then(data => { contextSetValue(props.name, data) })
          .then((data) => {
            Logger.info(debug, `Setting Value! Calculated Data : ${String(data)}`, `${_propsName} - calculatedField`);
            Logger.info(debug, null, null, "end");
            console.log(`[Setting] Setting value for ${props.name} by calculation (async)`);
            // methods.setValue(props.name, data);
            onChange(data);
          });
      } else {
        const _result = props.calculatedField.calculate(value, props.name, methods.getValues(props.calculatedField.find), methods.getValues());
        Logger.info(debug, `Setting Value! No Promise expected. Value Expected : ${String(_result)}`, `${_propsName} - calculatedField`);
        // methods.setValue(props.name, _result);
        onChange(_result);
        Logger.info(debug, null, null, "end");
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

  Logger.info(debug, `Setting Left Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementLeft = useMemo(() => {
    Logger.info(debug, `useMemo`, `WrapperElementLeft`, "start");
    Logger.info(debug, null, null, "end");
    return props?.buttons?.left
      ? WrapperMaker(
          props?.buttons?.wrapper?.left,
          props?.buttons?.wrapper?.all,
          props?.buttons?.left ? props.buttons.left(value, props.name, methods.getValues) : null
        )
      : null;
  }, [props?.buttons?.left, props?.buttons?.wrapper?.left, props?.buttons?.wrapper?.all]);

  Logger.info(debug, `Setting Right Wrapper`, `${_propsName} - InputWrapperv2`);
  const WrapperElementRight = useMemo(() => {
    Logger.info(debug, `useMemo`, `WrapperElementRight`, "start");
    Logger.info(debug, null, null, "end");
    return props?.buttons?.right
      ? WrapperMaker(
          props?.buttons?.wrapper?.right,
          props?.buttons?.wrapper?.all,
          props?.buttons?.right ? props.buttons.right(value, props.name, methods.getValues) : null
        )
      : null;
  }, [props?.buttons?.right, props?.buttons?.wrapper?.right, props?.buttons?.wrapper?.all]);

  Logger.info(debug, `Setting Chosen Element`, `${_propsName} - InputWrapperv2`);

  const ChosenElement = props.inputElement;

  const Wrapper: any = useMemo(() => _propsInputWrapper, [_propsInputWrapper]);

  const ChildComponent = (
    <React.Fragment key={props.name}>
      {WrapperElementLeft}
      {ChosenElement
        ? ChosenElement({
            ...props.children?.props,
            ...methods,
            disabled: props.disabled,
            type: props?.type ?? "line",
            onBlur,
            onChange,
            value,
            error,
            fieldState,
            // formState,
            source: "InputWrapper/index",
          })
        : React.cloneElement(props.children, {
            ...props.children?.props,
            ...methods,
            // formState,
            disabled: props.disabled,
            type: props?.type ?? "line",
            onBlur,
            onChange,
            value,
            error,
            fieldState,
            source: "InputWrapper/index",
          })}
      {WrapperElementRight}
    </React.Fragment>
  );

  Logger.info(debug, null, null, "end");

  const injectProps = {
    ...props,
    value: value,
    error: error,
    theme: null,
    fieldState,
    onChange,
    onBlur,
    ...methods,
    // formState,
  };

  return <ChosenWrapper Wrapper={Wrapper} Default={DefaultInputWrapper} props={{ ...injectProps, children: ChildComponent }} />;
};

const ChosenWrapper = React.memo(({ Wrapper, Default, props }: { Wrapper?: any | null; Default: any; props: any }) => {
  return Wrapper ? <Wrapper {...props} /> : <Default {...props} />;
});

export default InputInnerWrapper;
