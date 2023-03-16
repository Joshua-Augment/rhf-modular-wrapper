import React, { useState, useCallback, useEffect } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { mergeRegister } from "@lexical/utils";
import { $getSelectionStyleValueForProperty, /* $patchStyleText */ } from "@lexical/selection";
import { $isLinkNode, TOGGLE_LINK_COMMAND } from '@lexical/link';
import styled from "styled-components";
import { FaUndo, FaStrikethrough, FaRedo, FaBold, FaItalic, FaUnderline, FaLink, FaAlignLeft, FaAlignCenter, FaAlignRight, FaAlignJustify, FaImage, } from "react-icons/fa";
import { $getSelection, $isRangeSelection, FORMAT_TEXT_COMMAND, FORMAT_ELEMENT_COMMAND, UNDO_COMMAND, REDO_COMMAND, } from "lexical";
import { SquareButton, VerticalSpacer, } from "./components/core/styled_components";
import FontDropDown from "./components/Dropdowns/FontDropDown";
import FamilyDropDown from "./components/Dropdowns/FamilyDropdown";
import EmbedImageModal from "./components/Modals/EmbedImage";
import { getSelectedNode } from "../utils/getSelectedNode";
import { sanitizeUrl } from "../utils/url";
const ToolbarWrapper = styled.div `
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
    const [openEmbedImage, setOpenEmbedImage] = useState(false);
    const [isBold, setIsBold] = useState(false);
    const [isItalic, setIsItalic] = useState(false);
    const [isStrikethrough, setIsStrikethrough] = useState(false);
    const [isUnderline, setIsUnderline] = useState(false);
    const [fontSize, setFontSize] = useState(DEFAULT_FONT_SIZE);
    const [fontFamily, setFontFamily] = useState("Arial");
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
            setFontSize($getSelectionStyleValueForProperty(selection, "font-size", DEFAULT_FONT_SIZE));
            setFontFamily($getSelectionStyleValueForProperty(selection, "font-family", DEFAULT_FONT_FAMILY));
            // Update links
            const node = getSelectedNode(selection);
            const parent = node.getParent();
            if ($isLinkNode(parent) || $isLinkNode(node)) {
                setIsLink(true);
            }
            else {
                setIsLink(false);
            }
            // setFontColor($getSelectionStyleValueForProperty(selection, "color", DEFAULT_COLOR));
            // setBgColor($getSelectionStyleValueForProperty(selection,"background-color",DEFAULT_BG_COLOR));
        }
    }, [editor]);
    const insertLink = useCallback(() => {
        if (!isLink) {
            editor.dispatchCommand(TOGGLE_LINK_COMMAND, sanitizeUrl('https://'));
        }
        else {
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
        return mergeRegister(editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                updateToolbar();
            });
        }));
    }, [updateToolbar, editor]);
    return (React.createElement(ToolbarWrapper, null,
        React.createElement(SquareButton, { onClick: () => editor.dispatchCommand(UNDO_COMMAND, undefined) },
            React.createElement(FaUndo, null)),
        React.createElement(SquareButton, { onClick: () => editor.dispatchCommand(REDO_COMMAND, undefined) },
            React.createElement(FaRedo, null)),
        React.createElement(VerticalSpacer, null),
        React.createElement(SquareButton, { active: isBold, onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold") },
            React.createElement(FaBold, null)),
        React.createElement(SquareButton, { active: isItalic, onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic") },
            React.createElement(FaItalic, null)),
        React.createElement(SquareButton, { active: isUnderline, onClick: () => { console.log("Underline", editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline")); } },
            React.createElement(FaUnderline, null)),
        React.createElement(SquareButton, { title: "Strike-through", active: isStrikethrough, onClick: () => editor.dispatchCommand(FORMAT_TEXT_COMMAND, "strikethrough") },
            React.createElement(FaStrikethrough, null)),
        React.createElement(VerticalSpacer, null),
        React.createElement(SquareButton, { onClick: insertLink, active: isLink, title: "Insert Link" },
            React.createElement(FaLink, null)),
        React.createElement(SquareButton, { onClick: () => setOpenEmbedImage(true) },
            React.createElement(FaImage, null)),
        React.createElement(VerticalSpacer, null),
        React.createElement(SquareButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "left") },
            React.createElement(FaAlignLeft, null)),
        React.createElement(SquareButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "center") },
            React.createElement(FaAlignCenter, null)),
        React.createElement(SquareButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "right") },
            React.createElement(FaAlignRight, null)),
        React.createElement(SquareButton, { onClick: () => editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, "justify") },
            React.createElement(FaAlignJustify, null)),
        React.createElement(VerticalSpacer, null),
        React.createElement(FontDropDown, { fontSize: fontSize }),
        React.createElement(FamilyDropDown, { fontFamily: fontFamily }),
        React.createElement(VerticalSpacer, null),
        React.createElement(EmbedImageModal, { show: openEmbedImage, onClose: () => setOpenEmbedImage(false) })));
};
export default LexicalToolbar;
//# sourceMappingURL=index.js.map