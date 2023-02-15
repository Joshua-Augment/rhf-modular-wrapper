import React from 'react';
import InputWrapper from '../../core/InputWrapper';
import 'quill/dist/quill.snow.css';
import { useQuill } from 'react-quilljs';
import { useEffect } from 'react';
const WYSIWYG = (props) => {
    return (React.createElement(InputWrapper, Object.assign({ noBorder: true }, props), (IWprops) => {
        console.log("[props] - ", IWprops);
        return React.createElement(QuillEditor, Object.assign({}, IWprops));
    }));
};
const QuillEditor = (props) => {
    const { quill, quillRef } = useQuill();
    // Set Default
    useEffect(() => { if (props.value !== undefined && quill !== undefined) {
        quill.clipboard.dangerouslyPasteHTML(props.value);
    } }, []);
    // On CHange
    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta, oldDelta, source) => { props.onChange(quillRef.current.firstChild.innerHTML); });
        }
    }, [quill]);
    return React.createElement("div", null,
        React.createElement("div", { id: props.name, ref: quillRef }));
};
export default WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map