import React, { useEffect, useState } from "react";
import { ComponentMeta } from "@storybook/react";
import { Form, SubmitButton } from "../components/core/Form";

import Line from "../components/Inputs/Text/Line";
import Lines from "../components/Inputs/Text/Lines";
import WYSIWYG from "../components/Inputs/Text/WYSIWYG";
import { Template } from "./_story_template";

export default {
  title: "Components/Inputs/Line",
  component: Line,
} as ComponentMeta<typeof Line>;

// const onSubmit = (a:any) => new Promise((resolve, reject) => resolve(// console.log('FormSubmission:',a)))

export const LinesBootstrap = Template.bind({
  defaultValues: {
    line: {
      textDef: "Default Value Given",
    },
  },
});
LinesBootstrap.args = {
  defaultValues: {
    textDef: "Default Value Given",
    numberDef: 4,
    line: {
      emailDef: "2@s.com",
    },
  },
  children: (
    <>
      {/* <Line label="Simple Form Input (Text)" name="line.text" placeholder="Simple Form Placeholder" /> */}
      <Line label="Simple Form Input (Text) - Default Value" name="textDef" placeholder="Simple Form Placeholder" />
      <Line label="Simple Form Input (Number) - Default Value" name="numberDef" placeholder="Simple Number Placeholder" type="number" />
      <Line label="Simple Form Input (Email) - Default Value" name="line.emailDef" placeholder="Simple Email Placeholder" type="email" />
    </>
  ), 
};

export const LineWithButton = Template.bind({});
LineWithButton.args = {
  children: (
    <>
      <Line
        label="Line with Button"
        name="line_button"
        buttons={{
          left: () => (
            <div>
              <button onClick={(a) => alert(`Value is ${a} From Button #1!`)}>#L1</button>
              <button onClick={(a) => alert(`Value is ${a} From Button #2!`)}>#L2</button>
            </div>
          ),
          right: () => (
            <div>
              <button onClick={(a) => alert(`Value is ${a} From Button #R1!`)}>#R1</button>
              <button onClick={(a) => alert(`Value is ${a} From Button #R2!`)}>#R2</button>
            </div>
          ),
        }}
      />
      <Line
        label="Line with ReactNode Labels"
        name="line_button_reactElemetn"
        buttons={{
          left: (value, name) => (
            <div>
              <button onClick={(a) => alert(`Value is ${value} for Input ${name} From Button #1!`)}>#L1</button>
              <button onClick={(a) => alert(`Value is ${value} for Input ${name} From Button #2!`)}>#L2</button>
            </div>
          ),
        }}
      />
    </>
  ),
};

export const TextArea = Template.bind({});
TextArea.args = {
  defaultValues: {
    lines: {
      textDef: "Testing Default Values",
      longDef: "Testing Long Text Area Default Values",
      wideDef: "Testing Wide Text Area Default Values",
    },
  },
  children: (
    <>
      <Lines label="Simple Form Input (Textarea)" name="lines.text" placeholder="Simple Textarea Placeholder" />
      <Lines label="Simple Form Input (Textarea) Long" rows={10} name="lines.long" placeholder="Simple Textarea Placeholder" />
      <Lines label="Simple Form Input (Textarea) Wide" cols={100} name="lines.wide" placeholder="Simple Textarea Placeholder" />

      <Lines label="Simple Form Input (Textarea)" name="lines.textDef" placeholder="Simple Textarea Placeholder" />
      <Lines label="Simple Form Input (Textarea) Long" rows={10} name="lines.longDef" placeholder="Simple Textarea Placeholder" />
      <Lines label="Simple Form Input (Textarea) Wide" cols={100} name="lines.wideDef" placeholder="Simple Textarea Placeholder" />
    </>
  ),
};

export const WYSIWYGEditor = Template.bind({});
WYSIWYGEditor.args = {
  defaultValues: {
    wysiwygDef: "<p>Test</p><p><b>Bold></b><",
  },
  children: (
    <>
      <WYSIWYG label="Simple Form Input (WYSIWYG Editor)" name="wysiwyg" placeholder="Text Placeholder" />
      <WYSIWYG label="Simple Form Input (WYSIWYG Editor) with Default Values" name="wysiwygDef" placeholder="Text Placeholder" />
    </>
  ),
};

export const WYSIWYGEditorWhenStateChanges = () => {
  const [response, setResponse] = useState<string | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setResponse("Testing One Two Three");
    }, 1000);
  }, []);

  const _onSubmit = (a: any) =>
    new Promise((resolve, reject) => {
      // console.log("[Raw Submit] - ",a)
      setResponse(JSON.stringify(a, (key, value) => (key == "parent" ? null : value), 2));
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
        <WYSIWYG label="Simple Form Input (WYSIWYG Editor)" name="wysiwyg" placeholder="Text Placeholder" />
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </div>
  );
};
