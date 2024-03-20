var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useMemo } from "react";
import InputWrapper from "../../core/InputWrapper/index";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useInputValAndError } from "../../core/hook/useInputValnError";
var WYSIWYG = function (props) {
    var _a;
    var _b = useInputValAndError(props.name), value = _b.value, setValue = _b.setValue;
    useEffect(function () {
        if (value === undefined || value === null) {
            setValue(props.name, "");
        }
    }, [value]);
    return (_jsx(InputWrapper, __assign({ empty: _jsx("p", {}), type: (_a = props.type) !== null && _a !== void 0 ? _a : "wysiwyg" }, props, { children: _jsx(ReactQuillWrapper, __assign({}, props)) })));
};
var ReactQuillWrapper = function (props) {
    var toolbarOptions = useMemo(function () { return [
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
    ]; }, []);
    return (_jsx(ReactQuill, __assign({ theme: "snow", modules: { toolbar: toolbarOptions }, onChange: function (a) { return props.onChange && props.onChange(a); }, value: props.value, onBlur: props.onBlur }, props.quillProps)));
};
export default WYSIWYG;
//# sourceMappingURL=WYSIWYG.js.map