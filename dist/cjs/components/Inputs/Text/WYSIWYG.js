"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
require("quill/dist/quill.snow.css");
const react_quilljs_1 = require("react-quilljs");
const react_2 = require("react");
const WYSIWYG = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({ noBorder: true }, props), (IWprops) => {
        console.log("[props] - ", IWprops);
        return react_1.default.createElement(QuillEditor, Object.assign({}, IWprops));
    }));
};
const QuillEditor = (props) => {
    const { quill, quillRef } = (0, react_quilljs_1.useQuill)();
    // Set Default
    (0, react_2.useEffect)(() => { if (props.value !== undefined && quill !== undefined) {
        quill.clipboard.dangerouslyPasteHTML(props.value);
    } }, []);
    // On CHange
    (0, react_2.useEffect)(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => { props.onChange(quillRef.current.firstChild.innerHTML); });
        }
    }, [quill]);
    return react_1.default.createElement("div", null,
        react_1.default.createElement("div", { id: props.name, ref: quillRef }));
};
exports.default = WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map