import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React from 'react';
import StyleDropDown from '../../core/StyleDropDown';
const FamilyDropDown = (props) => {
    const [editor] = useLexicalComposerContext();
    const options = [
        { id: "Arial", item: "Arial", clickHandler: () => { } },
        { id: "Courier New", item: "Courier New", clickHandler: () => { } },
        { id: "Georgia", item: "Georgia", clickHandler: () => { } },
        { id: "Times New Roman", item: "Times New Roman", clickHandler: () => { } },
        { id: "Trebuchet MS", item: "Trebuchet MS", clickHandler: () => { } },
        { id: "Verdana", item: "Verdana", clickHandler: () => { } },
    ];
    return (React.createElement(StyleDropDown, { value: props.fontFamily, style: "font-family", options: options, editor: editor }));
};
export default FamilyDropDown;
//# sourceMappingURL=index.js.map