"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const react_1 = __importDefault(require("react"));
const StyleDropDown_1 = __importDefault(require("../../core/StyleDropDown"));
const FamilyDropDown = (props) => {
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    const options = [
        { id: "Arial", item: "Arial", clickHandler: () => { } },
        { id: "Courier New", item: "Courier New", clickHandler: () => { } },
        { id: "Georgia", item: "Georgia", clickHandler: () => { } },
        { id: "Times New Roman", item: "Times New Roman", clickHandler: () => { } },
        { id: "Trebuchet MS", item: "Trebuchet MS", clickHandler: () => { } },
        { id: "Verdana", item: "Verdana", clickHandler: () => { } },
    ];
    return (react_1.default.createElement(StyleDropDown_1.default, { value: props.fontFamily, style: "font-family", options: options, editor: editor }));
};
exports.default = FamilyDropDown;
//# sourceMappingURL=index.js.map