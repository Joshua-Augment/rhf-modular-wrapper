import React from "react";
import { Form } from "../components/core/Form";
import Line from "../components/Inputs/Text/Line";
import Lines from "../components/Inputs/Text/Lines";
import WYSIWYG from "../components/Inputs/Text/WYSIWYG";
export default {
    title: 'Components/Line',
    component: Line
};
const onSubmit = (a) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:', a)));
export const LinesBootstrap = () => {
    return React.createElement(Form, { onSubmit: onSubmit },
        React.createElement(Line, { label: "Simple Form Input (Text)", name: "line.text", placeholder: "Simple Form Placeholder" }),
        React.createElement(Line, { label: "Simple Form Input (Number)", name: "line.number", placeholder: "Simple Number Placeholder", type: "number" }),
        React.createElement(Line, { label: "Simple Form Input (Email)", name: "line.email", placeholder: "Simple Email Placeholder", type: "email" }));
};
export const LinesMUI = () => {
    return React.createElement(Form, { onSubmit: onSubmit, style: "mui" },
        React.createElement(Line, { label: "Simple Form Input (Text)", name: "line.text", placeholder: "Simple Form Placeholder" }),
        React.createElement(Line, { label: "Simple Form Input (Number)", name: "line.number", placeholder: "Simple Number Placeholder", type: "number" }),
        React.createElement(Line, { label: "Simple Form Input (Email)", name: "line.email", placeholder: "Simple Email Placeholder", type: "email" }));
};
export const TextArea = () => {
    return React.createElement(Form, { onSubmit: onSubmit },
        React.createElement(Lines, { label: "Simple Form Input (Textarea)", name: "lines.text", placeholder: "Simple Textarea Placeholder" }),
        React.createElement(Lines, { label: "Simple Form Input (Textarea) Long", rows: 10, name: "lines.text", placeholder: "Simple Textarea Placeholder" }),
        React.createElement(Lines, { label: "Simple Form Input (Textarea) Wide", cols: 100, name: "lines.text", placeholder: "Simple Textarea Placeholder" }));
};
export const WYSIWYGEditor = () => {
    return React.createElement(Form, { onSubmit: onSubmit },
        React.createElement(WYSIWYG, { label: "Simple Form Input (WYSIWYG Editor)", name: "wysiwyg", placeholder: "Text Placeholder" }));
};
//# sourceMappingURL=Line.stories.js.map