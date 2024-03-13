import React, { useEffect, useMemo } from "react";
import InputWrapper from "../../core/InputWrapper";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useInputValAndError } from "../../core/hook/useInputValnError";
const WYSIWYG = (props) => {
    var _a;
    const { value, setValue } = useInputValAndError(props.name);
    useEffect(() => {
        if (value === undefined || value === null) {
            setValue(props.name, "");
        }
    }, [value]);
    return (React.createElement(InputWrapper, Object.assign({ type: (_a = props.type) !== null && _a !== void 0 ? _a : "wysiwyg" }, props),
        React.createElement(ReactQuillWrapper, Object.assign({}, props))));
};
const ReactQuillWrapper = (props) => {
    const toolbarOptions = useMemo(() => [
        ["bold", "italic", "underline", "strike"],
        ["blockquote", "code-block"],
        ["link", "image"],
        [{ header: 1 }, { header: 2 }],
        [{ list: "ordered" }, { list: "bullet" }],
        [{ script: "sub" }, { script: "super" }],
        [{ indent: "-1" }, { indent: "+1" }],
        [{ direction: "rtl" }],
        [{ size: ["small", false, "large", "huge"] }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        [{ color: [] }, { background: [] }],
        [{ font: [] }],
        [{ align: [] }],
        ["clean"], // remove formatting button
    ], []);
    return (React.createElement(ReactQuill, Object.assign({ theme: "snow", modules: { toolbar: toolbarOptions }, onChange: (a) => props.onChange && props.onChange(a), value: props.value, onBlur: props.onBlur }, props.quillProps)));
};
export default WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map