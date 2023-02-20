import React, {useCallback, useEffect} from 'react'
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { mergeRegister } from '@lexical/utils';
import styled from "styled-components"
import {FaUndo, FaRedo, FaBold, FaItalic, FaUnderline, FaLink, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify} from "react-icons/fa"

import { $getRoot,$getSelection,$isRangeSelection,FORMAT_TEXT_COMMAND,FORMAT_ELEMENT_COMMAND,UNDO_COMMAND,REDO_COMMAND } from 'lexical';
import { SquareButton, VerticalSpacer } from './components/styled_components';
import DropdownButton from './components/DropdownButton';

const ToolbarWrapper = styled.div`
  display: flex !important;
  justify-content: center;
  align-content: center;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  border-top : 1px solid gainsboro;
  border-left : 1px solid gainsboro;
  border-right : 1px solid gainsboro;
  background-color: #dcdcdc;
  border-radius: 0.5rem 0.5rem 0 0;
`

const LexicalToolbar = () => {
  const [editor] = useLexicalComposerContext();

  
  const [isBold, setIsBold] = React.useState(false);
  const [isItalic, setIsItalic] = React.useState(false);
  const [isStrikethrough, setIsStrikethrough] = React.useState(false);
  const [isUnderline, setIsUnderline] = React.useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat('bold'));
      setIsItalic(selection.hasFormat('italic'));
      setIsStrikethrough(selection.hasFormat('strikethrough'));
      setIsUnderline(selection.hasFormat('underline'));
    }
  }, [editor]);

  useEffect(() => {
    return mergeRegister(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          updateToolbar();
        });
      })
    );
  }, [updateToolbar, editor]);

  return (
    <ToolbarWrapper>
      <SquareButton><FaUndo /></SquareButton>
      <SquareButton><FaRedo /></SquareButton>
      <VerticalSpacer/>
      <SquareButton><FaBold /></SquareButton>
      <SquareButton><FaItalic /></SquareButton>
      <SquareButton><FaUnderline /></SquareButton>
      <VerticalSpacer/>
      <SquareButton><FaLink /></SquareButton>
      <VerticalSpacer/>
      <DropdownButton options={[
        {id : "10", item: "10px", clickHandler : ()=>{}},
        {id : "11", item: "11px", clickHandler : ()=>{}},
        {id : "12", item: "12px", clickHandler : ()=>{}},
        {id : "13", item: "13px", clickHandler : ()=>{}},
        {id : "14", item: "14px", clickHandler : ()=>{}},
        {id : "15", item: "15px", clickHandler : ()=>{}},
        {id : "16", item: "16px", clickHandler : ()=>{}},
        {id : "17", item: "17px", clickHandler : ()=>{}},
        {id : "18", item: "18px", clickHandler : ()=>{}},
        {id : "19", item: "19px", clickHandler : ()=>{}},
        {id : "20", item: "20px", clickHandler : ()=>{}},
      ]} />
      <DropdownButton centered options={[
        {id:'1',item:<FaAlignLeft />, clickHandler : ()=>{}},
        {id:'2',item:<FaAlignCenter />, clickHandler : ()=>{}},
        {id:'3',item:<FaAlignRight />, clickHandler : ()=>{}},
        {id:'4',item:<FaAlignJustify />, clickHandler : ()=>{}}
      ]} />
    </ToolbarWrapper>
  )
}

export default LexicalToolbar