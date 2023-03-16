import React, { useState, useCallback, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { $getSelectionStyleValueForProperty, /* $patchStyleText */ } from "@lexical/selection";
import {$isLinkNode, TOGGLE_LINK_COMMAND} from '@lexical/link';
import styled from "styled-components";
import {
  FaUndo,
  FaStrikethrough,
  FaRedo,
  FaBold,
  FaItalic,
  FaUnderline,
  FaLink,
  FaAlignLeft,
  FaAlignCenter,
  FaAlignRight,
  FaAlignJustify,
  FaImage,
} from "react-icons/fa";

import {
  $getSelection,
  $isRangeSelection,
  FORMAT_TEXT_COMMAND,
  FORMAT_ELEMENT_COMMAND,
  UNDO_COMMAND,
  REDO_COMMAND,
} from "lexical";
import {
  SquareButton,
  VerticalSpacer,
} from "./components/core/styled_components";
import FontDropDown from "./components/Dropdowns/FontDropDown";
import FamilyDropDown from "./components/Dropdowns/FamilyDropdown";
import EmbedImageModal from "./components/Modals/EmbedImage";
import { getSelectedNode } from "../utils/getSelectedNode";
import { sanitizeUrl } from "../utils/url";

const ToolbarWrapper = styled.div`
  display: flex !important;
  justify-content: flex-start !important;
  align-content: center !important;
  align-items: center !important;
  flex-direction: row !important;
  flex-wrap: wrap !important;
  border-top: 1px solid gainsboro !important;
  border-left: 1px solid gainsboro !important;
  border-right: 1px solid gainsboro !important;
  background-color: #f1f1f1 !important;
  border-radius: 0.5rem 0.5rem 0 0 !important;
  border-bottom : 3px solid #9c9c9c !important;
`;

const DEFAULT_FONT_SIZE = "15px";
const DEFAULT_FONT_FAMILY = "Arial";
// const DEFAULT_COLOR = "#000";
// const DEFAULT_BG_COLOR = "#ffffff0";

const LexicalToolbar = () => {
  const [editor] = useLexicalComposerContext();
  // const [activeEditor, setActiveEditor] = useState(editor); //eslint-disable-line

  // const [isEditable, setIsEditable] = useState(true);
  const [openEmbedImage, setOpenEmbedImage] = useState(false)
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isStrikethrough, setIsStrikethrough] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [fontSize, setFontSize] = useState<string>(DEFAULT_FONT_SIZE);
  const [fontFamily, setFontFamily] = useState<string>("Arial");  
  const [isLink, setIsLink] = useState(false);
  // const [fontColor, setFontColor] = useState<string>("#000");
  // const [bgColor, setBgColor] = useState<string>("#fff");
  // const [isLink, setIsLink] = useState(false);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();

    if ($isRangeSelection(selection)) {
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
      setIsUnderline(selection.hasFormat("underline"));
      setFontSize(
        $getSelectionStyleValueForProperty(
          selection,
          "font-size",
          DEFAULT_FONT_SIZE
        )
      );
      setFontFamily(
        $getSelectionStyleValueForProperty(
          selection,
          "font-family",
          DEFAULT_FONT_FAMILY
        )
      );

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) { setIsLink(true); }
      else { setIsLink(false);}
      // setFontColor($getSelectionStyleValueForProperty(selection, "color", DEFAULT_COLOR));
      // setBgColor($getSelectionStyleValueForProperty(selection,"background-color",DEFAULT_BG_COLOR));
    }
  }, [editor]);

  const insertLink = useCallback(() => {
    if (!isLink) {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
    } else {
      editor.dispatchCommand(TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink]);

  // const applyStyleText = useCallback(
  //   (styles: Record<string, string>) => {
  //     console.log("[applyStyleText] - Style : ",styles)
  //     activeEditor.update(() => {
  //       const selection = $getSelection();
  //       if ($isRangeSelection(selection)) {
  //         $patchStyleText(selection, styles);
  //       }
  //     });
  //   },
  //   [activeEditor],
  // );

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
      <SquareButton
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
      >
        <FaUndo />
      </SquareButton>
      <SquareButton
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
      >
        <FaRedo />
      </SquareButton>
      <VerticalSpacer />
      <SquareButton active={isBold} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold")} >
        <FaBold />
      </SquareButton>

      <SquareButton active={isItalic} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic")} >
        <FaItalic />
      </SquareButton>

      <SquareButton active={isUnderline} onClick={() => {console.log("Underline",editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline"))}} >
        <FaUnderline />
      </SquareButton>

      <SquareButton title="Strike-through" active={isStrikethrough} onClick={() => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough")} >
        <FaStrikethrough />
      </SquareButton>

      <VerticalSpacer />

      <SquareButton onClick={insertLink} active={isLink} title="Insert Link">
        <FaLink />
      </SquareButton>
      <SquareButton onClick={()=>setOpenEmbedImage(true)}><FaImage /></SquareButton>
      <VerticalSpacer />
      <SquareButton
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left")}
      >
        <FaAlignLeft />
      </SquareButton>
      <SquareButton
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center")}
      >
        <FaAlignCenter />
      </SquareButton>
      <SquareButton
        onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right")}
      >
        <FaAlignRight />
      </SquareButton>
      <SquareButton onClick={() => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify") }>
        <FaAlignJustify />
      </SquareButton>
      <VerticalSpacer />
      <FontDropDown fontSize={fontSize} />
      <FamilyDropDown fontFamily={fontFamily} />      
      <VerticalSpacer />
      {/* <FontColorDropDown type="font-color" updater={applyStyleText} color={fontColor} icon={<FaFont />} />
      <FontColorDropDown type="background-color" updater={applyStyleText} color={bgColor} icon={<FaPaintBrush />}/> */}
      <EmbedImageModal show={openEmbedImage} onClose={()=>setOpenEmbedImage(false)} />
    </ToolbarWrapper>
  );
};

export default LexicalToolbar;
