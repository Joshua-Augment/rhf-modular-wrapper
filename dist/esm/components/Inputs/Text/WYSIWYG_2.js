import React from "react";
import InputWrapper from "../../core/InputWrapper";
import LexicalEditor from "./Lexical/LexicalEditor";
const WYSIWYG = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props), (IWprops) => {
        // // console.log("[props] - ", IWprops);
        return React.createElement(LexicalEditor, Object.assign({}, IWprops, { theme: props.theme }));
    }));
};
export default WYSIWYG;
//# sourceMappingURL=WYSIWYG_2.js.map