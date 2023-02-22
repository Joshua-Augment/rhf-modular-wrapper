"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const react_1 = __importDefault(require("react"));
const StyleDropDown_1 = __importDefault(require("../../core/StyleDropDown"));
const FontDropDown = (props) => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const options = [
        { id: "10px", item: "10px", clickHandler: () => { } },
        { id: "11px", item: "11px", clickHandler: () => { } },
        { id: "12px", item: "12px", clickHandler: () => { } },
        { id: "13px", item: "13px", clickHandler: () => { } },
        { id: "14px", item: "14px", clickHandler: () => { } },
        { id: "15px", item: "15px", clickHandler: () => { } },
        { id: "16px", item: "16px", clickHandler: () => { } },
        { id: "17px", item: "17px", clickHandler: () => { } },
        { id: "18px", item: "18px", clickHandler: () => { } },
        { id: "19px", item: "19px", clickHandler: () => { } },
        { id: "20px", item: "20px", clickHandler: () => { } },
    ];
    return (react_1.default.createElement(StyleDropDown_1.default, { value: props.fontSize, style: "font-size", options: options, editor: editor }));
};
exports.default = FontDropDown;
//# sourceMappingURL=index.js.map