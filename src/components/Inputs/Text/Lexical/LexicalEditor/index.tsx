import React from 'react'
import { IFormFrameInjector } from '../../../../core';

import {$getRoot, $getSelection} from 'lexical';
import {LexicalComposer} from '@lexical/react/LexicalComposer';
import {RichTextPlugin} from "@lexical/react/LexicalRichTextPlugin"
import {$generateHtmlFromNodes, $generateNodesFromDOM} from '@lexical/html';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {OnChangePlugin} from '@lexical/react/LexicalOnChangePlugin';
import {useLexicalComposerContext} from '@lexical/react/LexicalComposerContext';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import LexicalToolbar from '../Toolbar';
import styled from "styled-components"

interface ILexicalEditor extends IFormFrameInjector {
  theme : any,
}

const PlaceHolderWrapper = styled.div`
    position: absolute;
    bottom: 15px;
    border: none;
    background: transparent;
    width: 100%;
    text-align: center;
`

const LexicalEditor  = (props : ILexicalEditor) => {  
  const theme = {
    // Theme styling goes here
    // ...
  }

  // When the editor changes, you can get notified via the
  // LexicalOnChangePlugin!
  const onChangeHandler = (editorState, editor) => {
    
    const htmlString = $generateHtmlFromNodes(editor, null);
    console.log("[htmlstring] - ",htmlString);
    props.onChange(htmlString)


    editorState.read(() => {
      // Read the contents of the EditorState here.
      const root = $getRoot();
      const selection = $getSelection();

      console.log(root, selection);
    });
  }


  // Catch any errors that occur during Lexical updates and log them
  // or throw them as needed. If you don't throw them, Lexical will
  // try to recover gracefully without losing user data.
  const onError = (error) => {
    console.error(error);
  }

  
  
  const initialConfig = {
    namespace: 'WYSIWYG_Editor',
    theme,
    onError,
  };

  return <LexicalComposer initialConfig={initialConfig}>
  <LexicalToolbar />
  <RichTextPlugin contentEditable={<ContentEditable />} placeholder={<PlaceHolderWrapper>Enter some text...</PlaceHolderWrapper>} ErrorBoundary={LexicalErrorBoundary} />
  <OnChangePlugin onChange={onChangeHandler} />
  <HistoryPlugin />
</LexicalComposer>
}

export default LexicalEditor