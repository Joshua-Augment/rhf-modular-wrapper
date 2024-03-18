import { UseFormReturn } from "react-hook-form";
import { FormBaseInput } from "../../../interfaces/index";
export interface IInputInnerWrapper extends FormBaseInput {
}
export type InputWraperChildProps = {} & IInputInnerWrapper & Omit<UseFormReturn, "control">;
declare const InputInnerWrapper: (props: IInputInnerWrapper) => import("react/jsx-runtime").JSX.Element;
export default InputInnerWrapper;
