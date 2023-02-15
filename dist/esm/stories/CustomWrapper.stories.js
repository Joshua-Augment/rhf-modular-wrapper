import React from "react";
import { Form } from "../components/core/Form";
import Line from "../components/Inputs/Text/Line";
export default {
    title: 'Components/CustomWrapper',
    component: Line
};
const onSubmit = (a) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:', a)));
const InputWrapper = (props) => {
    return React.createElement("div", { style: { background: 'blue', textAlign: 'center' } },
        React.createElement("label", { style: { background: 'red', color: 'white' } }, props.label),
        React.createElement("div", null, props.children));
};
export const Lines = () => {
    return React.createElement(Form, { onSubmit: onSubmit, inputWrapper: InputWrapper },
        React.createElement(Line, { label: "Simple Form Input (Text)", name: "lines.text", placeholder: "Simple Form Placeholder" }),
        React.createElement(Line, { label: "Simple Form Input (Number)", name: "lines.number", placeholder: "Simple Number Placeholder", type: "number" }),
        React.createElement(Line, { label: "Simple Form Input (Email)", name: "lines.email", placeholder: "Simple Email Placeholder", type: "email" }));
};
//# sourceMappingURL=CustomWrapper.stories.js.map