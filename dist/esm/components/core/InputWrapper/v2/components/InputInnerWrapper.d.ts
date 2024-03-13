import React from "react";
import { UseFormReturn } from "react-hook-form";
import { FormBaseInput } from "../../../interfaces";
export interface IInputInnerWrapper extends FormBaseInput {
}
export type InputWraperChildProps = {} & IInputInnerWrapper & Omit<UseFormReturn, 'control'>;
declare const InputInnerWrapper: (props: IInputInnerWrapper) => React.JSX.Element;
export default InputInnerWrapper;
