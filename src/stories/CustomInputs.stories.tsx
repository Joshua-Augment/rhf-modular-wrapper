import React, { useCallback, useEffect, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import {
  Form,
  DatePicker,
  Switch,
  Line,
  Select,
  TSelectOption,
  DropzoneUploader,
  SubmitButton,
  AsyncSelect,
  TableList,
  CustomElementBaseInput,
} from "../components";
import { Template } from "./_story_template";
import * as yup from "yup";

export default {
  title: "Components/CustomInputs",
  component: Form,
} as ComponentMeta<typeof Form>;

const BASE_SELECTS: TSelectOption[] = [
  { label: "Option 1", value: 1 },
  { label: "Option 2", value: 2 },
  { label: "Option 3", value: 3 },
  { label: "Option 4", value: 4 },
  { label: "Option 5", value: 5 },
  { label: "Option 6", value: 6 },
  { label: "Option 7", value: 7 },
  { label: "Option 8", value: 8 },
];

export const CustomInputTest = () => {
  const [output, setOutput] = useState(<p>None Yet</p>);
  const [defaultValues, setDefaultValues] = useState<any>(null);

  const [ready, setReady] = useState(false);

  const onSubmit = (a: any) =>
    new Promise((resolve, reject) => {
      console.log("[return values] - ", a);
      setOutput(<p>{JSON.stringify(a)}</p>);
    });

  const loadingOptions = useCallback((a: any, callback: any) => {
    setTimeout(() => {
      callback(BASE_SELECTS);
    }, 400);
  }, []);

  const handleInputChange = (
    input: string,
    name: string,
    all: any,
    methods?: any,
  ) => {
    return;
  };

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        defaultValues={defaultValues}
        elements={{
          line: CustomInput,
        }}
      >
        <Line
          name="line_with_default_value"
          label="Line Input with default Value"
          defaultValue="This is a test Value"
          helperText="Line Input"
        />
        <SubmitButton>test</SubmitButton>
      </Form>
    </div>
  );
};

const CustomInput = (props: CustomElementBaseInput) => {
  console.log("Custom Input props : ", props);
  return (
    <div style={{ padding: "5px", backgroundColor: "gainsboro" }}>
      <input
        name={props.name}
        onChange={(e) => props.onChange(e.target.value)}
        type="text"
        value={props.value}
      />
    </div>
  );
};
