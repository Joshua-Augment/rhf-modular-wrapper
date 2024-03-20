import React from "react";
import { IYesNo, YesNoButtonOptions } from "../../core";
import InputWrapper from "../../core/InputWrapper/index";
import styled from "styled-components";

const YesNo = (props: IYesNo) => {
  return (
    <InputWrapper empty={false} type={props.yesno} {...props} id={`${props.name}`} noLabel noBorder customClasses={{ wrapperClassName: "form-check" }}>
      <_YesNo {...props} />
    </InputWrapper>
  );
};

const _YesNo = (props: any) => {
  const buttonHandler = (buttonVal: any, extHandler?: (someVal: string) => Promise<boolean>) => {
    if (extHandler) {
      extHandler(props.value).then((a) => {
        if (a) {
          props.onChange(a);
        }
      });
    } else {
      props.onChange(buttonVal);
    }
  };

  const buttonGenerator = (
    label: string,
    valueOfButton: any,
    extHandler: any,
    ButtonElem: React.FunctionComponent<any> & { children: any },
    color: string,
    key?: string
  ) => {
    return (
      <ButtonElem
        className={props.inputClass}
        style={{ ...props.inputStyle }}
        active={valueOfButton === props.value}
        key={key ?? `yng-${props.name}-${valueOfButton}`}
        type="button"
        onClick={() => buttonHandler(valueOfButton, extHandler)}
        bgColor={color}
      >
        {label}
      </ButtonElem>
    );
  };

  return (
    <div
      style={{ display: "flex", width: 100 * (2 + (props.otherOptions ? props.otherOptions.length : 0)), ...props.wrapperStyle, ...props.style }}
      className={`${props.className} ${props.wrapperClass}`}
    >
      {buttonGenerator(
        (props.yes && props.yes.label) ?? "Yes",
        props?.yes?.value ?? true,
        props.yes?.extHandler,
        props.yes?.element ?? Button,
        props.yes?.color ?? "green"
      )}
      {buttonGenerator(
        (props.no && props.no.label) ?? "No",
        props?.no?.value ?? false,
        props.no?.extHandler,
        props.no?.element ?? Button,
        props.no?.color ?? "red"
      )}
      {props.otherOptions &&
        props.otherOptions.map((option: YesNoButtonOptions, i: number) =>
          buttonGenerator(
            option.label ?? `Option ${i}`,
            option.value ?? i,
            option.extHandler,
            option.element ?? Button,
            option.color ?? "#22ffff4",
            `yn-${props.name}-eo-${i}`
          )
        )}
    </div>
  );
};

const Button: any = styled.button`
  padding: 10px;
  border-radius: 5px;
  border-color: ${({ active }: any) => (active ? "black" : "transparent")};
  margin: 5px;
  font-size: 1.2em;
  background-color: ${({ bgColor, active }: any) => (active ? bgColor ?? "#44b5ee2" : "gainsboro")};
  color: ${({ active, bgColor }: any) => (active ? "white" : bgColor ?? "#44b5ee2")};
  width: 100%;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  box-shadow: none;
  filter: brightness(${({ active }: any) => (active ? "110%" : "100%")});

  &:hover {
    filter: brightness(110%);
    box-shadow: 1px 1px 10px 1px ${({ active, bgColor }: any) => (active ? bgColor ?? "#44b5ee2" : "#989696")};
  }
`;

export default YesNo;
