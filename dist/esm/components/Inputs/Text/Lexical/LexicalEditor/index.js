import React from 'react';
import { $generateHtmlFromNodes } from '@lexical/html';
import { $getRoot, $getSelection } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import LexicalToolbar from '../Toolbar';
import styled from "styled-components";
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
const PlaceHolderWrapper = styled.div `
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
    // const onChangeHandler = (editorState, editor) => {
    //   // const htmlString = $generateHtmlFromNodes(editor, null);
    //   // // console.log("[htmlstring] - ",htmlString);
    //   props.onChange(editorState)
    //   editorState.read(() => {
    //     // Read the contents of the EditorState here.
    //     const root = $getRoot();
    //     const selection = $getSelection();
    //     // console.log(root, selection);
    //   });
    // }
    // Catch any errors that occur during Lexical updates and log them
    // or throw them as needed. If you don't throw them, Lexical will
    // try to recover gracefully without losing user data.
    const onError = (error) => {
        // console.error(error);
    };
    const initialConfig = {
        namespace: 'WYSIWYG_Editor',
        theme,
        onError,
    };
    return React.createElement(LexicalComposer, { initialConfig: initialConfig },
        React.createElement(LexicalToolbar, null),
        React.createElement(RichTextPlugin, { contentEditable: React.createElement(ContentEditable, { style: { borderRadius: '0 0 0.5rem 0.5rem' } }), placeholder: React.createElement(PlaceHolderWrapper, null, "Enter some text..."), ErrorBoundary: LexicalErrorBoundary }),
        React.createElement(OnChangeHandler, { onChange: props.onChange }),
        React.createElement(HistoryPlugin, null));
};
const OnChangeHandler = ({ onChange }) => {
    const [editor] = useLexicalComposerContext();
    const onChangeHandler = (state) => {
        editor.update(() => {
            const htmlString = $generateHtmlFromNodes(editor, null);
            // console.log("[htmlstring] - ", htmlString);
            onChange(Object.assign(Object.assign({}, state), { "html": htmlString }));
        });
        state.read(() => {
            // Read the contents of the EditorState here.
            const root = $getRoot();
            const selection = $getSelection();
            // console.log(root, selection);
        });
    };
    return React.createElement(OnChangePlugin, { onChange: onChangeHandler });
};
export default LexicalEditor;
//# sourceMappingURL=index.js.map