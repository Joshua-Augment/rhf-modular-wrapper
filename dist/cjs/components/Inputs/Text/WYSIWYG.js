"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const react_quill_1 = __importDefault(require("react-quill"));
require("react-quill/dist/quill.snow.css");
const useInputValnError_1 = require("../../core/hook/useInputValnError");
const WYSIWYG = (props) => {
    var _a;
    const { value, setValue } = (0, useInputValnError_1.useInputValAndError)(props.name);
    (0, react_1.useEffect)(() => {
        if (value === undefined || value === null) {
            setValue(props.name, "");
        }
    }, [value]);
    return ((0, jsx_runtime_1.jsx)(InputWrapper_1.default, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "wysiwyg" }, props, { children: (0, jsx_runtime_1.jsx)(ReactQuillWrapper, Object.assign({}, props)) })));
};
const ReactQuillWrapper = (props) => {
    const toolbarOptions = (0, react_1.useMemo)(() => [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        ["link", "image"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"], // remove formatting button
    ], []);
    return ((0, jsx_runtime_1.jsx)(react_quill_1.default, Object.assign({ theme: "snow", modules: { toolbar: toolbarOptions }, onChange: (a) => props.onChange && props.onChange(a), value: props.value, onBlur: props.onBlur }, props.quillProps)));
};
exports.default = WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map