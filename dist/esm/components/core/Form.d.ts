import React from 'react';
import { FieldValues } from "react-hook-form/dist/types";
import { FormFrameWrapperProps, IForm } from './interfaces';
import "../styling/core.css";
export declare const ThemeContext: React.Context<React.ComponentType<any> | React.ComponentType<FormFrameWrapperProps> | null>;
export declare const Form: <T extends FieldValues>(props: IForm<T>) => JSX.Element;
