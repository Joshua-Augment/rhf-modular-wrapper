import React, { useEffect, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import {
  Select,
  AsyncSelect,
  TSelectOption,
  Form,
  SubmitButton,
} from "../components";

import { Template, TemplateWithAsyncArray } from "./_story_template";

export default {
  title: "Components/Inputs/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

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

export const SimpleSelect = Template.bind({});
SimpleSelect.args = {
  children: (
    <Select label="Simple Select" name="select" options={BASE_SELECTS} />
  ),
};

export const SimpleSelectOmit = Template.bind({});
SimpleSelectOmit.args = {
  children: (
    <Select
      label="Simple Select"
      name="select-omit"
      options={BASE_SELECTS}
      omitOptions={[2, 7, { value: 4, label: "Somelabe" }, 8]}
    />
  ),
};

export const SimpleSelectDisabled = Template.bind({});
SimpleSelectDisabled.args = {
  children: (
    <Select
      disabled
      label="Simple Select"
      name="select"
      options={BASE_SELECTS}
    />
  ),
};

export const SimpleSelectCreatable = Template.bind({});
SimpleSelectCreatable.args = {
  children: (
    <Select
      isCreatable
      label="Simple Select"
      name="select"
      options={BASE_SELECTS}
    />
  ),
};

const asyncHandler = (a: string) =>
new Promise<TSelectOption[]>((resolve, reject) => {
  setTimeout(() => {
    resolve(
      BASE_SELECTS.filter((x) =>
        a === "" ? true : x.label.toString().includes(a),
      ),
    );
  }, 400);
});

export const SimpleAsyncSelectCreatable = Template.bind({});
SimpleAsyncSelectCreatable.args = {
  children: (
    <AsyncSelect
      isCreatable
      label="Simple Select"
      name="select"
      loadOptions={asyncHandler}
    />
  ),
};

export const SimpleAsyncSelect = () => {
  const [response, setResponse] = useState<string | null>(null);

  const asyncHandler = (a: string) =>
    new Promise<TSelectOption[]>((resolve, reject) => {
      setTimeout(() => {
        resolve(
          BASE_SELECTS.filter((x) =>
            a === "" ? true : x.label.toString().includes(a),
          ),
        );
      }, 400);
    });

  const _onSubmit = (a: any) =>
    new Promise((resolve, reject) => {
      // console.log("[Raw Submit] - ",a)
      setResponse(
        JSON.stringify(a, (key, value) => (key == "parent" ? null : value), 2),
      );
    });

  return (
    <div>
      <p
        style={{
          margin: "10px",
          padding: "5px",
          border: "1px solid blue",
          borderRadius: "5px",
        }}
      >
        Submitted Object : {response}
      </p>
      <Form onSubmit={_onSubmit}>
        <AsyncSelect
          cachedOptions
          defaultOptions
          loadOptions={asyncHandler}
          label="Simple Select"
          name="select"
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};

export const SimpleAsyncSelectOmit = () => {
  const [response, setResponse] = useState<string | null>(null);

  const asyncHandler = (a: string, callback: Function) =>
    new Promise<TSelectOption[]>((resolve, reject) => {
      setTimeout(() => {
        callback(
          BASE_SELECTS.filter((x) =>
            a === ""
              ? true
              : x.label.toString().toLowerCase().includes(a.toLowerCase()),
          ),
        );
      }, 400);
    });

  const _onSubmit = (a: any) =>
    new Promise((resolve, reject) => {
      // console.log("[Raw Submit] - ",a)
      setResponse(
        JSON.stringify(a, (key, value) => (key == "parent" ? null : value), 2),
      );
    });

  return (
    <div>
      <p
        style={{
          margin: "10px",
          padding: "5px",
          border: "1px solid blue",
          borderRadius: "5px",
        }}
      >
        Submitted Object : {response}
      </p>
      <Form onSubmit={_onSubmit}>
        <AsyncSelect
          omitOptions={[1, 4, 6]}
          cachedOptions
          defaultOptions
          loadOptions={asyncHandler}
          label="Simple Select"
          name="select"
        />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};

export const SimpleSelectwithState = () => {
  const [response, setResponse] = useState<string | null>(null);
  const [options, setOptions] = useState<TSelectOption[]>([]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setOptions(BASE_SELECTS);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  const _onSubmit = (a: any) =>
    new Promise((resolve, reject) => {
      // console.log("[Raw Submit] - ",a)
      setResponse(
        JSON.stringify(a, (key, value) => (key == "parent" ? null : value), 2),
      );
    });

  return (
    <div>
      <p
        style={{
          margin: "10px",
          padding: "5px",
          border: "1px solid blue",
          borderRadius: "5px",
        }}
      >
        Submitted Object : {response}
      </p>
      <Form onSubmit={_onSubmit}>
        <Select options={options} label="Simple Select" name="select" />
        <p>Options : {JSON.stringify(options)}</p>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};
