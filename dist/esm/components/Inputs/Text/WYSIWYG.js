import React, { useMemo } from 'react';
import InputWrapper from "../../core/InputWrapper";
import { useFormContext } from "react-hook-form";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
const WYSIWYG = (props) => {
    const { watch, setValue } = useFormContext();
    const _val = watch(props.name);
    const val = useMemo(() => _val, [_val]);
    return (React.createElement(InputWrapper, Object.assign({}, props),
        React.createElement(ReactQuillWrapper, Object.assign({}, props, { value: val, onChange: (a) => setValue(props.name, a) }))));
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