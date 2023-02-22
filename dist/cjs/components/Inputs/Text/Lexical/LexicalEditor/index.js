"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const lexical_1 = require("lexical");
const LexicalComposer_1 = require("@lexical/react/LexicalComposer");
const LexicalRichTextPlugin_1 = require("@lexical/react/LexicalRichTextPlugin");
const LexicalContentEditable_1 = require("@lexical/react/LexicalContentEditable");
const LexicalHistoryPlugin_1 = require("@lexical/react/LexicalHistoryPlugin");
const LexicalOnChangePlugin_1 = require("@lexical/react/LexicalOnChangePlugin");
const LexicalErrorBoundary_1 = __importDefault(require("@lexical/react/LexicalErrorBoundary"));
const Toolbar_1 = __importDefault(require("../Toolbar"));
const styled_components_1 = __importDefault(require("styled-components"));
const PlaceHolderWrapper = styled_components_1.default.div `
  pointer-events: none;
  position: absolute;
  bottom: 15px;
  border: none !important;
  background: transparent !important;
  width: 100%;
  text-align: center;
`;
const LexicalEditor = (props) => {
    const theme = {
    // Theme styling goes here
    // ...
    };
    // When the editor changes, you can get notified via the
    // LexicalOnChangePlugin!
    const onChangeHandler = (editorState, editor) => {
        // const htmlString = $generateHtmlFromNodes(editor, null);
        // console.log("[htmlstring] - ",htmlString);
        props.onChange(editorState);
        editorState.read(() => {
            // Read the contents of the EditorState here.
            const root = (0, lexical_1.$getRoot)();
            const selection = (0, lexical_1.$getSelection)();
            console.log(root, selection);
        });
    };
    // Catch any errors that occur during Lexical updates and log them
    // or throw them as needed. If you don't throw them, Lexical will
    // try to recover gracefully without losing user data.
    const onError = (error) => {
        console.error(error);
    };
    const initialConfig = {
        namespace: 'WYSIWYG_Editor',
        theme,
        onError,
    };
    return react_1.default.createElement(LexicalComposer_1.LexicalComposer, { initialConfig: initialConfig },
        react_1.default.createElement(Toolbar_1.default, null),
        react_1.default.createElement(LexicalRichTextPlugin_1.RichTextPlugin, { contentEditable: react_1.default.createElement(LexicalContentEditable_1.ContentEditable, { style: { borderRadius: '0 0 0.5rem 0.5rem' } }), placeholder: react_1.default.createElement(PlaceHolderWrapper, null, "Enter some text..."), ErrorBoundary: LexicalErrorBoundary_1.default }),
        react_1.default.createElement(LexicalOnChangePlugin_1.OnChangePlugin, { onChange: onChangeHandler }),
        react_1.default.createElement(LexicalHistoryPlugin_1.HistoryPlugin, null));
};
exports.default = LexicalEditor;
//# sourceMappingURL=index.js.map