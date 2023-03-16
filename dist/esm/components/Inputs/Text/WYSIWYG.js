import React, { useMemo } from 'react';
import InputWrapper from "../../core/InputWrapper";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const WYSIWYG = (props) => {
    return (React.createElement(InputWrapper, Object.assign({}, props), (IWprops) => {
        console.log("[props] - ", IWprops);
        return React.createElement(ReactQuillWrapper, Object.assign({}, IWprops, props));
        // return <ReactQuill modules={{toolbar : toolbarOptions}} {...IWprops} theme={props.theme} />;
    }));
};
const ReactQuillWrapper = (props) => {
    const toolbarOptions = useMemo(() => ([
        ['bold', 'italic', 'underline', 'strike'],
        ['blockquote', 'code-block'],
        ['link', 'image'],
        [{ 'header': 1 }, { 'header': 2 }],
        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],
        [{ 'indent': '-1' }, { 'indent': '+1' }],
        [{ 'direction': 'rtl' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'] // remove formatting button
    ]), []);
    return React.createElement(ReactQuill, { theme: 'snow', modules: { toolbar: toolbarOptions }, onChange: props.onChange });
};
export default WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map