import React from "react";
import { Form } from "../components/core/Form";
import Checkbox from "../components/Inputs/Checkboxes/Checkbox";
import CheckboxGroup from "../components/Inputs/Checkboxes/CheckboxGroup";
export default {
    title: 'Components/Checkbox',
    component: Checkbox
};
const onSubmit = (a) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:', a)));
export const CheckboxSimple = () => {
    return React.createElement(Form, { onSubmit: onSubmit },
        React.createElement(Checkbox, { label: "Simple Checkbox One", name: "checkbox.one" }),
        React.createElement(Checkbox, { label: "Simple Checkbox Two", name: "checkbox.two" }),
        React.createElement(Checkbox, { label: "Simple Checkbox Three", name: "checkbox.three" }));
};
export const CheckboxGroupExample = () => {
    return React.createElement(Form, { onSubmit: onSubmit },
        React.createElement(CheckboxGroup, { title: 'Checkbox Group with Title' },
            React.createElement(Checkbox, { label: "Simple Checkbox One", name: "checkbox.one" }),
            React.createElement(Checkbox, { label: "Simple Checkbox Two", name: "checkbox.two" }),
            React.createElement(Checkbox, { label: "Simple Checkbox Three", name: "checkbox.three" })));
};
export const CheckboxGroupExampleVertical = () => {
    return React.createElement(Form, { onSubmit: onSubmit },
        React.createElement(CheckboxGroup, { title: 'Checkbox Group with Title', orientation: "vertical" },
            React.createElement(Checkbox, { label: "Simple Checkbox One", name: "checkbox.one" }),
            React.createElement(Checkbox, { label: "Simple Checkbox Two", name: "checkbox.two" }),
            React.createElement(Checkbox, { label: "Simple Checkbox Three", name: "checkbox.three" })));
};
//# sourceMappingURL=Checkbox.stories.js.map