"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const LexicalComposerContext_1 = require("@lexical/react/LexicalComposerContext");
const utils_1 = require("@lexical/utils");
const selection_1 = require("@lexical/selection");
const styled_components_1 = __importDefault(require("styled-components"));
const fa_1 = require("react-icons/fa");
const lexical_1 = require("lexical");
const styled_components_2 = require("./components/core/styled_components");
const FontDropDown_1 = __importDefault(require("./components/Dropdowns/FontDropDown"));
const FamilyDropdown_1 = __importDefault(require("./components/Dropdowns/FamilyDropdown"));
const EmbedImage_1 = __importDefault(require("./components/Modals/EmbedImage"));
const ToolbarWrapper = styled_components_1.default.div `
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
    const [editor] = (0, LexicalComposerContext_1.useLexicalComposerContext)();
    // const [activeEditor, setActiveEditor] = useState(editor); //eslint-disable-line
    // const [isEditable, setIsEditable] = useState(true);
    const [openEmbedImage, setOpenEmbedImage] = (0, react_1.useState)(false);
    const [isBold, setIsBold] = (0, react_1.useState)(false);
    const [isItalic, setIsItalic] = (0, react_1.useState)(false);
    const [isStrikethrough, setIsStrikethrough] = (0, react_1.useState)(false);
    const [isUnderline, setIsUnderline] = (0, react_1.useState)(false);
    const [fontSize, setFontSize] = (0, react_1.useState)(DEFAULT_FONT_SIZE);
    const [fontFamily, setFontFamily] = (0, react_1.useState)("Arial");
    // const [fontColor, setFontColor] = useState<string>("#000");
    // const [bgColor, setBgColor] = useState<string>("#fff");
    // const [isLink, setIsLink] = useState(false);
    const updateToolbar = (0, react_1.useCallback)(() => {
        const selection = (0, lexical_1.$getSelection)();
        if ((0, lexical_1.$isRangeSelection)(selection)) {
            setIsBold(selection.hasFormat("bold"));
            setIsItalic(selection.hasFormat("italic"));
            setIsStrikethrough(selection.hasFormat("strikethrough"));
            setIsUnderline(selection.hasFormat("underline"));
            setFontSize((0, selection_1.$getSelectionStyleValueForProperty)(selection, "font-size", DEFAULT_FONT_SIZE));
            setFontFamily((0, selection_1.$getSelectionStyleValueForProperty)(selection, "font-family", DEFAULT_FONT_FAMILY));
            // setFontColor($getSelectionStyleValueForProperty(selection, "color", DEFAULT_COLOR));
            // setBgColor($getSelectionStyleValueForProperty(selection,"background-color",DEFAULT_BG_COLOR));
        }
    }, [editor]);
    // const applyStyleText = useCallback(
    //   (styles: Record<string, string>) => {
    //     // console.log("[applyStyleText] - Style : ",styles)
    //     activeEditor.update(() => {
    //       const selection = $getSelection();
    //       if ($isRangeSelection(selection)) {
    //         $patchStyleText(selection, styles);
    //       }
    //     });
    //   },
    //   [activeEditor],
    // );
    (0, react_1.useEffect)(() => {
        return (0, utils_1.mergeRegister)(editor.registerEditableListener((editable) => {
        }), editor.registerUpdateListener(({ editorState }) => {
            editorState.read(() => {
                updateToolbar();
            });
        }));
    }, [updateToolbar, editor]);
    return (react_1.default.createElement(ToolbarWrapper, null,
        react_1.default.createElement(styled_components_2.SquareButton, { onClick: () => editor.dispatchCommand(lexical_1.UNDO_COMMAND, undefined) },
            react_1.default.createElement(fa_1.FaUndo, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { onClick: () => editor.dispatchCommand(lexical_1.REDO_COMMAND, undefined) },
            react_1.default.createElement(fa_1.FaRedo, null)),
        react_1.default.createElement(styled_components_2.VerticalSpacer, null),
        react_1.default.createElement(styled_components_2.SquareButton, { active: isBold, onClick: () => editor.dispatchCommand(lexical_1.FORMAT_TEXT_COMMAND, "bold") },
            react_1.default.createElement(fa_1.FaBold, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { active: isItalic, onClick: () => editor.dispatchCommand(lexical_1.FORMAT_TEXT_COMMAND, "italic") },
            react_1.default.createElement(fa_1.FaItalic, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { active: isUnderline, onClick: () => editor.dispatchCommand(lexical_1.FORMAT_TEXT_COMMAND, "underline") },
            react_1.default.createElement(fa_1.FaUnderline, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { active: isStrikethrough, onClick: () => editor.dispatchCommand(lexical_1.FORMAT_TEXT_COMMAND, "strikethrough") },
            react_1.default.createElement(fa_1.FaStrikethrough, null)),
        react_1.default.createElement(styled_components_2.VerticalSpacer, null),
        react_1.default.createElement(styled_components_2.SquareButton, null,
            react_1.default.createElement(fa_1.FaLink, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { onClick: () => setOpenEmbedImage(true) },
            react_1.default.createElement(fa_1.FaImage, null)),
        react_1.default.createElement(styled_components_2.VerticalSpacer, null),
        react_1.default.createElement(styled_components_2.SquareButton, { onClick: () => editor.dispatchCommand(lexical_1.FORMAT_ELEMENT_COMMAND, "left") },
            react_1.default.createElement(fa_1.FaAlignLeft, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { onClick: () => editor.dispatchCommand(lexical_1.FORMAT_ELEMENT_COMMAND, "center") },
            react_1.default.createElement(fa_1.FaAlignCenter, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { onClick: () => editor.dispatchCommand(lexical_1.FORMAT_ELEMENT_COMMAND, "right") },
            react_1.default.createElement(fa_1.FaAlignRight, null)),
        react_1.default.createElement(styled_components_2.SquareButton, { onClick: () => editor.dispatchCommand(lexical_1.FORMAT_ELEMENT_COMMAND, "justify") },
            react_1.default.createElement(fa_1.FaAlignJustify, null)),
        react_1.default.createElement(styled_components_2.VerticalSpacer, null),
        react_1.default.createElement(FontDropDown_1.default, { fontSize: fontSize }),
        react_1.default.createElement(FamilyDropdown_1.default, { fontFamily: fontFamily }),
        react_1.default.createElement(styled_components_2.VerticalSpacer, null),
        react_1.default.createElement(EmbedImage_1.default, { show: openEmbedImage, onClose: () => setOpenEmbedImage(false) })));
};
exports.default = LexicalToolbar;
//# sourceMappingURL=index.js.map