import React from "react";
import { FieldValues } from "react-hook-form/dist/types";
import { FormFrameWrapperProps, IForm, ISubmitButton } from "./interfaces/index";
import "../styling/form_bootstrap.css";
import "../styling/core.css";
import { TListInputs } from "./interfaces/lists";
export type TTemplateContext = {
    inputTemplate: null | React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>;
    buttonTemplate: null | React.ComponentType<ISubmitButton> | React.ComponentType<any>;
    elements: Record<TListInputs, React.ComponentType<any>>;
    debug: boolean;
};
export declare const ThemeContext: React.Context<TTemplateContext>;
export declare const Form: <T extends FieldValues>(props: IForm<T>) => import("react/jsx-runtime").JSX.Element;
export declare const SubmitButton: (props: ISubmitButton) => import("react/jsx-runtime").JSX.Element;
