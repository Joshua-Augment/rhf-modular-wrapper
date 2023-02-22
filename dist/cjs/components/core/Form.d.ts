import React from 'react';
import { FieldValues } from "react-hook-form/dist/types";
import { FormFrameWrapperProps, IForm, ISubmitButton } from './interfaces';
import "../styling/core.css";
type TTemplateContext = {
    inputTemplate: null | React.ComponentType<FormFrameWrapperProps> | React.ComponentType<any>;
    buttonTemplate: null | React.ComponentType<ISubmitButton> | React.ComponentType<any>;
};
export declare const ThemeContext: React.Context<TTemplateContext>;
export declare const Form: <T extends FieldValues>(props: IForm<T>) => JSX.Element;
export declare const SubmitButton: (props: ISubmitButton) => JSX.Element;
export {};
