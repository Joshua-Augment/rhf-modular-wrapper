"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WYSIWYGEditor = exports.TextArea = exports.LinesMUI = exports.LinesBootstrap = void 0;
const react_1 = __importDefault(require("react"));
const Form_1 = require("../components/core/Form");
const Line_1 = __importDefault(require("../components/Inputs/Text/Line"));
const Lines_1 = __importDefault(require("../components/Inputs/Text/Lines"));
const WYSIWYG_1 = __importDefault(require("../components/Inputs/Text/WYSIWYG"));
exports.default = {
    title: 'Components/Line',
    component: Line_1.default
};
const onSubmit = (a) => new Promise((resolve, reject) => resolve(console.log('FormSubmission:', a)));
const LinesBootstrap = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit },
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Text)", name: "line.text", placeholder: "Simple Form Placeholder" }),
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Number)", name: "line.number", placeholder: "Simple Number Placeholder", type: "number" }),
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Email)", name: "line.email", placeholder: "Simple Email Placeholder", type: "email" }));
};
exports.LinesBootstrap = LinesBootstrap;
const LinesMUI = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit, style: "mui" },
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Text)", name: "line.text", placeholder: "Simple Form Placeholder" }),
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Number)", name: "line.number", placeholder: "Simple Number Placeholder", type: "number" }),
        react_1.default.createElement(Line_1.default, { label: "Simple Form Input (Email)", name: "line.email", placeholder: "Simple Email Placeholder", type: "email" }));
};
exports.LinesMUI = LinesMUI;
const TextArea = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit },
        react_1.default.createElement(Lines_1.default, { label: "Simple Form Input (Textarea)", name: "lines.text", placeholder: "Simple Textarea Placeholder" }),
        react_1.default.createElement(Lines_1.default, { label: "Simple Form Input (Textarea) Long", rows: 10, name: "lines.text", placeholder: "Simple Textarea Placeholder" }),
        react_1.default.createElement(Lines_1.default, { label: "Simple Form Input (Textarea) Wide", cols: 100, name: "lines.text", placeholder: "Simple Textarea Placeholder" }));
};
exports.TextArea = TextArea;
const WYSIWYGEditor = () => {
    return react_1.default.createElement(Form_1.Form, { onSubmit: onSubmit },
        react_1.default.createElement(WYSIWYG_1.default, { label: "Simple Form Input (WYSIWYG Editor)", name: "wysiwyg", placeholder: "Text Placeholder" }));
};
exports.WYSIWYGEditor = WYSIWYGEditor;
//# sourceMappingURL=Line.stories.js.map