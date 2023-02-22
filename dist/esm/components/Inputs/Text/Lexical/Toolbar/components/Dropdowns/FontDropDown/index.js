import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import React from "react";
import StyleDropDown from "../../core/StyleDropDown";
const FontDropDown = (props) => {
    const [editor] = useLexicalComposerContext();
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
    return (React.createElement(StyleDropDown, { value: props.fontSize, style: "font-size", options: options, editor: editor }));
};
export default FontDropDown;
//# sourceMappingURL=index.js.map