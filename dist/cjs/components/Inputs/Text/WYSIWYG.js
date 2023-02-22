"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const InputWrapper_1 = __importDefault(require("../../core/InputWrapper"));
const LexicalEditor_1 = __importDefault(require("./Lexical/LexicalEditor"));
const WYSIWYG = (props) => {
    return (react_1.default.createElement(InputWrapper_1.default, Object.assign({}, props), (IWprops) => {
        console.log("[props] - ", IWprops);
        return react_1.default.createElement(LexicalEditor_1.default, Object.assign({}, IWprops, { theme: props.theme }));
    }));
};
exports.default = WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map